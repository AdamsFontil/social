/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import MyPopover from "./MyPopover"
import { Banknote, Users, Bookmark, ScrollText, Twitter, User } from "../../node_modules/lucide-react"
import { AccordionDemo } from "./Accordion"

export function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
      <Avatar className=''>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="bg-red-500">
        <div className='py-5 justify-center items-center flex gap-2 '>

            <div>
              <Avatar className='w-16 h-16'>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className='flex flex-col text-sm gap-0'>
              <div>Account name</div>
              <div>@handle</div>
            </div>
          </div>
          <div className='flex flex-col flex-1 pb-5 border-b '>
            <Link href='/home'><div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><User /> Profile</div></Link>
            <Link href={'/explore'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><Twitter /> Verified</div></Link>
            <Link href={'/notifications'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><ScrollText /> Lists</div></Link>
            <Link href={'/messages'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><Bookmark /> Bookmarks</div></Link>
            <Link href={'/handler/lists'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><Users /> Communities</div></Link>
            <Link href={'/handler/communities'}><div className='flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2'><Banknote /> Monetization</div></Link>
          </div>
          <div>
            <AccordionDemo />
          </div>
        </div>

      </SheetContent>
    </Sheet>
  )
}
