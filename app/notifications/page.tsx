import React from 'react';
import Menu from '@/components/myUi/Menu';
import Posts from '@/components/myUi/Posts';
import WhoToFollow from '@/components/myUi/WhoToFollow';
import { TabsForNotifications } from './TabsForNotifications';
import TrendingCard from '@/components/myUi/TrendingCard';
import { Settings } from '../../node_modules/lucide-react';




const Notifications: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <Menu />
      <div className='col-span-5 border'>
        <div className='px-2 flex justify-between items-center text-3xl'>
          <h3>Notifications</h3>
          <div className='hover:bg-secondary p-2 rounded-full'>
          <Settings className='' />
          </div>

        </div >
        <div>
        <TabsForNotifications />
        </div>
      </div>

      <div className='col-span-3 py-2 flex flex-col gap-2 pr-4'>
        <TrendingCard />
        <WhoToFollow />
      </div>
    </div>
  );
}

export default Notifications;
