import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Home, Search, Bell, CheckCircle, MessageCircle, List, Users, User, MoreHorizontal } from '../../node_modules/lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';

const Menu: React.FC = () => {
  return (
    <div className='col-span-1 flex flex-col gap-4 justify-between items-start px-4 text-xl'>
        <div>
          <Image
            src="/icons8-twitter.svg"
            alt="Twitter Logo"
            width={60}
            height={60}
            objectFit='cover'
          />
        </div>
        <div className='flex flex-col gap-5  w-3/4 '>
          <div className='flex gap-2 items-center'><Home /> Home</div>
          <div className='flex gap-2 items-center'><Search /> Explore</div>
          <div className='flex gap-2 items-center'><Bell /> Notifications</div>
          <div className='flex gap-2 items-center'><CheckCircle /> Verified</div>
          <div className='flex gap-2 items-center'><MessageCircle /> Messages</div>
          <div className='flex gap-2 items-center'><List /> Lists</div>
          <div className='flex gap-2 items-center'><Users /> Communities</div>
          <div className='flex gap-2 items-center'><User /> Profile</div>
          <div className='flex gap-2 items-center'><MoreHorizontal className='border-2 rounded-full border-primary' /> More</div>
          <Button className='p-6 rounded-full bg-sky-500 text-primary'>Post</Button>
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
