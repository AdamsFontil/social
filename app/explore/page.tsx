'use client'
import React from 'react';
import Menu from '@/components/myUi/Menu';
import Posts from '@/components/myUi/Posts';
import WhoToFollow from '@/components/myUi/WhoToFollow';
import ExploreTab from './ExploreTab';
import BottomMenu from '@/components/myUi/BottomMenu';



const Explore: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <div className='hidden md:grid md:col-span-2'>
      <Menu />
      </div>
      <div className='md:col-span-5 col-span-10'>
        <ExploreTab />
        <BottomMenu />
      </div>

      <div className='md:col-span-3 py-2 md:flex hidden flex-col gap-2 pr-4'>
        <WhoToFollow />
      </div>
    </div>
  );
}

export default Explore;
