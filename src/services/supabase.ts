import { createClient } from '@supabase/supabase-js'

const PROJECT_URL = import.meta.env.VITE_PROJECT_URL
const API_KEY = import.meta.env.VITE_API_KEY

const supabaseClient = createClient(PROJECT_URL, API_KEY)

export { supabaseClient }
