import React from 'react';
import Menu from '@/components/myUi/Menu';
import Sidebar from '@/components/myUi/Sidebar';
import { Input } from "@/components/ui/input"

import ListsTab from './ListsTab';
import WhoToFollow from '@/components/myUi/WhoToFollow';
import TrendingCard from '@/components/myUi/TrendingCard';


const Lists: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <Menu />
      <div className='col-span-5'>
        <ListsTab />
      </div>
      <div className='flex flex-col col-span-3 gap-2 p-2'>
        <Input type="text" placeholder="Search" className='rounded-full' />
        <TrendingCard />
        <WhoToFollow />
      </div>
    </div>
  );
}

export default Lists;