import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MoreHorizontal, Bookmark, AtSign, PenTool, Banknote } from "../../node_modules/lucide-react"

import { AccordionDemo } from "../myUi/Accordion"



const MyPopover = () => {

  return (
    <Popover>
      <PopoverTrigger className="flex gap-2 items-center hover:bg-secondary rounded-full pl-4 py-2" >
        <MoreHorizontal className='border-2 rounded-full border-primary' /> More
      </PopoverTrigger>
      <PopoverContent className="">
        <div className="flex flex-col  gap-4">
          <div className="flex flex-col gap-3 text-2xl border-b p-4 pb-4">
            <div className="flex gap-2 items-center"><Bookmark />  Bookmarks</div>
            <div className="flex gap-2 items-center"><AtSign /> Connect</div>
            <div className="flex gap-2 items-center"><PenTool />Drafts</div>
            <div className="flex gap-2 items-center"><Banknote /> Monetization</div>
          </div>

          <AccordionDemo />

        </div>
      </PopoverContent>
    </Popover>


  )

}

export default MyPopover
