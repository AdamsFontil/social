/* eslint-disable react/no-unescaped-entities */
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ChevronRight, ArrowLeftRight, Layers, KeySquare, User, Users2, PenLine, Newspaper, MegaphoneOff, Mail, Podcast, Radar, ArrowUpRightSquare, Activity, MapPin } from '../../../node_modules/lucide-react';


const Privacy_and_Safety = () =>{
  return (
    <Tabs defaultValue="all" className="w-full flex flex-col ">
      <TabsList className="flex flex-col ">
      <div className='flex flex-col flex-1 w-full px-4 py-2 gap-4'>
          <h3 className=' text-3xl'>Privacy and Safety</h3>
            <p>
            Manage what information you see and share on X.
            </p>
        </div>
        <div className="tabs text-sm  flex flex-col w-full py-4 border-b  overflow-y-auto">
          <h3 className="px-4">Your Tweeter Activity</h3>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">
            <div className="px-4"><User /></div>
            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Audience, media and tagging </h4>
              <p>Manage what information you allow people on Tweeter to see.</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="password">
            <div className="px-4"><PenLine /></div>
            <div className="flex flex-col text-sm flex-1 justify-start items-start">
              <h4>Your posts </h4>
              <p className=" ">Manage the information associated with your posts</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex gap-4 p-4 " value="archive">
            <div className="px-4"><Newspaper /></div>
            <div className="flex flex-col text-sm flex-1 items-start">
              <h4>Content you see </h4>
              <p className="whitespace-pre-line text-left">Decide what you see on Tweeter based on your preferences like Topics and interests</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex gap-4 p-4 " value="teams">
            <div className="px-4"><MegaphoneOff /></div>
            <div className="flex flex-col text-sm flex-1 items-start">
              <h4>Mute and block </h4>
              <p className="whitespace-pre-line text-left">Manage the accounts, words, and notifications that you've muted or blocked</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex gap-4 p-4 " value="teams">
            <div className="px-4"><Mail /></div>
            <div className="flex flex-col text-sm flex-1 items-start">
              <h4>Direct messages </h4>
              <p>Manage who can message you directly</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex gap-4 p-4 " value="teams">
            <div className="px-4"><Podcast /></div>
            <div className="flex flex-col text-sm flex-1 items-start">
              <h4>Spaces </h4>
              <p>Manage your Spaces activity</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex gap-4 p-4 " value="teams">
            <div className="px-4"><Radar /></div>
            <div className="flex flex-col text-sm flex-1 items-start">
              <h4>Discoverability and contacts </h4>
              <p className="whitespace-pre-line text-left">Control your discoverability settings and manage contacts you've imported.</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
        </div>

        <div className="tabs text-sm  flex flex-col w-full py-4 border-b  overflow-y-auto">
          <h3 className="px-4">Data sharing and personalization</h3>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">
            <div className="px-4"><ArrowUpRightSquare /></div>
            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Ads preferences </h4>
              <p>Manage your ads experience on Tweeter</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="password">
            <div className="px-4"><Activity /></div>
            <div className="flex flex-col text-sm flex-1 justify-start items-start">
              <h4>Infered identity </h4>
              <p className="whitespace-pre-line text-left">Allow Tweeter to personalize your experience with your infered activity</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex gap-4 p-4 " value="archive">
            <div className="px-4"><ArrowLeftRight /></div>
            <div className="flex flex-col text-sm flex-1 items-start">
              <h4>Data sharing with business partners </h4>
              <p>Allow sharing of additional information Tweeter's business partners</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex gap-4 p-4 " value="teams">
            <div className="px-4"><MapPin /></div>
            <div className="flex flex-col text-sm flex-1 items-start">
              <h4>Location information </h4>
              <p className="whitespace-pre-line text-left">Manage the location information Tweeter uses to personalize your experience</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
        </div>
        <div className="flex flex-col gap-4 p-4 items-start justify-start w-full overflow-y-auto">
          <h3 className="">Learn more about privacy on Tweeter</h3>
          <h4>Privacy center</h4>
          <h4>Privacy policy</h4>
          <h4>Contact us</h4>
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

export default Privacy_and_Safety
