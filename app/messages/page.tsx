import React from 'react';
import Menu from '@/components/myUi/Menu';
import Posts from '@/components/myUi/Posts';
import Sidebar from '@/components/myUi/Sidebar';
import Inbox from './Inbox';
import Texts from './Texts'


const Messages: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <Menu />
      <div className='col-span-3 border px-4 py-2'>
        <Inbox />
      </div>
      <div className='col-span-5'>
        <Texts />

      </div>
    </div>
  );
}

export default Messages;
