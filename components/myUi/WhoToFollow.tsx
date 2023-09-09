import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from '../ui/card';
import Footer from './Footer';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';

const whoToFollow = [
  {
    id: 1,
    avatar: "KK",
    name: "Kim Khardashian",
    handle: "KimKhardashian",
  },
  {
    avatar: "TS",
    name: "Taylor Swift",
    handle: "taylorSwift13",
  },
  {
    id: 3,
    avatar: "AF",
    name: "Adams Fontil",
    handle: "Adams2Litt",
  }

];


const WhoToFollow: React.FC = () => {
  return (
    <div className='sticky top-0'>
    <Card>
    <CardHeader>
    <CardTitle className='pb-4 p-4'>Who to follow</CardTitle>

    </CardHeader>
    <CardContent>
      <div className='flex flex-col gap-4'>{whoToFollow.slice(0,4).map( item  => (
        <div className=' flex items-center justify-between gap-5  hover:bg-secondary p-2 w-full' key={item.id}>
            <div className='flex gap-2'>
                <Avatar className='w-12 h-12'>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className='flex flex-col'>
                  <p>{item.name}</p>
                  <p>{item.handle}</p>
              </div>
            </div>

            <div className=''>
              <Button className=' flex items-end rounded-full'>Follow</Button>
            </div>

      </div>
      ))} </div>
    </CardContent>
    <CardFooter className='text-sky-500 p-4 hover:bg-secondary rounded-b-md '>
      <p>Show more</p>
    </CardFooter>
  </Card>
  <div className=' text-xs'>
  <Footer />
  </div>
  </div>
  );
}

export default WhoToFollow;
