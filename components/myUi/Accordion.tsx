import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BarChart2, ArrowUpRightSquare, Settings, HelpCircle, PenSquare, PersonStanding, PieChart, LogOut } from "../../node_modules/lucide-react"
import Link from "next/link"
export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className=" ">
      <AccordionItem value="item-1">
        <AccordionTrigger>Creator Studio</AccordionTrigger>
        <AccordionContent>
          <Link href='https://analytics.twitter.com/about'><div className="flex p-2 gap-2 items-center hover:bg-secondary "><BarChart2 /> Analytics</div></Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Proffesional Tools</AccordionTrigger>
        <AccordionContent>
          <Link href='https://ads.twitter.com/login'><div className="flex p-2 gap-2 items-center hover:bg-secondary "><ArrowUpRightSquare /> Ads</div></Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Settings and Support</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col">
            <Link href={'/settings'}><div className="flex p-2 gap-2 items-center hover:bg-secondary "><Settings /> Settings and Privacy</div></Link>
            <Link href='https://help.twitter.com/en'><div className="flex p-2 gap-2 items-center hover:bg-secondary "><HelpCircle /> Help Center</div></Link>
            <Link href='/i/display'><div className="flex p-2 gap-2 items-center hover:bg-secondary md:hidden "><PieChart /> Data Saver</div></Link>
            <Link href='/i/display'><div className="flex p-2 gap-2 items-center hover:bg-secondary "><PenSquare /> Display</div></Link>
            <Link href='/i/display'><div className="flex p-2 gap-2 items-center hover:bg-secondary md:hidden "><LogOut /> Logout</div></Link>
            <Link href='/i/keyboard_shortcuts'><div className="md:flex p-2 gap-2 items-center hidden hover:bg-secondary "><PersonStanding /> Keyboard Shortcuts</div></Link>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
