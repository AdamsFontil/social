'use client'
import React from 'react';
import Menu from '@/components/myUi/Menu';
import Sidebar from '@/components/myUi/Sidebar';
import { Input } from "@/components/ui/input"
import ListsTab from './ListsTab';
import WhoToFollow from '@/components/myUi/WhoToFollow';
import TrendingCard from '@/components/myUi/TrendingCard';
import BottomMenu from '@/components/myUi/BottomMenu';


const Lists: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <div className='hidden md:grid md:col-span-2'>
      <Menu />
      </div>

      <div className='md:col-span-5 col-span-10'>
        <ListsTab />
        <BottomMenu />
      </div>
      <div className='md:flex flex-col md:col-span-3 hidden gap-2 p-2'>
        <Input type="text" placeholder="Search" className='rounded-full' />
        <TrendingCard />
        <WhoToFollow />
      </div>
    </div>
  );
}

export default Lists;
