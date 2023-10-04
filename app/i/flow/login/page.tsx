/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Twitter, X } from "../../../../node_modules/lucide-react";
import Home from "@/app/page";
import Link from "next/link";

export function Login() {

  return (
    <div>
      <Home />
      <div className="fixed inset-0  bg-opacity-80 flex items-center justify-center">
      <div className="absolute top-10 border w-1/2 left-72 h-4/5 bg-black px-8 py-4 rounded-lg gap-4">
          <header className="flex gap-4 items-center">
            <Link href={'/'}><div className="p-2 hover:bg-secondary rounded-full"> <X /></div></Link>
            <div className="px-52 fill-sky-500"><Twitter /></div>
          </header>
          <div className="flex flex-col justify-center gap-4 pl-14">
            <h2 className="text-3xl">Sign in to Tweeter</h2>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" normal />
            </div>

            <div className="flex flex-col w-full gap-1.5">
              <div className="grid w-full -sm items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  normal
                />
              </div>

            </div>
          </div>
          <footer className="pl-14 pt-6">
            <Button type="submit">Sign in</Button>
          </footer>
          <div className="pl-14">
            <p>Don't have an account <Link href={'/i/flow/signup'}>Sign Up</Link></p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
