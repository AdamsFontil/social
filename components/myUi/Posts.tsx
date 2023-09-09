
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { MessageCircle, Repeat2, Heart, BarChart2, Upload, Dot, MoreHorizontal } from '../../node_modules/lucide-react'




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
    <div className='customer-hover-style'>
    {posts.map((post) => (
      <div key={post.id} className="post flex gap-4 p-2 border-x border-b">
        <div className='avatar'>
        <Avatar className='w-12 h-12'>
          <AvatarImage src="https://github2.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>{post.username}</AvatarFallback>
        </Avatar>
        </div>
        <div className='content  w-full'>
          <div className='flex gap-2 justify-between items-center text-md'>
            <div className='flex gap-1 '>
              <p>{post.username}</p>
              <p className='text-gray-500'>@{post.username}</p>
              <Dot />
              <p>{post.timestamp}</p>
            </div>
            <div className='hover:bg-sky-500 hover:bg-opacity-20 rounded-full p-2'>
              <MoreHorizontal />
            </div>
          </div>

          <div className='py-5'>
            <p className="content">{post.content}</p>
          </div>
          <div className="actions flex justify-between text-sm items-center text-gray-400">
            <span className="flex items-center hover:text-sky-500"><div className='hover:bg-sky-500 rounded-full hover:bg-opacity-20 p-2'><MessageCircle className='' /> </div> {post.likes}</span>
            <span className="flex items-center hover:text-green-500"><div className='hover:bg-green-500 rounded-full hover:bg-opacity-20 p-2'><Repeat2 className='' /> </div>{post.likes}</span>
            <span className="flex items-center hover:text-pink-500"><div className='hover:bg-pink-500 rounded-full hover:bg-opacity-20 p-2'><Heart className='' /> </div>{post.likes}</span>
            <div className="flex items-center hover:text-sky-500">
              <div className='hover:bg-sky-500 hover:bg-opacity-20 rounded-full  p-2'><BarChart2/></div>
              <p className=''>{post.retweets}</p>
              </div>
            <span className="hover:text-sky-500 hover:bg-sky-500 rounded-full hover:bg-opacity-10 p-2"><Upload /></span>

          </div>
        </div>

      </div>
    ))}
  </div>

  );
}

export default Posts;
