import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Blog {
  id: string
  Title: string
  excerpt: string
  content_markdown: string
  category: string
  date_created: string
  date_updated: string
  author: string
  picture: string | null // UUID from database
  picture_url: string | null // Constructed public URL
  picture_data?: {
    id: string;
  } | null;
  user_created: string
  user_updated: string
  status: string
  sort: number
}