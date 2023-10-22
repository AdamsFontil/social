export interface Post {
  id: number;
  user_id: string;
  content: string;
  created_at: string;
  updated_at: string;
  likes: number | null;
  views: number | null;
  replies: number | null;
  retweets: number | null;
  poster_name: string;
  poster_avatar: string;
  poster_user_name: string;
}

export interface Profile {
  // Define the fields in the 'profiles' table
  user_id: string;
  user_name: string;
  display_name: string;
  profile_picture_url: string;
}

// Define a type for the combined data
export type CombinedData = Post & Profile;
