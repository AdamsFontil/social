'use client'
import React from 'react';
import Menu from '@/components/myUi/Menu';
import Posts from '@/components/myUi/Posts';
import Sidebar from '@/components/myUi/Sidebar';
import Inbox from './Inbox';
import Texts from './Texts'
import BottomMenu from '@/components/myUi/BottomMenu';


const Messages: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <div className='hidden md:grid md:col-span-2'>
      <Menu />
      </div>
      <div className='md:col-span-3 col-span-4 px-4 py-2 border-l'>
        <Inbox />
        <BottomMenu type='message' />
      </div>
      <div className='md:col-span-5 border-l'>
        <Texts />
      </div>
    </div>
  );
}

export default Messages;
