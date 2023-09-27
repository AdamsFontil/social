import { Button } from "@/components/ui/button"
import { MailPlus, Settings } from "../../node_modules/lucide-react"
import React from "react"
const Inbox = () => {
  return (
    <div className="flex flex-col gap-4">
      <header className="flex justify-between gap-4 items-center">
      <h3 className="text-3xl">Messages</h3>
      <div className="flex ">
        <div className="hover:bg-secondary p-2 rounded-3xl"><Settings /></div>
        <div className="hover:bg-secondary p-2 rounded-full"><MailPlus /></div>

      </div>

      </header>
      <main className="flex flex-col p-4 gap-4">
        <h2 className="text-3xl">Welcome to your inbox</h2>
        <p className="text-md text-gray-500">Drop a line, share posts and more with private conversations between you and others on X. </p>
        <Button className="p-6 rounded-full w-fit bg-sky-500 text-primary">Write a message</Button>
      </main>
  </div>
  )
}

export default Inbox
