import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { DateOfBirthSelection } from "./DateOfBirthSelection";
import { X } from "../../../../node_modules/lucide-react";
import Home from "@/app/page";
import Link from "next/link";

const SignUp: React.FC = () => {

  return (
    <div>
      <Home />
      <div className="fixed inset-0  bg-opacity-80 flex items-center justify-center">
      <div className="absolute top-10 border w-1/2 left-72 h-4/5 bg-black px-8 py-4 rounded-lg gap-4">
          <header className="flex gap-4 items-center">
            <Link href={'/'}><div className="p-2 hover:bg-secondary rounded-full"> <X /></div></Link>

            <h2 className="text-2xl">Create an Account</h2>

          </header>
          <div className="flex flex-col gap-4 pl-14">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input type="name" id="name" placeholder="Name" normal />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" normal />
            </div>

            <div className="flex flex-col w-full gap-1.5">
              <h4>Date of Birth</h4>
              <p className="text-xs">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
              <DateOfBirthSelection />

              <div className="grid w-full -sm items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  normal
                />
              </div>
              <div className="grid w-full -sm items-center gap-1.5">
                <Label htmlFor="repeatPassword">Repeat Password</Label>
                <Input
                  type="password"
                  id="repeatPassword"
                  placeholder="Repeat Password"
                  normal
                />
              </div>
            </div>
          </div>
          <footer className="pl-14 pt-6">
            <Button type="submit">Create Account</Button>
          </footer>
        </div>

      </div>
    </div>
  );
}

export default SignUp;
