import React from 'react';
import Footer from './Footer';
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';

const trendyNews = [
  {
    id: 1,
    headline: "New Smartphone Launch: Exciting Features Revealed",
    source: "Tech News",
    timestamp: "5 minutes ago",
  },
  {
    id: 2,
    headline: "Breaking: Major Scientific Discovery Announced",
    source: "Science Daily",
    timestamp: "15 minutes ago",
  },
  {
    id: 3,
    headline: "Sports Update: Championship Game Results",
    source: "Sports Network",
    timestamp: "30 minutes ago",
  },
  {
    id: 4,
    headline: "Entertainment News: Celebrities Spotted at Gala Event",
    source: "Entertainment Weekly",
    timestamp: "1 hour ago",
  },
  {
    id: 5,
    headline: "Finance Report: Stock Market Surges to New Highs",
    source: "Financial Times",
    timestamp: "2 hours ago",
  },
  {
    id: 6,
    headline: "Health and Wellness: Tips for a Healthy Lifestyle",
    source: "Health Magazine",
    timestamp: "3 hours ago",
  },
  // Add more news items here...
];

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


const Sidebar: React.FC = () => {
  return (
    <div className='col-span-3  flex-grow '>

<div className='sticky top-0 py-2 flex flex-col gap-2 pr-4'>

  <Input type="text" placeholder="Search" className='rounded-full' />

    <Card className=''>
      <CardHeader>
        <CardTitle className='pb-4 p-4'>Subscribe to Premium</CardTitle>
      </CardHeader>
      <CardContent className='text-sm p-4 '>
        <p className='pb-2'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <Button className='rounded-full bg-sky-500 text-white '>Subscribe </Button>
      </CardContent>

    </Card>

      <Card>
        <CardHeader>
        <CardTitle className='pb-4 p-4'>What&apos;s happening</CardTitle>

        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-4'>{trendyNews.slice(0,4).map( news  => (
            <div className=' hover:bg-secondary p-4 w-full' key={news.id}>
              <div className='flex justify-between text-xs'>
                <div className='flex'>
                  <p>{news.source} .</p>

                  <p>{news.timestamp}</p>
                </div>
                <div>
                  <p>...</p>
                </div>

              </div>

            <p className='text-md'>{news.headline}</p>
          </div>
          ))} </div>
        </CardContent>
        <CardFooter className='text-sky-500 p-4 hover:bg-secondary rounded-b-md '>
          <p>Show more</p>
        </CardFooter>
      </Card>

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
    </div>
  );
}

export default Sidebar;
