import { supabase } from '../utils/supabase';
import { UserProfile } from '../utils/supabaseTypes';

export async function createUserProfile(newUser: UserProfile) {
  console.log('new User info---', newUser)
  try {
    const { data, error } = await supabase.from('profiles').insert([newUser]);
    console.log('new User info', newUser)

    if (error) {
      throw error;
    }

    return data;
  } catch (error: any) {
    // if (error.code === '23505') {
    //   // Handle duplicate key violation (email already exists)
    //   throw new Error('This email is already registered. Please log in or use a different email.');
    // }
    console.error('Error creating post:', error.message);
    throw error;
  }
}
