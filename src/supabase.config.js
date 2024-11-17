import { createClient } from "@supabase/supabase-js";


const supabase_key = import.meta.env.VITE_SUPABASE_KEY
const supabase_anon_key = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabase_key,supabase_anon_key)

export default supabase