import { supabase } from '../utils/supabase';
import { UserProfile } from '../utils/supabaseTypes';

export async function fetchProfiles(amount: number): Promise<UserProfile[] | null> {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .limit(amount); // Use the limit function to restrict the number of results

    if (error) {
      console.error('Error fetching profiles:', error);
      return null;
    }

    console.log(`searching for ${amount} users`, data);

    // Cast data to UserProfile array
    const userProfileData: UserProfile[] = data as UserProfile[];
    return userProfileData;
  } catch (error: any) {
    console.error('Error fetching profiles:', error.message);
    return null;
  }
}
