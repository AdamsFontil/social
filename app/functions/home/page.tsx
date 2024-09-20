'use client'
import React from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Menu from '@/components/myUi/Menu';
import Posts from '@/components/myUi/Posts';
import Sidebar from '@/components/myUi/Sidebar';
import HomeTab from '@/components/myUi/HomeTab';
import WritePost from '@/components/myUi/WritePost';
import BottomMenu from '@/components/myUi/BottomMenu';
import AddPostMobile from '@/components/myUi/AddPostMobile';
// import useCheckUser from '../utils/checkForUser';
import { fetchUserProfile } from '@/app/api/fetchProfile';
import { useQuery } from 'react-query';
import { UserProfile } from '@/app/utils/supabaseTypes';
// import { useUser } from '../utils/userProfileContext';


const Home: React.FC = () => {

  // const { userProfile } = useUser();
  // useCheckUser()
  // const [user, setUser] = useState<any>({});

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const user = JSON.parse(localStorage.getItem('user') || '{}');
  //     setUser(user);
  //   }
  // }, []);

  // const userId = user.id;

  // const { data: userProfile, isLoading, isError } = useQuery(['userProfile', userId], () => fetchUserProfile(userId));

  // console.log('current User is ---', user);
  // console.log(user.id);

  // if (isLoading) return <p>Loading profile...</p>;
  // if (isError) return <p>Error fetching profile</p>;

  // console.log('data from fetching profile---', userProfile);
  // console.log(typeof(userProfile))

  return (
    <div className='grid grid-cols-10 gap-5'>
      <div className=' hidden col-span-2 md:block'>
      <Menu />
      </div>
      <div className='md:col-span-5 bg-red-600 col-span-10 '>
        <HomeTab />
        <WritePost />
        <Posts />
        {/* <AddPostMobile /> */}
        <BottomMenu />
      </div>
      <div className=' hidden col-span-3 md:block'>
      <Sidebar />
      </div>
    </div>
  );
}

export default Home;
