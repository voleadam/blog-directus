import { useState, useEffect } from 'react'
import { Blog } from '../lib/supabase'

const DIRECTUS_URL = import.meta.env.VITE_DIRECTUS_URL || 'http://localhost:8055'

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchBlogs = async () => {
    try {
      setLoading(true)
      
      const response = await fetch(
        `${DIRECTUS_URL}/items/blog?fields=id,title,content,content_markdown,author,category,date_created,picture.id&sort=-date_created&filter[status][_neq]=draft`
      )
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      const data = result.data || []
      
      const processedBlogs = data.map((blog: any) => ({
        ...blog,
        picture_url: blog.picture?.id 
          ? `${DIRECTUS_URL}/assets/${blog.picture.id}?format=webp&width=1200` 
          : null
      }))
      
      // Log first 3 picture_url values for testing
      console.log('First 3 picture URLs:', processedBlogs.slice(0, 3).map((blog: any) => ({
        id: blog.id,
        title: blog.title,
        picture_url: blog.picture_url
      })))
      
      setBlogs(processedBlogs)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return { blogs, loading, error, refetch: fetchBlogs }
}