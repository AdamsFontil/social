/* eslint-disable react/no-unescaped-entities */
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ArrowUpRight, ArrowLeftRight, Layers, KeySquare, User, Users2, PenLine, Newspaper, MegaphoneOff, Mail, Podcast, Radar, ArrowUpRightSquare, Activity, MapPin, Award } from '../../../node_modules/lucide-react';


const Manage_Subscriptions = () =>{
  return (
    <Tabs defaultValue="all" className="w-full flex flex-col ">
      <TabsList className="flex flex-col ">
      <div className='flex flex-col flex-1 w-full px-4 py-2 gap-4'>
          <h3 className=' text-3xl'>Manage Subscriptions</h3>
        </div>
        <div className="tabs text-sm  flex flex-col w-full  overflow-y-auto">
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">
            <div className="px-4"><Award /></div>
            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Manage Creator Subscriptions </h4>
              <p className="whitespace-pre-line text-left">View and manage your subscriptions to creators below using Stripe. Any active subscriptions you initiated on iOS or Android can be managed in the app.</p>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
        </div>

      </TabsList>
      <div className="bg-blue-500">
      <TabsContent value="allll">
        <div>all</div>
      </TabsContent>
      <TabsContent value="verified">
        <div>verified</div>
      </TabsContent>
      <TabsContent value="mentions">
        <div>mentions</div>
      </TabsContent>
      </div>

    </Tabs>
  )
}

export default Manage_Subscriptions
