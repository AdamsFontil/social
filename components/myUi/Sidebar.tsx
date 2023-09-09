import React from 'react';
import Footer from './Footer';
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button';
import WhoToFollow from './WhoToFollow';
import SubscribeCard from './SubscribeCard';
import TrendingContent from './TrendingContent';
import TrendingCard from './TrendingCard';





const Sidebar: React.FC = () => {
  return (
    <div className='col-span-3  flex-grow'>

<div className='sticky top-0 py-2 flex flex-col gap-2 pr-4'>

       <Input type="text" placeholder="Search" className='rounded-full' />

        <SubscribeCard />
        <TrendingCard />
        <WhoToFollow />
    </div>
    </div>
  );
}

export default Sidebar;
