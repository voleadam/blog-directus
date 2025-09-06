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
        .from('blog')
        .select('*, picture_data:picture(id, filename_disk)')
        .neq('status', 'draft')
        .order('date_created', { ascending: false })

      if (error) throw error

      const processedBlogs = await Promise.all((data || []).map(async (blog) => {
        let picture_url = null
        
        // Generate Supabase signed URL if we have picture data
        if (blog.picture_data && blog.picture_data.filename_disk) {
          try {
            // First check if the file exists
            const { error: headError } = await supabase.storage
              .from('Pictures')
              .head(blog.picture_data.filename_disk)
            
            if (headError) {
              // File doesn't exist, skip creating signed URL
              picture_url = null
            } else {
              // File exists, create signed URL
            const { data: signedData, error: signedError } = await supabase.storage
              .from('Pictures')
              .createSignedUrl(blog.picture_data.filename_disk, 60 * 60) // 1 hour
            
            if (!signedError && signedData?.signedUrl) {
              picture_url = signedData.signedUrl
            }
            }
          } catch (err) {
            console.warn('Failed to create signed URL for image:', err)
          }
        }
        
        return {
          ...blog,
          picture_url
        }
      }))
      
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
      .channel('blog-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'blog'
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