import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Blog {
  id: number
  status: string
  user_created: string | null
  date_created: string | null
  user_updated: string | null
  date_updated: string | null
  title: string | null
  content: string | null
  picture: { id: string } | null // Directus file relation
  content_markdown: string
  category: string | null
  author: string | null
  picture_url: string | null // Constructed public URL
}