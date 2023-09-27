import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ModeToggle } from '@/components/ui/toggleTheme'
import { TypographyDemo } from '@/components/test/typography'
import { Test } from '@/components/test/Test'
import Footer from '@/components/myUi/Footer'


export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <div className='flex p-4'>
      <section className='hidden md:flex p-2 w-2/3'>
      <Image
        src="/icons8-twitter.svg" // Make sure the path is correct
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
          Happening now
        </h1>
          <div className=' flex flex-col gap-4 md:w-1/2 w-full '>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Join today.
        </h3>
          <Button className='rounded-3xl bg-accent-foreground'>Sign up with Google</Button>
          <Button className='rounded-3xl bg-accent-foreground'>Sign up with Apple</Button>
          <div className='flex justify-between gap-2 items-center'>
          <p className='border-b w-full'></p>
          <p>or</p>
          <p className='border-b w-full'></p>
          </div>

          <Button className='rounded-3xl bg-sky-500 text-white'>Create an account</Button>
          <footer>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</footer>
          </div>
        </div>
        <div className='py-5 md:w-1/2 w-full gap-2 flex flex-col'>
        <p>Already have an account?</p>
        <Button className='rounded-3xl bg-secondary text-primary'>Sign in</Button>
      </div>

     </section>
      </div>
      <div>
      <Footer />

      </div>
    </main>
  )
}
