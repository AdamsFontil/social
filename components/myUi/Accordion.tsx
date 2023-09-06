import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BarChart2, ArrowUpRightSquare, Settings, HelpCircle, PenSquare, PersonStanding } from "../../node_modules/lucide-react"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1">
        <AccordionTrigger>Creator Studio</AccordionTrigger>
        <AccordionContent>
          <div className="flex p-2 gap-2 items-center hover:bg-secondary pl-4"><BarChart2 /> Analytics</div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Proffesional Tools</AccordionTrigger>
        <AccordionContent>
          <div className="flex p-2 gap-2 items-center hover:bg-secondary pl-4"><ArrowUpRightSquare /> Ads</div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Settings and Support</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col">
            <div className="flex p-2 gap-2 items-center hover:bg-secondary pl-4"><Settings /> Settings and Privacy</div>
            <div className="flex p-2 gap-2 items-center hover:bg-secondary pl-4"><HelpCircle /> Help Center</div>
            <div className="flex p-2 gap-2 items-center hover:bg-secondary pl-4"><PenSquare /> Display</div>
            <div className="flex p-2 gap-2 items-center hover:bg-secondary pl-4"><PersonStanding /> Keyboard Shortcuts</div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
