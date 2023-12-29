import { createClient, PostgrestResponse } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;
// console.log('supabase key---', process.env.NEXT_PUBLIC_SUPABASE_KEY)
// console.log('supabase URL---', process.env.NEXT_PUBLIC_SUPABASE_URL)
export const supabase = createClient(supabaseUrl, supabaseKey);


//fixed this part, it was missing the .env.local file with the appropriate key. keep this noted for next time
