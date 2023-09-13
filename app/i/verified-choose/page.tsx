'use client'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Twitter } from "../../../node_modules/lucide-react";
import { useState } from "react";

const Verified_Choose = () => {
  const [chosen, setChosen] = useState('');

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className='flex gap-2 items-center hover:bg-secondary text-xl rounded-full pl-4 py-2'><Twitter /> Verified</div>
        </DialogTrigger>
        <DialogContent className="text-primary">
          <DialogHeader className="flex fle-col pt-6 gap-4 items-center">
            <DialogTitle className="text-3xl">Who are you?</DialogTitle>
            <DialogDescription className="text-lg text-primary">
              <p>Choose the right subscription for you:</p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center text-gray-500 text-sm items-center p-4 gap-4 ">
            <div
              onClick={() => setChosen('individual')}
              className={`flex flex-col p-4 w-1/2 h-44 gap justify-center rounded-lg hover:bg-secondary ${chosen === 'individual' ? 'border-2 p-3 border-sky-500' : ''}`}
            >
              <h4>Premium</h4>
              <p className="text-lg text-white">I am an individual</p>
              <p>For individuals or creators</p>
            </div>
            <div
              onClick={() => setChosen('organization')}
              className={`flex flex-col w-1/2 p-4 h-44 gap justify-center rounded-lg hover:bg-secondary ${chosen === 'organization' ? 'border-2 p-3 border-sky-500' : ''}`}
            >
              <h4>Verified Organizations</h4>
              <p className="text-lg text-white">I am an organization</p>
              <p>For businesses, government agencies, and non-profits</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="bg-primary rounded-full w-full">Subscribe</Button>
          </div>
          <DialogFooter>
            <p>Learn more about Premium and Verified Organizations</p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Verified_Choose;
