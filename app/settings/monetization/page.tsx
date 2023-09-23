import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Info, ChevronRight, Download, HeartCrack, KeySquare, User, Users } from '../../../node_modules/lucide-react';


const MonetizationSettings = () =>{
  return (
    <Tabs defaultValue="all" className="w-full flex text-white flex-col gap-4">
      <TabsList className="flex flex-col ">
      <div className='flex flex-col flex-1 w-full px-4 py-2 gap-4'>
          <h3 className=' text-3xl flex justify-between text-white'>Monetization <div><Info /></div></h3>
          <h4>Available programs</h4>
          <p>
            Eligible creators can sign up for monthly subscriptions or receive their payout for ads revenue sharing
          </p>
        </div>
        <div className="tabs text-sm text-white flex gap-4 flex-col w-full p-8 ">
          <div className="flex flex-col gap-2  hover:bg-secondary p-4 rounded-lg">
            <p className="bg-pink-600 rounded-lg  p-2 w-fit">Not yet eligible</p>
            <h4 className="pb-2">Subscriptions</h4>
            <p className="text-gray-500">Earn a living on Twitter by letting anyone </p>
          </div>
          <div className="flex flex-col gap-2  hover:bg-secondary p-4 rounded-lg">
            <p className="bg-pink-600 rounded-lg  p-2 w-fit">Not yet eligible</p>
            <h4 className="pb-2">Ads Revenue Sharing</h4>
            <p className="text-gray-500">Earn income from the ads in your replies and posts </p>
            <p className="text-gray-500">To get paid for ads revenue sharing, make sure to connect a Stripe Account</p>
          </div>


        </div>
      </TabsList>


    </Tabs>
  )
}

export default MonetizationSettings
