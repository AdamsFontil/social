import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Lock, ChevronRight, ArrowLeftRight, Layers, KeySquare, User, Users2 } from '../../../node_modules/lucide-react';


const Security_And_Account_Access = () =>{
  return (
    <Tabs defaultValue="all" className="w-full flex flex-col ">
      <TabsList className="flex flex-col ">
      <div className='flex flex-col flex-1 w-full px-4 py-2 gap-4'>
          <h3 className=' text-3xl'>Security and Account Access</h3>
            <p>
            Manage your account’s security and keep track of your account’s usage including apps that you have connected to your account.
            </p>
        </div>
        <div className="tabs text-sm  flex flex-col w-full py-4 ">
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">
            <div className="px-4"><Lock /></div>
            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Security </h4>
              <p>Manage your accounts security.</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="password">
            <div className="px-4"><Layers /></div>
            <div className="flex flex-col text-sm flex-1 justify-start items-start">
              <h4>Apps and Sessions </h4>
              <p className=" ">See information about when you logged into your account and </p>
              <p>the apps connected to your account</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex gap-4 p-4 " value="archive">
            <div className="px-4"><ArrowLeftRight /></div>
            <div className="flex flex-col text-sm flex-1 items-start">
              <h4>Connected Accounts </h4>
              <p>Manage Google or Apple accounts connected to Tweeter to log in</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex gap-4 p-4 " value="teams">
            <div className="px-4"><Users2 /></div>
            <div className="flex flex-col text-sm flex-1 items-start">
              <h4>Delegate </h4>
              <p>Manage your shared accounts</p>
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

export default Security_And_Account_Access
