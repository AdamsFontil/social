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

export function TabsforUser() {
  return (
    <Tabs defaultValue="posts" className="w-full">
      <TabsList className="flex p-0 m-0 justify-center items-center flex-1 w-full">
        <TabsTrigger className=" flex flex-1 p-4" value="posts">Posts</TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4" value="replies">Replies</TabsTrigger>
        <TabsTrigger className="flex flex-1 p-4" value="highlights">Highlights</TabsTrigger>
        <TabsTrigger className=" flex flex-1 p-4" value="media">Media</TabsTrigger>
        <TabsTrigger className="flex flex-1 p-4" value="likes">Likes</TabsTrigger>
      </TabsList>
      <TabsContent value="posts">
        <TrendingContent />
        <Posts />
      </TabsContent>
      <TabsContent value="replies">
        <h1 className="px-2 text-2xl">United States trends</h1>
        <TrendingContent />
      </TabsContent>
      <TabsContent value="highlights">
        <h1 className="px-2 text-2xl">Trending in News</h1>
        <div>Neeeds Card </div>
        <TrendingContent />
      </TabsContent>
      <TabsContent value="media">
        <h1 className="px-2 text-2xl">Trending in Sports</h1>
        <div>Neeeds Card </div>
        <div>Also score of latest game Also trending tabs need to be specfic so like sports must be sports related </div>
        <TrendingContent />
      </TabsContent>
      <TabsContent value="likes">
        <h1 className="px-2 text-2xl">Trending in Entertainment</h1>
        <TrendingContent />
      </TabsContent>
    </Tabs>
  )
}
