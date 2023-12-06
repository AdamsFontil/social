import { createClient, PostgrestResponse } from '@supabase/supabase-js';

const supabaseUrl = 'https://uhvfikmkgbuykvfmnxzp.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;
export const supabase = createClient(supabaseUrl, supabaseKey);


//fixed this part, it was missing the .env.local file with the appropriate key. keep this noted for next time
