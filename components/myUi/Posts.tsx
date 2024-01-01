import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { MessageCircle, Repeat2, Heart, BarChart2, Upload, Dot, MoreHorizontal } from '../../node_modules/lucide-react';
import { getPosts } from '../../app/api/posts';
import { Post, CombinedData } from '../../app/utils/supabaseTypes';
import Link from 'next/link';

const formatShortDistanceToNow = (date: string) => {
  const distance = formatDistanceToNow(new Date(date), { addSuffix: true, locale: enUS }) as string;

  if (!distance) {
    return 'now'; // Handle cases where the distance is not available
  }

  const match = /(\d+)\s?(\w+)/.exec(distance);

  if (!match) {
    return 'now';
  }

  const [, value, unit] = match;
  const unitMap: Record<string, string> = {
    seconds: 's',
    minutes: 'm',
    hour: 'h',
    hours: 'h',
    day: 'd',
    days: 'd',
    month: 'mo',
    months: 'mo',
    year: 'y',
    years: 'y',
  };

  return `${value}${unitMap[unit] || unit}`;
};


const Posts: React.FC = () => {
  const queryClient = useQueryClient();
  const { data: posts, isLoading, isError } = useQuery<Post[]>(['posts'], getPosts, {
    onSuccess: (data) => {
      queryClient.setQueryData(['posts'], data);
    },
  });

  console.log('POSTS---',posts)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading posts</div>;
  }

  return (
    <div className="customer-hover-style text-s md:text-md">
      {posts?.map((post: Post) => (
        <div key={post.id} className="post flex gap-4 border-x border-b bg-ornge-400">
          <Link href={`/${post.poster_user_name}`}>
            <div className='avatar pt-1'>
              <Avatar className='w-12 h-12 hover:opacity-80 transition-opacity duration-300 ease-in-out'>
                <AvatarImage src={post.poster_avatar} alt={post.poster_user_name}/>
                <AvatarFallback>{post.poster_user_name}</AvatarFallback>
              </Avatar>
            </div>
          </Link>
          <div className='flex flex-col bg-gren-500 w-full md:w-full '>
            <div className='flex gap-2 justify-between items-center text-xs md:text-md'>
              <div className='flex gap-1 items-center'>
                <Link href={`/${post.poster_user_name}`}>
                  <p className='hover:underline'>{post.poster_name}</p>
                </Link>
                <p className='text-gray-500'>@{post.poster_user_name}</p>
                <div className='flex items-center justify-center'><Dot /></div>
                <p>{formatShortDistanceToNow(post.created_at)}</p>
              </div>
              <div className='hover:bg-sky-500 hover:bg-opacity-20 rounded-full p-2'>
                <MoreHorizontal />
              </div>
            </div>

            <div className=' bg-pin-700 break-words '>
              <p className="content text-yelow-600 break-words w-full xs:bg-blue-500 md:w-full">{post.content}</p>
            </div>
            <div className="actions flex justify-around md:text-sm text-xs pb-0 items-center text-gray-400 tex">
              <span className="flex items-center hover:text-sky-500">
                <div className='hover:bg-sky-500 rounded-full hover-bg-opacity-20 p-2'><MessageCircle className='' /> </div>
                {post.replies}
              </span>
              <span className="flex items-center hover:text-green-500">
                <div className='hover:bg-green-500 rounded-full hover-bg-opacity-20 p-2'><Repeat2 className='' /> </div>
                {post.retweets}
              </span>
              <span className="flex items-center hover:text-pink-500">
                <div className='hover:bg-pink-500 rounded-full hover-bg-opacity-20 p-2'><Heart className='' /> </div>
                {post.likes}
              </span>
              <div className="flex items-center hover:text-sky-500">
                <div className='hover-bg-sky-500 hover-bg-opacity-20 rounded-full  p-2'><BarChart2/></div>
                <p className=''>{post.views}</p>
              </div>
              <span className="hover:text-sky-500 hover-bg-sky-500 rounded-full hover-bg-opacity-10 p-2"><Upload /></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
