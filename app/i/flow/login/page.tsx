/* eslint-disable react/no-unescaped-entities */
'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useMutation } from 'react-query';
import { signIn } from "@/app/api/signin"; // Replace with the correct path to the signIn function

import { Twitter, X } from "../../../../node_modules/lucide-react";
import Home from "@/app/page";
import Link from "next/link";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate, isLoading, isError, isSuccess } = useMutation(signIn);

  const handleSignIn = () => {
    mutate({ email, password }, {
      onSuccess: (data) => {
        console.log('data----', data)
        localStorage.setItem('user', JSON.stringify(data));
        window.location.href = '/home';

      }
    });
  };


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
              <Input
                type="email"
                id="email"
                placeholder="Email"
                normal
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update the email state
              />
            </div>
            <div className="flex flex-col w-full gap-1.5">
              <div className="grid w-full -sm items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  normal
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update the password state
                />
              </div>
            </div>
          </div>
          <footer className="pl-14 bg-red-500 pt-6">
            <Button type="submit" onClick={handleSignIn}>
              {isLoading ? 'Signing in...' : 'Sign in'} {/* Show loading state */}
            </Button>
            {isError && <p>Error signing in. Please try again.</p>} {/* Show error message */}
            {isSuccess && <p>Sign in successful!</p>} {/* Show success message */}
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
