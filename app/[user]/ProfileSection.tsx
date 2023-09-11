import React from "react"
import { ArrowLeft, CalendarDays } from "../../node_modules/lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
const ProfileSection = () => {
  return (
    <div>
      <header className="flex  items-center p-4 gap-2">
          <ArrowLeft />
          <div className="flex flex-col">
            <h4>username</h4>
            <p>number of posts</p>
          </div>
      </header>

      <section className="bg-secondary p-24">
      </section>
      <section className="avatar flex justify-between items-center -mt-16 px-4">
          <Avatar className='w-36 h-36 border-4 border-black rounded-full'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button variant={"outline"} className="mt-10 text-md rounded-full"> Set up Profile </Button>
      </section>
      <section className="stats flex flex-col gap-2 text-gray-500 text-lg p-4">
        <div className="flex text-2xl flex-col">
          <h4 className="text-white">Adams Fontil</h4>
          <h4>@Ada1</h4>
        </div>
        <div className="flex gap-2">
          <CalendarDays />
          <p>Joined August 2023</p>
        </div>
        <div className="flex gap-2 ">
          <p><span className="text-white">32</span>  Following</p>
          <p> <span className="text-white">4</span> Followers</p>
        </div>
      </section>


    </div>
  )
}

export default ProfileSection
