import React from 'react';
import Link from 'next/link';


const HomeTab: React.FC = () => {
  return (
    <div className='text-2xl flex flex-col border-x border-b'>
    <Link href="/home">
      <div className="px-4 py-2">Home</div>
    </Link>

      <div className='flex flex-grow justify-center text-center items-center'>
        <div className='hover:bg-secondary flex-1 p-2'>For you</div>
        <div className='hover:bg-secondary flex-1 p-2'>Following</div>
      </div>
    </div>
  );
}

export default HomeTab;
