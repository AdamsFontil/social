/* eslint-disable react/no-unescaped-entities */
'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ModeToggle } from '@/components/ui/toggleTheme'
import { TypographyDemo } from '@/components/test/typography'
import { Test } from '@/components/test/Test'
import Footer from '@/components/myUi/Footer'
import SignUp from './i/flow/signup/page'
import useCheckUser2 from './utils/checkForUser2'


export default function Home() {
 useCheckUser2()

  return (
    <main className="flex flex-col items-center ">
      <div className='flex p-4'>
      <section className='hidden md:flex p-2 w-2/3'>
      <Image
        src="/app/images/icons8-square-250.png" // Make sure the path is correct
        alt="Twitter Logo"
        width={720}
        height={720}
        objectFit='cover'
      />
      </section>

     <section className='bg-rd-500 flex flex-col '>
      <div className='flex flex-col gap-5 w-full bg-bue-500 '>
      <section className='flex md:hidden p-2 w-2/3'>
      <Image
        src="/icons8-twitter.svg" // Make sure the path is correct
        alt="Twitter Logo"
        width={120}
        height={120}
        objectFit='cover'
      />
      </section>
        <h1 className="scroll-m-20 w-full text-4xl font-extrabold tracking-tight lg:text-5xl">
          Grow with Us
        </h1>
          <div className=' flex flex-col gap-4 w-full '>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Join today.
        </h3>
          <Button className='rounded-3xl bg-accent-foreground flex gap-2 cursor-not-allowed'><Image
        src="/icons8-google.svg" // Make sure the path is correct
        alt="Twitter Logo"
        width={40}
        height={40}
        objectFit='cover'
      />Sign up with Google</Button>
          <Button className='rounded-3xl bg-accent-foreground flex gap-2 cursor-not-allowed'>
          <Image
        src="/icons8-apple.svg" // Make sure the path is correct
        alt="Twitter Logo"
        width={40}
        height={40}
        objectFit='cover'
      />Sign up with Apple</Button>
          <div className='flex justify-between gap-2 items-center'>
          <p className='border-b w-full'></p>
          <p>or</p>
          <p className='border-b w-full'></p>
          </div>

          <Link href={'/i/flow/signup'}><Button className="rounded-3xl bg-sky-500 text-white w-full">
          Create an account
        </Button></Link>
          <footer className='flex flex-col'>
            <p>Don't want to create an account? </p>
            <p>Sign In with our Demo Account</p>
            <div className="bg--100 border-2 pt-2 mt-4 border-blue-300 p-4 rounded-md shadow-md">
              <p className="text-lg font-semibold mb-2">Demo Credentials:</p>
              <p>Email: demouser@gmail.com </p>
              <p>Password: 12345678 </p>
            </div>
          </footer>
          </div>
        </div>
        <div className='py-5 w-full gap-2 flex flex-col'>
        <p>Already have an account?</p>
        <Link href={'/i/flow/login'}><Button className='rounded-3xl w-full bg-secondary text-primary'>Sign in</Button></Link>
      </div>

     </section>
      </div>
      <div>
      <Footer />

      </div>
    </main>
  )
}
