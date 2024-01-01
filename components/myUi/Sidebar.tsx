import React from 'react';
import { Input } from "@/components/ui/input"
import WhoToFollow from './WhoToFollow';
import SubscribeCard from './SubscribeCard';
import TrendingCard from './TrendingCard';

const Sidebar: React.FC = () => {
  return (
    <div className='col-span-3 flex flex-col py-2  gap-2 pr-4 items-start h-full fixed top-0 overflow-auto'>
       <Input type="text" placeholder="Search" className='rounded-full' />
        <SubscribeCard />
        <TrendingCard />
        <WhoToFollow />
    </div>
  );
}

export default Sidebar;
