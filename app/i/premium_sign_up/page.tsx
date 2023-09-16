'use client'
import React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BadgeCheck, ChevronRight, CheckCircle2, UserSquare2,FileSignature, Feather } from "../../../node_modules/lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


const Premium_Sign_Up = () => {
  const [chosen, setChosen] = useState ('')
  return (
    <Dialog>
    <DialogTrigger asChild>
    <div className=" flex flex-1 justify-between ">Premium <div><ChevronRight /></div></div>
    </DialogTrigger>
    <DialogContent className="text-primary">
      <div className="flex flex-col justify-center text-gray-500 text-sm items-center p-4 gap-4 ">
            <Card>
              <CardContent className="p-4 flex gap-4">

          <p className="text-xl">Premium subscribers with a verified phone number will get a blue checkmark once approved.</p>
          <div className="fill-blue-500"> <BadgeCheck className="text-white" fill="blue-500" width={120} height={120} /> </div>


              </CardContent>

          </Card>
          <div className="flex border-secondary text-sm border-2 w-full text-center rounded-full">
            <div
            onClick={() => setChosen('annual')}
            className={`flex gap-2 w-1/2 justify-center items-center p-4 rounded-full hover:bg-secondary ${chosen === 'annual' ? 'border-2 text-white border-secondary' : ''}`}
          >
            <h4>Annually</h4>
            <p className="bg-green-300 p-1 text-green-500 bg-opacity-20 rounded-full">Save 12%</p>

          </div>
          <div
            onClick={() => setChosen('monthly')}
            className={`flex w-1/2 justify-center p-4 rounded-full hover:bg-secondary ${chosen === 'monthly' ? 'border-2 text-white border-secondary' : ''}`}
          >
            <h4>Monthly</h4>
          </div>
          </div>

          <Card className="p-4 ">
  <CardHeader>
    <CardTitle className="flex justify-between items-center pb-4"><p>Premium</p> <div className="fill-blue-500 text-white hover:bg-blue-500 hover:bg-opacity-10 rounded-full p-2"><CheckCircle2 className="text-white fill-blue-500" /></div></CardTitle>
  </CardHeader>
  <CardContent className="pb-4">
    <ul>
      <li>Premium</li>
      <li>Prioritized rankings in conversations and search</li>
      <li>See approximately twice as many posts between ads in your For You and Following timelines.</li>
      <li>Add bold and italic text in your posts</li>
      <li>Post longer videos and 1080p video uploads</li>
      <li>All the existing Premium features, including edit post, Bookmark Folders, and early access to new features</li>
    </ul>
  </CardContent>
  <CardFooter className="flex gap-4">
      <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Learn More</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div><Feather /></div>
              <div>
                <h4>Longer posts</h4>
                <p>Create posts, replies and Quotes up to 25,000 characters long.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div><FileSignature /></div>
              <div>
                <h4>Edit post</h4>
                <p>Edit a post up to 5 times within 1 hour.</p>
              </div>

            </div>
            <div className="flex gap-4">
              <div><UserSquare2 /></div>
              <div>
                <h4>NFT Profile Pictures</h4>
                <p>Show your personal flair and set your profile picture to an NFT you own.</p>
              </div>

            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

  </CardFooter>
</Card>

      </div>
      <Button className="flex flex-1 bg-primary rounded-full w-full">
        {chosen === 'annual' ? '$96 / year $84 / year' : '$8 / month'}
      </Button>
      <DialogFooter>
        <p>Learn more about Premium and Verified Organizations</p>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}

export default Premium_Sign_Up
