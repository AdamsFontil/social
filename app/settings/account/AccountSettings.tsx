import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ArrowLeft, ChevronRight, Download, HeartCrack, KeySquare, User, Users } from '../../../node_modules/lucide-react';


const AccountSettings = () =>{
  return (
    <Tabs defaultValue="all" className="w-full flex flex-col gap-4">
      <TabsList className="flex flex-col ">
      <div className='flex flex-col flex-1 w-full px-2 py-4 gap-4'>
          <h3 className=' text-3xl'>Your Account</h3>
            <p>
            See information about your account, download an archive of your data, or learn about your account deactivation options
            </p>
        </div>
        <div className="tabs text-sm  flex flex-col w-full py-4 ">
          <TabsTrigger className="flex gap-4 p-4 " value="account">
            <div className="px-4"><User /></div>
            <div className="flex flex-col text-sm flex-1 items-start">
              <h4>Account information </h4>
              <p>See account information like phone number and email address</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex gap-4 p-4 " value="password">
            <div className="px-4"><KeySquare /></div>
            <div className="flex flex-col text-sm flex-1 items-start">
              <h4>Change Password </h4>
              <p>Change your password at anytime</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex gap-4 p-4 " value="archive">
            <div className="px-4"><Download /></div>
            <div className="flex flex-col text-sm flex-1 items-start">
              <h4>Download an archive of your data </h4>
              <p>Get insights into the type of information stored in your account</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex gap-4 p-4 " value="teams">
            <div className="px-4"><Users /></div>
            <div className="flex flex-col text-sm flex-1 items-start">
              <h4>Teams </h4>
              <p>Invite anyone to post from this account using the Teams feature</p>
            </div>
            <div><ChevronRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex gap-4 p-4 " value="deactivate">
            <div className="px-4"><HeartCrack /></div>
            <div className="flex flex-col text-sm flex-1 items-start">
              <h4>Deactivate your account </h4>
              <p>Find out how you can deactivate your account</p>
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

export default AccountSettings
