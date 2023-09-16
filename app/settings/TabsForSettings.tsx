import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ArrowLeft, ChevronRight } from '../../node_modules/lucide-react';
import AccountSettings from "./account/AccountSettings";
import MonetizationSettings from "./monetization/MonetizationSettings";
import Premium_Sign_Up from "../i/premium_sign_up/page";


const TabsForSettings = () =>{
  return (
    <Tabs defaultValue="account" className="w-full grid bg-green- grid-cols-10 border-x ">
      <TabsList className="flex col-span-4 flex-col border-x ">
      <div className='flex flex-col justify-start items-start w-full p-4 gap-4'>
          <h3 className=' text-3xl'>Settings</h3>
          <div className='flex gap-4 items-center w-full'>
            <ArrowLeft />
            <Input placeholder='Search Settings' />
          </div>
        </div>
        <div className="tabs flex flex-col w-full py-4 ">
        <TabsTrigger className=" flex flex-1 p-4 " value="account">Your account <div><ChevronRight /></div></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 " value="monetization">Monetization <div><ChevronRight /></div></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 " value="premium"><Premium_Sign_Up /></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 " value="subscriptions">Subscriptions <div><ChevronRight /></div></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 " value="security">Security and account access <div><ChevronRight /></div></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 " value="privacy">Privacy and safety <div><ChevronRight /></div></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 " value="notifications">Notifications <div><ChevronRight /></div></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 " value="accessibility">Accessibility, display, and languagess <div><ChevronRight /></div></TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 " value="additional">Additional resources <div><ChevronRight /></div></TabsTrigger>
        </div>
      </TabsList>
      <div className=" col-span-6">
      <TabsContent value="account">
        <AccountSettings />
      </TabsContent>
      <TabsContent value="monetization">
        <MonetizationSettings />
      </TabsContent>
      <TabsContent value="subscriptions">
        <div>mentions</div>
      </TabsContent>
      </div>

    </Tabs>
  )
}

export default TabsForSettings
