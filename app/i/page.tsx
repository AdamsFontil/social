'use client'
import React from 'react';
import Menu from '@/components/myUi/Menu';
import { Input } from "@/components/ui/input"


import WhoToFollow from '@/components/myUi/WhoToFollow';
import TrendingCard from '@/components/myUi/TrendingCard';



const iHome: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <Menu />
      <div className='col-span-5 flex flex-col border-x'>

      </div>
      <div className='flex flex-col col-span-3 gap-2 p-2'>
        <Input type="text" placeholder="Search" className='rounded-full' />
        <TrendingCard />
        <WhoToFollow />
      </div>
    </div>
  );
}

export default iHome;
