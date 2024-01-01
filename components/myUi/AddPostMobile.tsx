/* eslint-disable react/no-unescaped-entities */
import { Feather, MailPlus } from "../../node_modules/lucide-react";
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger, DrawerClose
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import EveryoneDropdown from './EveryoneDropdown';
import { Image, Film, Vote, Smile, CalendarCheck, MapPin } from "../../node_modules/lucide-react";
import { useUser } from "@/app/utils/userProfileContext";
import { useQueryClient } from 'react-query';
import { useState } from "react";
import { createPost } from "@/app/api/createPost";

import { Textarea } from "../ui/textarea";

interface AddPostMobileProps {
  type?: string;
}

const getRandom = () => {
  return Math.floor(Math.random() * 10001);

};


const AddPostMobile: React.FC<AddPostMobileProps> = ({ type }) => {
  const queryClient = useQueryClient()
  const { userProfile } = useUser();
  const [postContent, setPostContent] = useState("");
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
        user_id: userProfile?.id,
        poster_name: userProfile?.display_name,
        poster_avatar: userProfile?.profile_picture_url,
        poster_user_name: userProfile?.user_name

      };

      await createPost(newPost); // Call the createPost function with the new post data
      // Invalidate the query for posts to trigger a re-fetch
      queryClient.invalidateQueries('posts');
      console.log("Post created successfully:", newPost);
      setPostContent('')

    } catch (error) {
      console.error("Error creating post:", error);

    }
  };
  return (
    <div className="">
      <Drawer >
      <DrawerTrigger asChild className="p-4 w-16 h-16 flex justify-center items-center rounded-full sticky left-0 bg-sky-500">
        {type === "message" ? <MailPlus /> : <Feather />}
      </DrawerTrigger>
      <DrawerContent className=" w-fit flex justify-center items-center flex-col bg-rd-500">
        {/* <DrawerHeader>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader> */}
        <div className='md:flex relative top-0 '>
          <div className='flex gap-4 px-4 py-2'>
            <Avatar className='w-14 h-14'>
              <AvatarImage src={userProfile?.profile_picture_url} />
              <AvatarFallback>{userProfile?.display_name}</AvatarFallback>
            </Avatar>
            <Textarea
              className='ring-0 focus-visible:ring-0 focus-visible:border-0 '
              placeholder="What's happening?!"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}>
              </Textarea>
          </div>

          <div className=' pr-4 py-2 flex flex-col gap-2 pb-2 flex-1 '>


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
              <DrawerClose>
                <Button type="submit" className='bg-sky-500 px-6 text-white rounded-full' onClick={handlePost}>
                  Post
                </Button>
              </DrawerClose>
            </div>

          </div>
      </div>
        {/* <DrawerFooter>
          <Button type="submit">Save changes</Button>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>







    </div>
  );
};





export default AddPostMobile;
