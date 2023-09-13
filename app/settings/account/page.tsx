import React from 'react';
import Menu from '@/components/myUi/Menu';
import { Input } from "@/components/ui/input"


import WhoToFollow from '@/components/myUi/WhoToFollow';
import TrendingCard from '@/components/myUi/TrendingCard';
import { ArrowLeft } from '../../../node_modules/lucide-react';
import TabsForSettings from './TabsForSettings';




const AccountSettings: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <Menu />
      <div className='col-span-8'>

      <TabsForSettings />







      </div>

    </div>
  );
}

export default AccountSettings;
