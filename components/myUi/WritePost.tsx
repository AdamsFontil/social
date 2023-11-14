'use client'
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import EveryoneDropdown from './EveryoneDropdown';
import { Input } from "../ui/input";
import { Image, Film, Vote, Smile, CalendarCheck, MapPin } from "../../node_modules/lucide-react";
import { Button } from "../ui/button";
import { createPost } from "@/app/api/createPost";
import { UserProfile } from "@/app/utils/supabaseTypes";

const getRandom = () => {
  return Math.floor(Math.random() * 10001);
};
interface Props {
  userProfile: UserProfile | null | undefined;
}

const WritePost: React.FC<Props> = ({ userProfile }) => {
  const [postContent, setPostContent] = useState("");
  console.log('userProfile from WRITEPOST', userProfile)
  console.log('userId', userProfile?.id)
  console.log('posterName', userProfile?.display_name)
  console.log('avatar', userProfile?.profile_picture_url)
  console.log('user_name', userProfile?.user_name)

  const handlePost = async () => {
    try {
      const newPost = {
        content: postContent,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(), // Add any necessary default values
        likes: getRandom(),
        views: getRandom(),
        replies: getRandom(),
        retweets: getRandom(),
        id: getRandom(),
        user_id: userProfile?.id,
        poster_name: userProfile?.display_name,
        poster_avatar: userProfile?.profile_picture_url,
        poster_user_name: userProfile?.user_name

      };

      await createPost(newPost); // Call the createPost function with the new post data
      console.log("Post created successfully:", newPost);
      setPostContent('')
      // Add any additional logic needed after creating the post
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle any errors that occur during the post creation process
    }
  };

  return (
    <div className='md:flex border-x border-b hidden '>
      <div className='px-4 py-2'>
        <Avatar className='w-12 h-12'>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className=' pr-4 py-2 flex flex-col gap-2 pb-2 flex-1 '>
        <EveryoneDropdown
          ButtonTitle="Everyone"
          DropdownTitle="Choose audience"
          Choice1="Everyone"
          Choice2="Circle"
          Choice3="Followers"
        />

        <Input
          type="text"
          normal={true}
          className='border-0 hover:border-red-600'
          placeholder="What's happening?!"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />

        <EveryoneDropdown
          ButtonTitle={`Everyone can reply`}
          DropdownTitle="Who can reply?"
          Choice1="Everyone"
          Choice2="People you follow"
          Choice3="Only people you mention"
        />

        <div className='flex justify-between items-center border-t pt-2'>
          <div className='flex gap-2 text-sky-500'>
            <Image size={24} />
            <Film size={24} />
            <Vote size={24} />
            <Smile size={24} />
            <CalendarCheck size={24} />
            <MapPin className='disabled' size={24} />
          </div>
          <div>
            <Button className='bg-sky-500 px-6 text-white rounded-full' onClick={handlePost}>
              Post
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WritePost;
