import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

import '@/styles/globals.css'
// import { getServerSession } from 'next-auth/next';


// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Surveys',
  description: 'create a custom froms survey',
}


export default async function RootLayout({
  children,
  // pageProps,
}: {
  children: React.ReactNode,
  // pageProps:any
}) {
  // console.log("pageProps:",pageProps)
  // console.log(`Layout render-${Date.now().toString()}`)
  
  // const data = await getServerSession(authOptions);
  
  return (
    <html lang="eu">
      {/* <link rel="icon" href="/logo.png" sizes="any" /> */}
      <body 
        id='body' 
        // className={inter.className}
      >
        {children}
      </body>
    </html>
  )
}
