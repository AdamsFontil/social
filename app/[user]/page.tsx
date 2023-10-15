'use client'
import React from 'react';
import Menu from '@/components/myUi/Menu';
import { Input } from "@/components/ui/input"
import WhoToFollow from '@/components/myUi/WhoToFollow';
import TrendingCard from '@/components/myUi/TrendingCard';
import { TabsforUser } from './UserTab';
import ProfileSection from './ProfileSection';


const Communties: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <div className='md:grid md:col-span-2 hidden'>
        <Menu />
      </div>

      <div className='md:col-span-5 col-span-10 flex flex-col border-x'>
        <ProfileSection />
        <TabsforUser />
      </div>
      <div className='md:flex hidden flex-col md:col-span-3 gap-2 p-2'>
        <Input type="text" placeholder="Search" className='rounded-full' />
        <TrendingCard />
        <WhoToFollow />
      </div>
    </div>
  );
}

export default Communties;
