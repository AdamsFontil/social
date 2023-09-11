import React from 'react';
import Menu from '@/components/myUi/Menu';
import Posts from '@/components/myUi/Posts';
import Sidebar from '@/components/myUi/Sidebar';
import HomeTab from '@/components/myUi/HomeTab';
import WritePost from '@/components/myUi/WritePost';


const Home: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <Menu />
      <div className='col-span-5'>
        <HomeTab />
        <WritePost />
        <Posts />
      </div>
      <Sidebar />
    </div>
  );
}

export default Home;