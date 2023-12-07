import React, {useState, useEffect} from "react"
import { ArrowLeft, CalendarDays } from "../../node_modules/lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useUser } from "@/app/utils/userProfileContext";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';


const ProfileSection = () => {
  const router = useRouter();
 const pathname = usePathname();
 const searchParams = useSearchParams();
  const { userProfile } = useUser();
  const [user, setUser] = useState(null);
  console.log('user in Profile----', userProfile)
  console.log('router---', router)
  console.log('pathname---', pathname)
  console.log('searchparams---', searchParams)

  const getUserByUsername = (username: any) => {
    console.log('testing fake function', username )
    return username
  }

  // useEffect(() => {
  //   const { username } = router.query;
  //   console.log('routing username', username)

  //   // Fetch user data based on the username from the route
  //   const fetchUserByUsername = async () => {
  //     try {
  //       const userData = await getUserByUsername(username);
  //       setUser(userData);
  //     } catch (error) {
  //       // Handle the case where the user is not found
  //       setUser(null);
  //     }
  //   };

  //   if (username) {
  //     fetchUserByUsername();
  //   }
  // }, [router.query]);

  if (!user) {
    // If the user is not found, display an error message or redirect to an error page
    return <div>User not found</div>;
  }





  return (
    <div>
      <header className="flex  items-center p-4 gap-2">
          <Link href={'/home'}><ArrowLeft className="hover:bg-secondary rounded-full hover:border p-2 h-12 w-12" /></Link>
          <div className="flex flex-col">
            <h4>{userProfile?.display_name}</h4>
            <p>number of posts unavailable</p>
          </div>
      </header>

      <section className="bg-secondary p-24">
      </section>
      <section className="avatar flex justify-between items-center -mt-16 px-4">
          <Avatar className='w-36 h-36 border-4 border-black rounded-full'>
            <AvatarImage src={userProfile?.profile_picture_url} />
            <AvatarFallback>{userProfile?.user_name}</AvatarFallback>
        </Avatar>
        <Button variant={"outline"} className="mt-10 text-md rounded-full"> Set up Profile </Button>
      </section>
      <section className="stats flex flex-col gap-2 text-gray-500 text-lg p-4">
        <div className="flex text-2xl flex-col">
          <h4 className="text-white">{userProfile?.display_name}</h4>
          <h4>@{userProfile?.user_name}</h4>
        </div>
        <div className="flex gap-2">
          <CalendarDays />
          <p>Joined unavailable</p>
        </div>
        <div className="flex gap-2 ">
          <p><span className="text-white">N/A</span>  Following</p>
          <p> <span className="text-white">N/A</span> Followers</p>
        </div>
      </section>


    </div>
  )
}

export default ProfileSection
