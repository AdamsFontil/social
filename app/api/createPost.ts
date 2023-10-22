import { supabase } from '../utils/supabase';
import { Post } from '../utils/supabaseTypes';

export async function createPost(newPost: Post) {
  try {
    const { data, error } = await supabase.from('posts').insert([newPost]);

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    console.error('Error creating post:', error.message);
    throw error;
  }
}
