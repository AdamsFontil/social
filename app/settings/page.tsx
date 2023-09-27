import React from 'react';
import Menu from '@/components/myUi/Menu';
import { Input } from "@/components/ui/input"

import TabsForSettings from './TabsForSettings';




const AccountSettings: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <div className='hidden md:grid md:col-span-2'>
      <Menu />
      </div>
      <div className='md:col-span-8 col-span-10'>
      <TabsForSettings />
      </div>

    </div>
  );
}

export default AccountSettings;
