import React from 'react';
import Menu from '@/components/myUi/Menu';
import Posts from '@/components/myUi/Posts';
import Sidebar from '@/components/myUi/Sidebar';


const Home: React.FC = () => {
  return (
    <div className='grid grid-cols-4 gap-5'>
      <Menu />
      <Posts />
      <Sidebar />
    </div>
  );
}

export default Home;
