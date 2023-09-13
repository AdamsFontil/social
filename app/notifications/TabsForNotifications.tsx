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
import Notifications from "./Notifications"

export function TabsForNotifications() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="flex p-0 m-0 justify-center items-center flex-1 w-full border-b">
        <TabsTrigger className=" flex flex-1 p-4 justify-center" value="all">All</TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 justify-center" value="verified">Verified</TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4 justify-center" value="mentions">Mentions</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <Notifications filter='' />
      </TabsContent>
      <TabsContent value="verified">
        <Notifications filter='verified' />
      </TabsContent>
      <TabsContent value="mentions">
        <Notifications filter='mentions'/>
      </TabsContent>

    </Tabs>
  )
}
