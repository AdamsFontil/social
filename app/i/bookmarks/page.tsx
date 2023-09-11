import React from 'react';
import Menu from '@/components/myUi/Menu';
import { Input } from "@/components/ui/input"


import WhoToFollow from '@/components/myUi/WhoToFollow';
import TrendingCard from '@/components/myUi/TrendingCard';



const Bookmarks: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <Menu />
      <div className='col-span-5 flex flex-col border-x p-4'>
        <header>
          <h3 className=' text-3xl'>Bookmarks</h3>
          <p className='text-lg text-gray-500'>@Ada1</p>
        </header>
        <section className='p-16 bg-red-500'>
          <h3 className=' text-3xl'>Save posts for later</h3>
          <p className='text-lg text-gray-500'>Bookmark posts to easily find them again in the future.</p>
        </section>

      </div>
      <div className='flex flex-col col-span-3 gap-2 p-2'>
        <Input type="text" placeholder="Search" className='rounded-full' />
        <TrendingCard />
        <WhoToFollow />
      </div>
    </div>
  );
}

export default Bookmarks;
