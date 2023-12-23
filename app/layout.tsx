import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Surveys',
  description: 'create a custom froms survey',
}


export default function RootLayout({
  children,
  // pageProps,
}: {
  children: React.ReactNode,
  // pageProps:any
}) {
  // console.log("pageProps:",pageProps)
  return (
    <html lang="eu">
      {/* <link rel="icon" href="/logo.png" sizes="any" /> */}
      <body id='body' className={inter.className}>{children}</body>
    </html>
  )
}
