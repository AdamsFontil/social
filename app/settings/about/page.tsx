/* eslint-disable react/no-unescaped-entities */
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ArrowUpRight, ArrowLeftRight, Layers, KeySquare, User, Users2, PenLine, Newspaper, MegaphoneOff, Mail, Podcast, Radar, ArrowUpRightSquare, Activity, MapPin } from '../../../node_modules/lucide-react';


const Additional_Ressources = () =>{
  return (
    <Tabs defaultValue="all" className="w-full flex flex-col ">
      <TabsList className="flex flex-col ">
      <div className='flex flex-col flex-1 w-full px-4 py-2 gap-4'>
          <h3 className=' text-3xl'>Additional Ressources</h3>
            <p>
            Check out other places for helpful information to learn more about X products and services.
            </p>
        </div>
        <div className="tabs text-sm  flex flex-col w-full py-4 border-b  overflow-y-auto">
          <h3 className="p-4">Release notes</h3>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Release notes </h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
        </div>

        <div className="tabs text-sm  flex flex-col w-full py-4 border-b overflow-y-auto">
          <h3 className="p-4">Legal</h3>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4 className="whitespace-pre-line text-left">Ads info </h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Cookie Policy </h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Privacy Policy </h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Terms of Service </h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
        </div>

        <div className="tabs text-sm  flex flex-col w-full py-4 border-b  overflow-y-auto">
          <h3 className="p-4">Miscalleneous</h3>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>About </h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Accessibility</h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Advertising </h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Blog </h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Brand Ressources </h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Carreers</h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Developers </h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Directory </h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Help Center </h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Marketing</h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>Status </h4>
            </div>
            <div><ArrowUpRight /></div>
          </TabsTrigger>
          <TabsTrigger className="flex flex-1 gap-4 p-4 " value="account">

            <div className="flex flex-col text-sm flex-1 jus items-start">
              <h4>X for Bussiness</h4>
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

export default Additional_Ressources
