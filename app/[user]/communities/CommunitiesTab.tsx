import { Input } from "@/components/ui/input";
import { ArrowLeft, MoreHorizontal, ListPlus, Plus } from "../../../node_modules/lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const lists = [
  {
    id: 1,
    name: 'Fitness Freaks',
    avatar: 'https://github.com/shadcn.png',
    members: 500,
    top_Accounts: ['user1', 'user2', 'user4', 'user5', 'user3'],
  },
  {
    id: 2,
    name: 'Big Time Rushers',
    avatar: 'https://github.com/shadcn.png',
    members: 300,
    top_Accounts: ['user1', 'user2', 'user4', 'user5', 'user3'],
  },
  {
    id: 3,
    name: 'Motorcycle Pals',
    avatar: 'https://github.com/shadcn.png',
    members: 800,
    top_Accounts: ['user1', 'user2', 'user4', 'user5', 'user3'],
  },
];

const CommuntiesTab = () => {
  return (
    <div className='text-2xl flex flex-col border-x h-full'>
      <section className="">
        <header className="flex justify-between items-center px-4 gap-5 py-2">
          <div><ArrowLeft /></div>
          <Input type="text" className="" placeholder="Search" />
          <div><ListPlus /></div>
          <div><MoreHorizontal /></div>
        </header>

        <div className='flex flex-col '>
          <h3 className="p-4">Discover new Communities</h3>
          <div className="">
            {lists.map((list) => (
              <div key={list.id} className="flex justify-between px-4 py-2 hover:bg-secondary">
                <div className="flex gap-5">
                  <Avatar className='w-24 h-24 rounded-md'>
                    <AvatarImage src={list.avatar} />
                    <AvatarFallback>{list.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-col text-md justify-center items-center">
                    <h4>{list.name}</h4>
                    <p>{list.members} <span className="text-gray-400">Members</span></p>
                    <div className="flex gap-0 ">
                      {list.top_Accounts.slice(0, 5).map((account, index) => (
                        <Avatar key={index} className='w-8 h-8 rounded-full -ml-2'>
                          <AvatarImage src={list.avatar} />
                          <AvatarFallback>{account[0]}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </div>
                </div>
                <div className=" flex items-center">
                  <Button className="rounded-full bg-primary w-14 h-14"><Plus className="w-12 h-12" /></Button>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 hover:bg-secondary text-sky-500 text-sm">Show more</div>
        </div>
      </section>
    </div>
  );
};

export default CommuntiesTab;
