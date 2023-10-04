import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uhvfikmkgbuykvfmnxzp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVodmZpa21rZ2J1eWt2Zm1ueHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MTI5MjUsImV4cCI6MjAxMTk4ODkyNX0.jG7JYKx6TSY1c_pWUDVxYhtriWfJjagas5oZ-GIvX6Q';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getPosts() {
  try {
    console.log('supabase key----', supabaseKey)
    // Fetch data from the 'posts' table
    const { data: posts, error } = await supabase.from('posts').select('*');

    if (error) {
      throw error;
    }

    return posts; // Return the fetched data
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    throw error; // Throw the error to be handled elsewhere if needed
  }
}
