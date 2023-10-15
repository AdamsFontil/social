'use client'
import React from 'react';
import Menu from '@/components/myUi/Menu';
import { Input } from "@/components/ui/input"

import CommuntiesTab from './CommunitiesTab';
import WhoToFollow from '@/components/myUi/WhoToFollow';
import TrendingCard from '@/components/myUi/TrendingCard';
import BottomMenu from '@/components/myUi/BottomMenu';


const Communties: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <div className='hidden md:grid md:col-span-2'>
      <Menu />
      </div>
      <div className='md:col-span-5 col-span-10'>
        <CommuntiesTab />
        <BottomMenu />
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
