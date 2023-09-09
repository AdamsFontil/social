import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card"
import TrendingContent from "./TrendingContent"


const TrendingCard = () => {
  return (
    <div>
       <Card>
        <CardHeader>
        <CardTitle className='pb-4 p-4'>What&apos;s happening</CardTitle>

        </CardHeader>
        <CardContent>
          <TrendingContent />
        </CardContent>
        <CardFooter className='text-sky-500 p-4 hover:bg-secondary rounded-b-md '>
          <p>Show more</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default TrendingCard
