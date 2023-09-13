import Posts from "@/components/myUi/Posts"
import TrendingContent from "@/components/myUi/TrendingContent"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ArrowLeft, ChevronRight } from '../../../node_modules/lucide-react';


const TabsForSettings = () =>{
  return (
    <Tabs defaultValue="all" className="w-full grid grid-cols-10 gap-5">
      <TabsList className="flex col-span-4 flex-col flex-1 border-x">
      <header className='flex flex-col bg-red-600 p-4 gap-4'>
          <h3 className=' text-3xl'>Settings</h3>
          <div className='flex gap-4 items-center'>
            <ArrowLeft />
            <Input placeholder='Search Settings' />
          </div>
        </header>
        <div className="tabs p-4 ">
        <TabsTrigger className=" flex flex-1 p-4 w-full border-r border-sky-500 border-none" value="account">Your account <div><ChevronRight /></div></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 w-full border-r border-none" value="monetization">Monetization <div><ChevronRight /></div></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 w-full border-r border-none" value="premium">Premium <div><ChevronRight /></div></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 w-full border-r border-none" value="subscriptions">Subscriptions <div><ChevronRight /></div></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 w-full border-r border-none" value="security">Security and account access <div><ChevronRight /></div></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 w-full border-r border-none" value="privacy">Privacy and safety <div><ChevronRight /></div></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 w-full border-r border-none" value="notifications">Notifications <div><ChevronRight /></div></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 w-full border-r border-none" value="accessibility">Accessibility, display, and languagess <div><ChevronRight /></div></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 w-full border-r border-none" value="additional">Additional resources <div><ChevronRight /></div></TabsTrigger>
        </div>
      </TabsList>
      <div className="bg-red-500">
      <TabsContent value="all">
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

export default TabsForSettings
