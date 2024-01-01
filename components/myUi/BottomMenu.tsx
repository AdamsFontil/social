import Link from "next/link"
import { Search, Home, Bell, Mail } from "../../node_modules/lucide-react"
import AddPostMobile from "./AddPostMobile"

interface BottomMenuProps {
  type?: string; // Make the "type" prop optional by adding "?"
}

const BottomMenu: React.FC<BottomMenuProps> = ({ type }) => {
  return (
    <div className="flex flex-col justify-between bg-re-500 w-screen fixed bottom-0">
      <div className="flex md:hidden px-8 justify-end bg-yllow-600 py-4"><AddPostMobile type={type} /></div>
      <div className="flex justify-between px-8 w-full bg-background py-4 md:hidden border-t">
      <Link href='/home'><Home /></Link>
      <Link href='/explore'><Search /></Link>
      <Link href='/notifications'><Bell /></Link>
      <Link href='/messages'><Mail /></Link>
      </div>
    </div>
  )
}


export default BottomMenu
