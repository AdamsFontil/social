/* eslint-disable react/no-unescaped-entities */

import { Input } from "@/components/ui/input"
import { ArrowLeft, MoreHorizontal, ListPlus, Plus, Dot } from "../../../node_modules/lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const lists = [
  {
    id: 1,
    name: 'Tech Enthusiasts',
    avatar: 'url_to_avatar_1.jpg',
    members: 1000,
    followers: 500,
  },
  {
    id: 2,
    name: 'Travel Lovers',
    avatar: 'url_to_avatar_2.jpg',
    members: 750,
    followers: 300,
  },
  {
    id: 3,
    name: 'Foodies',
    avatar: 'url_to_avatar_3.jpg',
    members: 1200,
    followers: 800,
  },
];


const ListsTab = () => {
  return (
    <div className='text-2xl flex flex-col border-x h-full'>
      <section className="border-b">
        <header className="flex justify-between items-center px-4 gap-5 py-2">
          <div><ArrowLeft /></div>
          <Input type="text" className="" placeholder="Search" />
          <div><ListPlus /></div>
          <div><MoreHorizontal /></div>
        </header>

        <div className='flex flex-col '>
          <h3 className="p-4">Discover new Lists</h3>
          <div className="">
            {lists.map((list) => (
              <div key={list.id} className="flex justify-between px-4 py-2 hover:bg-secondary">
                <div className="flex gap-5">
                  <Avatar className='w-12 h-12 rounded-md'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-col text-sm">
                    <header className="flex text-sm items-center justify-center ">
                      <h4>{list.name}</h4>
                      <Dot />
                      <p className="text-xs text-gray-500">{list.members} Members</p>
                    </header>

                    <p>{list.followers} Followers</p>
                  </div>
                </div>
                <div className=" flex items-center">
                  <Button className="rounded-full bg-primary w-14 h-14 "><Plus className="w-12 h-12"/></Button>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 hover:bg-secondary text-sky-500 text-sm">Show more</div>
        </div>
      </section>
      <section className="p-4">
        <h3 className="text-2xl"> Your lists</h3>
        <p className="text-lg mt-10 p-4 text-gray-400"> You haven't created or followed any Lists. When you do, they'll show up here.</p>
      </section>
    </div>
  )
}

export default ListsTab;
