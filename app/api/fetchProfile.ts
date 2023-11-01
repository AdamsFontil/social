'use client'
import { supabase } from '../utils/supabase';
import { UserProfile } from '../utils/supabaseTypes';

export async function fetchUserProfile(userId: string): Promise<UserProfile | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      console.error('Error fetching profile:', error);
      return null;
    }

    console.log('data from fetching profile---', data);

    // Cast data to UserProfile type
    const userProfileData: UserProfile = data[0] as UserProfile;
    return userProfileData;
  } catch (error: any) {
    console.error('Error fetching profile:', error.message);
    return null;
  }
}
