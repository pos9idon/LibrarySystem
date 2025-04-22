import { supabase } from '@/lib/supabaseClient'

export async function getBooks() {
  const { data, error } = await supabase.from('books').select('*')
  if (error) throw error
  return data
}