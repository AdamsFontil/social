import React from "react";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";

const notifications = [
  { id: 1, category: 'mentions', text: 'You were mentioned by @user1.' },
  { id: 2, category: 'verified', text: 'You have a new follower: @verified_user1.' },
  { id: 3, category: 'all', text: 'You have a new message.' },
  { id: 4, category: 'mentions', text: 'You were mentioned by @user2.' },
  { id: 5, category: 'mentions', text: 'You were mentioned by @user3.' },
  { id: 6, category: 'verified', text: 'You have a new follower: @verified_user2.' },
  { id: 7, category: 'all', text: 'You have a new message.' },
  { id: 8, category: 'system', text: 'There was a login to your account @cooky66167185 from a new device on Aug 31, 2023. Review it now.'}
];

const Notifications = ({ filter }: { filter: string }) => {
  let filteredNotifications = notifications;

  if (filter !== '') {
    filteredNotifications = notifications.filter(item => item.category === filter);
  }

  return (
    <div className="">
      {filteredNotifications.map((item) => (
        <div key={item.id} className="flex hover:bg-secondary  p-4 border-b">
          <div className=" flex items-center gap-4">
            <Avatar className='w-12 h-12'>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
