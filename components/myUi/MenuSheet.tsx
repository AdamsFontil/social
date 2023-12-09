/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Verified_Choose from "@/app/i/verified-choose/page"
import Image from "next/image"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import MyPopover from "./MyPopover"
import { Banknote, Users, Bookmark, ScrollText, Twitter, User, Plus } from "../../node_modules/lucide-react"
import { AccordionDemo } from "./Accordion"
import { useUser } from "@/app/utils/userProfileContext"

export function MenuSheet() {
  const { userProfile } = useUser();
  return (
    <Sheet>
      <SheetTrigger asChild>
      <Avatar className=''>
        <AvatarImage src={userProfile?.profile_picture_url} alt={userProfile?.display_name} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="bg-re-500">
        <div className='py-5 flex flex-col justify-center gap-2 '>

            <div className="flex justify-between bg-rd-500">
              <Avatar className='w-16 h-16'>
                <AvatarImage src={userProfile?.profile_picture_url} alt={userProfile?.display_name} />
                <AvatarFallback>{userProfile?.display_name}</AvatarFallback>
              </Avatar>
              <div className="">
                <Plus className="flex justify-center items-center mt-3 border h-8 w-8 rounded-full p-1" />
              </div>
            </div>
            <div className='flex flex-col text-sm gap-0'>
              <div>{userProfile?.display_name}</div>
              <div>@{userProfile?.user_name}</div>
              <div className="flex gap-2">
                <p>Following info N/A</p>
                <p>Followers info N/A</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col flex-1 pb-5 border-b '>
            <Link href={`/${userProfile?.user_name}`}><div className='flex gap-2 items-center hover:bg-secondary rounded-full  py-2'><User /> Profile</div></Link>
            {/* <Link href={'/i/verified-choose'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full  py-2'><Twitter /> Verified</div></Link> */}
            <Verified_Choose />
            <Link href={'/handler/lists'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full  py-2'><ScrollText /> Lists</div></Link>
            <Link href={'/i/bookmarks'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full  py-2'><Bookmark /> Bookmarks</div></Link>
            <Link href={'/handler/communities'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full  py-2'><Users /> Communities</div></Link>
            <Link href={'/monetization'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full  py-2'><Banknote /> Monetization</div></Link>
          </div>
          <div>
            <AccordionDemo />
          </div>
        </div>

      </SheetContent>
    </Sheet>
  )
}
