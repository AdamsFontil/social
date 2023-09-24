import React from 'react';
import Link from 'next/link';
import { Twitter } from '../../node_modules/lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';


const HomeTab: React.FC = () => {
  return (
    <div className='text-2xl flex flex-col border-x border-b p-2 sticky top-0 bg-background z-10'>
    <Link href="/home">
      <div className="px-4 py-2 hidden md:block">Home</div>
      <div className=' md:hidden flex items-center '>
        <Avatar className=''>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='pl-32'><Twitter /></div>
    </div>
    </Link>

      <div className='flex flex-grow justify-center text-center items-center'>
        <div className='hover:bg-secondary flex-1 p-2'>For you</div>
        <div className='hover:bg-secondary flex-1 p-2'>Following</div>
      </div>
    </div>
  );
}

export default HomeTab;
