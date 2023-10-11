import { createClient } from '@supabase/supabase-js';
import { Post, CombinedData } from '../utils/supabaseTypes'; // Import the types from supabaseTypes.ts

const supabaseUrl = 'https://uhvfikmkgbuykvfmnxzp.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getPosts() {
  try {
    // Fetch data from the 'posts' table
    const { data: posts, error } = await supabase.from<Post>('posts').select('*');

    if (error) {
      throw error;
    }

    return posts; // Return the fetched data
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    throw error; // Throw the error to be handled elsewhere if needed
  }
}

export async function getGoodPosts() {
  try {
    const { data: combinedData, error } = await supabase
      .from('posts')
      .select(`
        posts.id,
        posts.content,
        posts.created_at,
        posts.updated_at,
        posts.likes,
        posts.views,
        posts.replies,
        posts.retweets,
        profiles.user_name AS user_name,
        profiles.display_name AS user_display_name,
        profiles.profile_picture_url AS user_avatar_url
      `)
      .innerJoin('profiles', 'posts.user_id', 'profiles.user_id');

    if (error) {
      throw error;
    }

    return combinedData; // Return the combined data
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    throw error; // Throw the error to be handled elsewhere if needed
  }
}
