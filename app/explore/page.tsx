import React from 'react';
import Menu from '@/components/myUi/Menu';
import Posts from '@/components/myUi/Posts';
import WhoToFollow from '@/components/myUi/WhoToFollow';
import ExploreTab from './ExploreTab';



const Explore: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <Menu />
      <div className='col-span-5'>
        <ExploreTab />
      </div>

      <div className='col-span-3 py-2 flex flex-col gap-2 pr-4'>
        <WhoToFollow />
      </div>
    </div>
  );
}

export default Explore;
