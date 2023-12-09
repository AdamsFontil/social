// path-to-your-fetchUserProfile.ts
import { supabase } from '../utils/supabase';
import { UserProfile } from '../utils/supabaseTypes';

export async function fetchSpecificProfile(username: string): Promise<UserProfile | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_name', username);

    if (error) {
      console.error('Error fetching profile:', error);
      return null;
    }

    // Cast data to UserProfile type
    const userProfileData: UserProfile = data[0] as UserProfile;
    console.log('userProfile returned from return api---', userProfileData)
    return userProfileData;
  } catch (error: any) {
    console.error('Error fetching profile:', error.message);
    return null;
  }
}
