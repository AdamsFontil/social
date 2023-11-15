import { StaticImageData } from "next/image";

export interface Post {
  user_id?: string;
  content: string;
  created_at: string;
  updated_at: string;
  likes: number | null;
  views: number | null;
  replies: number | null;
  retweets: number | null;
  poster_name?: string
  poster_avatar?: string;
  poster_user_name?: string;
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

export interface UserProfile {
  background_picture_url: string,
  bio: string;
  display_name: string;
  followers: any[];
  following: any[];
  id?: string;
  likes: any[];
  posts: any[];
  profile_picture_url: string,
  replies: any[];
  user_id: string;
  user_info?: any;
  user_name: string;
  email: string
}
