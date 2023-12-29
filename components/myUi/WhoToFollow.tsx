'use client'
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from '../ui/card';
import Footer from './Footer';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { useQuery } from 'react-query';
import { fetchProfiles } from '@/app/api/fetchProfiles';
import Link from 'next/link';

const WhoToFollow: React.FC = () => {
  // Use the useQuery hook to fetch profiles
  const { data: profiles, isLoading, isError } = useQuery('profiles', () => fetchProfiles(3));

  if (isLoading) {
    // Handle loading state
    return <p>Loading...</p>;
  }

  if (isError) {
    // Handle error state
    return <p>Error fetching profiles</p>;
  }

  return (
    <div className='sticky top-0'>
      <Card>
        <CardHeader>
          <CardTitle className='pb-4 p-4'>Who to follow</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-4'>
            {profiles?.map((profile) => (
             <div className='flex items-center justify-between gap-5 hover:bg-secondary p-2 w-full bg-re-600' key={profile.id}>
                <Link href={`/${profile.user_name}`}><div className='flex gap-2'>
                  <Avatar className='w-12 h-12'>
                    <AvatarImage src={profile.profile_picture_url} />
                    <AvatarFallback>{profile.user_name}</AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col'>
                    <p>{profile.display_name}</p>
                    <p>@{profile.user_name}</p>
                  </div>
                </div>
                </Link>
                <div className=''>
                  <Button className='flex items-end rounded-full'>Follow</Button>
                </div>
              </div>

            ))}
          </div>
        </CardContent>
        <CardFooter className='text-sky-500 p-4 hover:bg-secondary rounded-b-md'>
          <p>Show more</p>
        </CardFooter>
      </Card>
      <div className='text-xs'>
        <Footer />
      </div>
    </div>
  );
};

export default WhoToFollow;
