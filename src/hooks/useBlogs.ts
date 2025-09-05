import { useState, useEffect } from 'react'
import { supabase, Blog } from '../lib/supabase'

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchBlogs = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('Blogs')
        .select('*, picture_data:picture(id, filename_disk)')
        .eq('status', 'published')
        .order('date_created', { ascending: false })

      if (error) throw error

      const processedBlogs = await Promise.all(
        (data || []).map(async (blog) => {
          let picture_url = null
          
          if (blog.picture_data?.filename_disk) {
            try {
              const { data: signedUrlData } = await supabase.storage
                .from('Pictures')
                .createSignedUrl(blog.picture_data.filename_disk, 60 * 60) // 1 hour expiry
              
              if (signedUrlData?.signedUrl) {
                picture_url = signedUrlData.signedUrl
              }
            } catch (urlError) {
              console.warn(`Failed to generate signed URL for blog ${blog.id}:`, urlError)
            }
          }
          
          return {
            ...blog,
            picture_url
          }
        })
      )
      
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