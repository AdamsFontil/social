import React from 'react';
import Footer from './Footer';

const Sidebar: React.FC = () => {
  return (
    <div className='col-span-1'>
      <div>Search</div>
      <div>Subscribe to premium</div>
      <div>Avatar </div>
      <div>What Happening</div>
      <div>Who to Follow</div>
      <Footer />
    </div>
  );
}

export default Sidebar;
