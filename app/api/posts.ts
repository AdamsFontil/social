import { supabase } from '../utils/supabase';
import { Post } from '../utils/supabaseTypes';

export async function getPosts() {
  try {
    const { data: posts, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return posts;
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}
