import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"


const SubscribeCard: React.FC = () => {
  return (
    <div>
      <Card className=''>
      <CardHeader>
        <CardTitle className='pb-4 p-4'>Subscribe to Premium</CardTitle>
      </CardHeader>
      <CardContent className='text-sm p-4 '>
        <p className='pb-2'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <Button className='rounded-full bg-sky-500 text-white '>Subscribe </Button>
      </CardContent>

    </Card>
    </div>
  )
}


export default SubscribeCard
