import { useState, useEffect } from 'react'
import { supabase, Blog } from '../lib/supabase'

const DIRECTUS_URL = import.meta.env.VITE_DIRECTUS_URL || 'http://localhost:8055'

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchBlogs = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('Blogs')
        .select('*, picture_data:picture(id)')
        .eq('status', 'published')
        .order('date_created', { ascending: false })

      if (error) throw error

      const processedBlogs = (data || []).map((blog) => {
        let picture_url = null
        
        // Use Directus Assets endpoint if we have a picture ID
        if (blog.picture_data?.id) {
          picture_url = `${DIRECTUS_URL}/assets/${blog.picture_data.id}?width=800&format=webp&quality=80`
        }
        
        return {
          ...blog,
          picture_url
        }
      })
      
      setBlogs(processedBlogs)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogs()

    // Set up real-time subscription
    const channel = supabase
      .channel('Blogs-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'Blogs'
        },
        () => {
          fetchBlogs()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return { blogs, loading, error, refetch: fetchBlogs }
}