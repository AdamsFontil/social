import React from 'react';
import Menu from '@/components/myUi/Menu';
import Posts from '@/components/myUi/Posts';
import Sidebar from '@/components/myUi/Sidebar';
import HomeTab from '@/components/myUi/HomeTab';
import WritePost from '@/components/myUi/WritePost';
import BottomMenu from '@/components/myUi/BottomMenu';
import AddPostMobile from '@/components/myUi/AddPostMobile';


const Home: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <div className='bg-red-500 hidden col-span-2 md:block'>
      <Menu />
      </div>
      <div className='md:col-span-5 col-span-10'>
        <HomeTab />
        <WritePost />
        <Posts />
        {/* <AddPostMobile /> */}
        <BottomMenu />
      </div>
      <div className='bg-blue-500 hidden col-span-3 md:block'>
      <Sidebar />
      </div>
    </div>
  );
}

export default Home;
