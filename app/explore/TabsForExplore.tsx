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

export function TabsforExplore() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="flex p-0 m-0 justify-center items-center flex-1 w-full">
        <TabsTrigger className=" flex flex-1 p-4" value="for-you">For You</TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4" value="trending">Trending</TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4" value="news">News</TabsTrigger>
        <TabsTrigger className="flex flex-1 p-4" value="sports">Sports</TabsTrigger>
        <TabsTrigger className="flex flex-1 p-4" value="entertainment">Entertainment</TabsTrigger>
      </TabsList>
      <TabsContent value="for-you">
        <TrendingContent />
        <Posts />
      </TabsContent>
      <TabsContent value="trending">
        <h1 className="px-2 text-2xl">United States trends</h1>
        <TrendingContent />
      </TabsContent>
      <TabsContent value="news">
        <h1 className="px-2 text-2xl">Trending in News</h1>
        <div>Neeeds Card </div>
        <TrendingContent />
      </TabsContent>
      <TabsContent value="sports">
        <h1 className="px-2 text-2xl">Trending in Sports</h1>
        <div>Neeeds Card </div>
        <div>Also score of latest game Also trending tabs need to be specfic so like sports must be sports related </div>
        <TrendingContent />
      </TabsContent>
      <TabsContent value="entertainment">
        <h1 className="px-2 text-2xl">Trending in Entertainment</h1>
        <TrendingContent />
      </TabsContent>
    </Tabs>
  )
}
