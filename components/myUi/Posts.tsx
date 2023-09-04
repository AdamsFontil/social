import React from 'react';
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import EveryoneDropdown from './EveryoneDropdown';
import DropdownCheck from './DropdownCheck'
import { Button } from '../ui/button';
import { Image, Vote, Smile, CalendarCheck, Film, MapPin } from '../../node_modules/lucide-react'


const posts = [
  {
    id: 1,
    username: 'user123',
    content: 'Just had an amazing time at the beach! ☀️🏖️ #BeachDay',
    timestamp: '2 hours ago',
    likes: 15,
    retweets: 5,
  },
  {
    id: 2,
    username: 'techFanatic',
    content: 'Excited about the latest tech conference. Can\'t wait to learn and connect! #TechConference',
    timestamp: '4 hours ago',
    likes: 25,
    retweets: 10,
  },
  {
    id: 3,
    username: 'foodieEats',
    content: 'Tried a new recipe today, and it turned out amazing! 🍔🍟 #CookingAdventures',
    timestamp: '6 hours ago',
    likes: 40,
    retweets: 8,
  },
  {
    id: 4,
    username: 'user123',
    content: 'Just had an amazing time at the beach! ☀️🏖️ #BeachDay',
    timestamp: '2 hours ago',
    likes: 15,
    retweets: 5,
  },
  {
    id: 5,
    username: 'techFanatic',
    content: 'Excited about the latest tech conference. Can\'t wait to learn and connect! #TechConference',
    timestamp: '4 hours ago',
    likes: 25,
    retweets: 10,
  },
  {
    id: 6,
    username: 'foodieEats',
    content: 'Tried a new recipe today, and it turned out amazing! 🍔🍟 #CookingAdventures',
    timestamp: '6 hours ago',
    likes: 40,
    retweets: 8,
  },
  {
    id: 7,
    username: 'user123',
    content: 'Just had an amazing time at the beach! ☀️🏖️ #BeachDay',
    timestamp: '2 hours ago',
    likes: 15,
    retweets: 5,
  },
  {
    id: 8,
    username: 'techFanatic',
    content: 'Excited about the latest tech conference. Can\'t wait to learn and connect! #TechConference',
    timestamp: '4 hours ago',
    likes: 25,
    retweets: 10,
  },
  {
    id: 9,
    username: 'foodieEats',
    content: 'Tried a new recipe today, and it turned out amazing! 🍔🍟 #CookingAdventures',
    timestamp: '6 hours ago',
    likes: 40,
    retweets: 8,
  },
  {
    id: 10,
    username: 'user123',
    content: 'Just had an amazing time at the beach! ☀️🏖️ #BeachDay',
    timestamp: '2 hours ago',
    likes: 15,
    retweets: 5,
  },
  {
    id: 11,
    username: 'techFanatic',
    content: 'Excited about the latest tech conference. Can\'t wait to learn and connect! #TechConference',
    timestamp: '4 hours ago',
    likes: 25,
    retweets: 10,
  },
  {
    id: 12,
    username: 'foodieEats',
    content: 'Tried a new recipe today, and it turned out amazing! 🍔🍟 #CookingAdventures12293939494',
    timestamp: '6 hours ago',
    likes: 40,
    retweets: 8,
  },

];

const Posts: React.FC = () => {
  return (
    <div className='col-span-5 w-full'>
      <div className='text-2xl flex flex-col border p-2 gap-4'>
        <div>Home</div>
        <div className='flex justify-around'>
          <div>For you</div>
          <div>Following</div>
        </div>
      </div>


      <div className='flex border-x border-b'>
          <div className='p-5'>
          <Avatar className='w-12 h-12'>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          </div>

          <div className=' p-4 flex flex-col gap-2 pb-2 flex-1 '>
            <EveryoneDropdown
              ButtonTitle="Everyone"
              DropdownTitle="Choose audience"
              Choice1="Everyone"
              Choice2="Circle"
              Choice3="Followers"
              />

            <Input type="text" className='border-0 hover:border-red-600' placeholder="What's happening?!" />
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
              <Button className='bg-sky-500 text-white rounded-full'>Post</Button>
            </div>
          </div>

          </div>
      </div>


      <div className=''>
        {posts.map((post) => (
          <div key={post.id} className="post flex gap-4 p-2 border-x border-b">
            <div className='avatar'>
            <Avatar>
              <AvatarImage src="https://github2.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>{post.username}</AvatarFallback>
            </Avatar>
            </div>
            <div className='content  w-full'>
              <div className='flex justify-between'>
                <div className='flex gap-2 '>
                  <p>Username</p>
                  <p>Handler</p>
                  <p>Timestamp</p>
                </div>
                <div className=''>
                  <p>More ...</p>
                </div>
              </div>

              <div className='py-5'>
                <p className="content">{post.content}</p>
              </div>
              <div className="actions flex justify-between">
                <span className="likes">{post.likes} Replies</span>
                <span className="retweets">{post.retweets} Reposts</span>
                <span className="retweets">{post.retweets} Likes</span>
                <span className="retweets">{post.retweets} Views</span>
                <span className="retweets">{post.retweets} Share</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
