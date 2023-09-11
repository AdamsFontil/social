import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MoreHorizontal, Bookmark, AtSign, PenTool, Banknote } from "../../node_modules/lucide-react"
import Link from "next/link"
import { AccordionDemo } from "../myUi/Accordion"



const MyPopover = () => {

  return (
    <Popover>
      <PopoverTrigger className="flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2" >
        <MoreHorizontal className='border-2 rounded-full border-primary' /> More
      </PopoverTrigger>
      <PopoverContent className="overflow-y-auto">
        <div className="flex flex-col  gap-4">
          <div className="flex flex-col text-2xl border-b">
            <Link href='/i/bookmarks'><div className="flex gap-2 items-center hover:bg-secondary p-2"><Bookmark />  Bookmarks</div></Link>
            <Link href={'/i/connect_people'}><div className="flex gap-2 items-center hover:bg-secondary p-2"><AtSign /> Connect</div></Link>
            <Link href={'/compose/tweet/unsent/drafts'}><div className="flex gap-2 items-center hover:bg-secondary p-2"><PenTool />Drafts</div></Link>
            <Link href={'/settings/monetization'}><div className="flex gap-2 items-center hover:bg-secondary p-2"><Banknote /> Monetization</div></Link>
          </div>

          <AccordionDemo />

        </div>
      </PopoverContent>
    </Popover>


  )

}

export default MyPopover
