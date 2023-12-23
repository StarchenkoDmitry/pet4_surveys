import Header from '@/components/ui/Header'
import { GetTemplatesAll } from '../../services/Templates'
import { useEffect, useState } from 'react'
import { sql } from '@vercel/postgres';

// import { getServerSession } from "next-auth";

export default async function Home() {


  // export default function Home({
  //   pageProps 
  // }:{pageProps:any}) {



  // const ffgf  = getServerSideProps()

  let data = "def";
  let errorData = "def";

  console.log(`render1-${Date.now().toString()}`)
  const water = await new Promise((res,_)=>{
    setTimeout(res,5000);
  });
  console.log(`render2-${Date.now().toString()}`)
  // try {

  //   data = await sql`SELECT * from CARTS where user_id=${"4398634"}`;
    
  // } catch (error) {
  //   errorData = error;
  // }

  return (
    <main className="flex flex-col min-h-screen">
      <Header/>
      
      {/* <div>
        <span>pageProps:{JSON.stringify(pageProps)}</span>
      </div> */}

      <h1>Test Page</h1>

      <p>
        ENV_TEST:{process.env.ENV_TEST}
        NODE_ENV:{process.env.NODE_ENV}
      </p>
      <p>data {JSON.stringify(data)}</p>
      <p>errorData {JSON.stringify(errorData)}</p>

      <p className='p-1 bg-slate-300'>
        process.env:
        {JSON.stringify(process.env)}
      </p>

      {/* <button
        onClick={async ()=>{
          "use server"
          try {
            const res = await sql`SELECT * from CARTS where user_id=${"0"}`;
            
            console.log("res",res);
          } catch (error) {
            console.log("error",error);
          }
        }}
      >
        TEST CLIKC
      </button> */}

    </main>
  )
}
