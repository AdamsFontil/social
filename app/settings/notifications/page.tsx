/* eslint-disable react/no-unescaped-entities */
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Lock, ChevronRight, Vibrate, SlidersHorizontal } from '../../../node_modules/lucide-react';


const Notifications_Settings = () =>{
  return (
    <Tabs defaultValue="all" className="w-full flex flex-col ">
      <TabsList className="flex flex-col ">
      <div className='flex flex-col flex-1 w-full px-4 py-2 gap-4'>
          <h3 className=' text-3xl'>Notifications</h3>
            <p>
            Select the kinds of notifications you get about your activities, interests, and recommendations.
            </p>
        </div>
        <div className="tabs text-sm  flex flex-col w-full py-4 ">
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="filters">
            <div className="px-4"><SlidersHorizontal /></div>
            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Filters </h4>
              <p className="whitespace-pre-line text-left">Choose the notifications you'd like to see - and the ones you don't</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="password">
            <div className="px-4"><Vibrate /></div>
            <div className="flex flex-col text-sm flex-1 justify-start items-start">
              <h4>Preferences </h4>
              <p>Select your prefrences by notification type.</p>

            </div>
            <div><ChevronRight /></div>
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

export default Notifications_Settings
