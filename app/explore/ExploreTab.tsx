'use client'
import { TabsforExplore } from "./TabsForExplore"
import { Input } from "@/components/ui/input"
import { Settings, Search } from "../../node_modules/lucide-react"

const ExploreTab = () => {
  return (
    <div className='text-2xl flex flex-col border-x border-b'>

      <div className="flex justify-between items-center px-4 gap-5 py-2">
        <Input type="text" className="" placeholder="Search" />
        <p><Settings /></p>
      </div>
      <TabsforExplore />

      <div className='flex '>

      </div>
    </div>
  )
}

export default ExploreTab
