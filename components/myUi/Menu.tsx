import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Home, Search, Bell, CheckCircle, MessageCircle, List, Users, User, MoreHorizontal } from '../../node_modules/lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';

const Menu: React.FC = () => {
  return (
    <div className='col-span-2 flex flex-col gap-2 h-screen items-start text-xl sticky top-0'>
        <div>
          <Image
            src="/icons8-twitter.svg"
            alt="Twitter Logo"
            width={60}
            height={60}
            objectFit='cover'
          />
        </div>
        <div className='flex flex-col flex-1  '>
          <div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><Home /> Home</div>
          <div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><Search /> Explore</div>
          <div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><Bell /> Notifications</div>
          <div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><CheckCircle /> Verified</div>
          <div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><MessageCircle /> Messages</div>
          <div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><List /> Lists</div>
          <div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><Users /> Communities</div>
          <div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><User /> Profile</div>
          <div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><MoreHorizontal className='border-2 rounded-full border-primary' /> More</div>
          <Button className='p-6 px-24 mt-2 rounded-full w-full max-w-xl flex text-2xl bg-sky-500 text-primary'>Post</Button>
        </div>
        <div className='py-5 justify-center items-center flex gap-2 '>
          <div>
            <Avatar className='w-16 h-16'>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className='flex flex-col text-sm gap-0'>
            <div>Account name</div>
            <div>@handle</div>
          </div>
          <div>
            <MoreHorizontal />
          </div>
      </div>
    </div>
  );
}

export default Menu;
