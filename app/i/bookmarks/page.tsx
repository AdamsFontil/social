'use client'
import React from 'react';
import { Input } from "@/components/ui/input"
import Link from 'next/link';




const Bookmarks: React.FC = () => {
  return (
    <div className='grid grid-cols-10 gap-5'>
      <div className='hidden md:grid md:col-span-2'>

      </div>

      <div className='md:col-span-5 col-span-10 flex flex-col border-x p-4'>
        <header className='flex gap-2'>
        <Link href={'/home'}><div className="hover:bg-secondary p-2 rounded-full md:hidden hover:border"></div></Link>
        <div>
          <h3 className=' text-3xl'>Bookmarks</h3>
          <p className='text-lg text-gray-500'>@Ada1</p>
        </div>

        </header>
        <section className='md:px-16 md:py-8 py-8 px-4'>
          <h3 className='flex items-start text-xl md:text-3xl'>Save posts for later</h3>
          <p className='md:text-lg text-sm text-gray-500'>Bookmark posts to easily find them again in the future.</p>
        </section>

      </div>

      <div className='md:flex hidden flex-col md:col-span-3 gap-2 p-2'>
        <Input type="text" placeholder="Search" className='rounded-full' />

      </div>
    </div>
  );
}

export default Bookmarks;
