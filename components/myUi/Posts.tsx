import React from 'react';
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

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
  // Add more posts here...
];

const Posts: React.FC = () => {
  return (
    <div className='col-span-2 w-full'>
      <div className='text-2xl flex flex-col border p-2 gap-4'>
        <div>Home</div>
        <div className='flex justify-around'>
          <div>For you</div>
          <div>Following</div>
        </div>
      </div>

      <div>
        <div className='flex'>
          <div>
          <Avatar className='w-16 h-16'>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          </div>

          <div className='p-2 border-b-2 w-full'>
          <Input type="text" className='border-0 hover:border-red-500' placeholder="What's happening?!" />

          </div>



        </div>


      </div>


      <div className=''>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <p className="username">{post.username}</p>
            <p className="content">{post.content}</p>
            <p className="timestamp">{post.timestamp}</p>
            <div className="actions">
              <span className="likes">{post.likes} Likes</span>
              <span className="retweets">{post.retweets} Retweets</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
