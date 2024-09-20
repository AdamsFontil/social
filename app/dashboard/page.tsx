import Link from "next/link"
import { Portfolio } from "./Portfolio"
import { NetWorthChart } from "./NetWorthChart"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
// import { ChatBubble } from "lucide-react"

export function Dashboard() {
  return (
    <div className="grid grid-rows-[auto_10fr_3fr] gap-4 p-2">
      <div className="row-span-1 flex justify-center">
        <p className="text-lg font-semibold">Here's your retirement outlook</p>
      </div>
      <div className="row-span-5 grid grid-cols-2 gap-4">
        <Portfolio />
        <NetWorthChart />
      </div>
      <div className="row-span-3 grid grid-cols-3 gap-4">
        <Card className="col-span-2 bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">What You Should Do</CardTitle>
            <CardDescription className="text-muted-foreground">Our recommendations for you</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-foreground">
              <li>Review your retirement plan.</li>
              <li>Increase your monthly savings.</li>
              <li>Consider diversifying your investments.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="col-span-1 bg-card">
          <CardHeader>
            <CardTitle className="text-foreground">Need Any Help?</CardTitle>
            <CardDescription className="text-muted-foreground">Contact our financial assistant</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center">
            <Avatar>
              <AvatarImage src="/app/images/img.icons8.png" alt="Assistant Avatar" />

            </Avatar>
            <div className="ml-4">
              <p className="font-semibold text-foreground">Chat with our assistant</p>
              <Button variant="outline" className="flex items-center">
                Start Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
