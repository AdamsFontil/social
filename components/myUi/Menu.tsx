'use client'
import { useState, useEffect } from 'react';
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Home, Search, Bell, CheckCircle, MessageCircle, List, Users, User, MoreHorizontal } from '../../node_modules/lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { ModeToggle } from '../ui/toggleTheme';
import Link from 'next/link';
import  MyPopover  from './MyPopover'
import Verified_Choose from '@/app/i/verified-choose/page';
import { fetchUserProfile } from '@/app/api/fetchProfile';
import { useQuery } from 'react-query';
import { UserProfile } from '@/app/utils/supabaseTypes';
import AccountPopover from './AccountPopover';


const Menu: React.FC = () => {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      setUser(user);
    }
  }, []);

  const userId = user.id;

  const { data: userProfile, isLoading, isError } = useQuery(['userProfile', userId], () => fetchUserProfile(userId));

  console.log('current User is ---', user);
  console.log(user.id);

  if (isLoading) return <p>Loading profile...</p>;
  if (isError) return <p>Error fetching profile</p>;

  console.log('data from fetching profile---', userProfile);
  console.log(typeof(userProfile))


  return (
    <div className='col-span-2 flex flex-col gap-2 h-screen items-start text-xl sticky top-0'>
        <div>
          <Link href={'/home'}><Image
            src="/icons8-twitter.svg"
            alt="Twitter Logo"
            width={60}
            height={60}
            objectFit='cover'
          /> </Link>
        </div>
        <div className='flex flex-col flex-1  '>
          <Link href='/home'><div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><Home /> Home</div></Link>
          <Link href={'/explore'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><Search /> Explore</div></Link>
          <Link href={'/notifications'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><Bell /> Notifications</div></Link>
          <Link href={'/messages'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><MessageCircle /> Messages</div></Link>
          <Link href={'/handler/lists'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><List /> Lists</div></Link>
          <Link href={'/handler/communities'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><Users /> Communities</div></Link>
          {/* <Link href={'/i/verified-choose'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><CheckCircle /> Verified</div></Link> */}
          <Verified_Choose />
          <Link href={'/handler'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><User /> Profile</div></Link>
          <div className=''> < ModeToggle /></div>
          <MyPopover />
          <Button className='p-6 px-24 py-8 mt-2 rounded-full flex text-2xl bg-sky-500 text-primary'>Post</Button>
        </div>
        <div className='flex items-center gap-2 py-2 px-4 hover:bg-gray-600  rounded-full'>

          <div className=''>
            <Avatar className='w-16 h-16'>
              <AvatarImage src={userProfile?.profile_picture_url} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className='flex flex-col text-sm gap-0'>
            <div>{userProfile?.display_name}</div>
            <div>@{userProfile?.user_name}</div>
          </div>
          <div className=''>
            <AccountPopover userProfile={userProfile} />
          </div>
      </div>
    </div>
  );
}

export default Menu;
