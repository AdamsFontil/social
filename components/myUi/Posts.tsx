import React from 'react';
import { useQuery } from 'react-query';
import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { MessageCircle, Repeat2, Heart, BarChart2, Upload, Dot, MoreHorizontal } from '../../node_modules/lucide-react';
import { getPosts } from '../../app/api/posts';
import { Post, CombinedData } from '../../app/utils/supabaseTypes';

const Posts: React.FC = () => {
  const { data: posts, isLoading, isError } = useQuery<Post[]>(['posts'], getPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading posts</div>;
  }

  return (
    <div className="customer-hover-style">
      {posts.map((post: Post) => (
        <div key={post.id} className="post flex gap-4 p-2 border-x border-b">
          <div className='avatar'>
            <Avatar className='w-12 h-12'>
              <AvatarImage src={post.poster_avatar} alt={post.poster_user_name}/>
              <AvatarFallback>{post.poster_user_name}</AvatarFallback>
            </Avatar>
          </div>
          <div className='content  w-full'>
            <div className='flex gap-2 justify-between items-center text-md'>
              <div className='flex gap-1 '>
                <p>{post.poster_name}</p>
                <p className='text-gray-500'>@{post.poster_user_name}</p>
                <Dot />
                <p>{formatDistanceToNow(new Date(post.created_at), { addSuffix: true, locale: enUS })}</p>
              </div>
              <div className='hover:bg-sky-500 hover:bg-opacity-20 rounded-full p-2'>
                <MoreHorizontal />
              </div>
            </div>

            <div className='py-5'>
              <p className="content">{post.content}</p>
            </div>
            <div className="actions flex justify-between text-sm pb-0 items-center text-gray-400">
              <span className="flex items-center hover:text-sky-500">
                <div className='hover:bg-sky-500 rounded-full hover-bg-opacity-20 p-2'><MessageCircle className='' /> </div>
                {post.likes}
              </span>
              <span className="flex items-center hover:text-green-500">
                <div className='hover:bg-green-500 rounded-full hover-bg-opacity-20 p-2'><Repeat2 className='' /> </div>
                {post.likes}
              </span>
              <span className="flex items-center hover:text-pink-500">
                <div className='hover:bg-pink-500 rounded-full hover-bg-opacity-20 p-2'><Heart className='' /> </div>
                {post.likes}
              </span>
              <div className="flex items-center hover:text-sky-500">
                <div className='hover-bg-sky-500 hover-bg-opacity-20 rounded-full  p-2'><BarChart2/></div>
                <p className=''>{post.retweets}</p>
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
