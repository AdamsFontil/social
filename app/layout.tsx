
import './globals.css'
import './hover-style.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import ReactQueryProvider  from './utils/reactQueryProvider'
import { UserProvider } from './utils/userProfileContext'




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tweeter',
  description: 'Twitter clone by Adams Fontil, made with NextJS, TailwindCSS, ShadcnUI, amongst others in the frontend. Uses this platform and give me feedback on how decent this project is. This would be greatly appreciated.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ReactQueryProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <UserProvider>
            {children}
            {/* <div className='p-12 bg-red-500'>Testing</div> */}
            </UserProvider>


        </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
