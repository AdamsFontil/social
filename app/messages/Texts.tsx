import { Button } from "@/components/ui/button"
import React from "react"
const Texts = () => {
  return (
    <div className=" justify-center flex h-screen p-4">
      <div className="flex flex-col justify-center  gap-4 w-3/4  ">
        <h2 className="text-4xl">Select a message</h2>
        <p className="text-md">Choose from your existing conversations, start a new one, or just keep swimming. </p>
        <Button className="bg-sky-500 rounded-full p-4 text-white w-1/2">
          New message
        </Button>
      </div>
  </div>
  )
}

export default Texts
