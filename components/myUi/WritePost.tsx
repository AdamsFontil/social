import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import EveryoneDropdown from './EveryoneDropdown';
import { Input } from "../ui/input";
import { Image, Film, Vote, Smile, CalendarCheck, MapPin } from "../../node_modules/lucide-react";
import { Button } from "../ui/button";

const WritePost = () => {
  return (
    <div className='flex border-x border-b'>
    <div className='px-4 py-2'>
    <Avatar className='w-12 h-12'>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </div>

    <div className=' pr-4 py-2 flex flex-col gap-2 pb-2 flex-1 '>
      <EveryoneDropdown
        ButtonTitle="Everyone"
        DropdownTitle="Choose audience"
        Choice1="Everyone"
        Choice2="Circle"
        Choice3="Followers"
        />

      <Input type="text" className='border-0 hover:border-red-600' placeholder="What's happening?!" />
      <EveryoneDropdown
        ButtonTitle={`Everyone can reply`}
        DropdownTitle="Who can reply?"
        Choice1="Everyone"
        Choice2="People you follow"
        Choice3="Only people you mention"
      />

    <div className='flex justify-between items-center border-t pt-2'>
      <div className='flex gap-2 text-sky-500'>
        <Image size={24} />
        <Film size={24} />
        <Vote size={24} />
        <Smile size={24} />
        <CalendarCheck size={24} />
        <MapPin className='disabled' size={24} />

      </div>
      <div>
        <Button className='bg-sky-500 px-6 text-white rounded-full'>Post</Button>
      </div>
    </div>

    </div>
    </div>
  )
}

export default WritePost
