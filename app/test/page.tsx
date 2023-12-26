// 'use client'
import Header from "@/components/ui/Header";
import { auth } from "@/config/authConfig";
import db from "lib/db";
import { SessionProvider, useSession} from "next-auth/react";
import { CompInder } from "./ghfghfgh";


export default async function Home() {


  const addDB = async ()=>{
    'use server'

    await db.post.create({
      data:{
        title:"TITLE",
        text:`rand ${Math.random()}`,
      }
    })
  }

  const posts = await db.post.findMany();

  const session = await auth();
  console.log("session",session)
  // console.log("KEYS",Object.keys(session?.user||{EMTY:"EMTY"}));
  
  const fhfg = await auth((req)=>{
    console.log("REQ",req)
  })

  return (
    <main className="flex flex-col min-h-screen">
      <Header/>

      <SessionProvider session={session}>
        <CompInder/>
      </SessionProvider>


      <div>
        <span>session:{JSON.stringify(session)}</span>
      </div>
      
      <div className="p-1 bg-slate-200">
        {
          posts.map(p=><div key={p.id}>
            {p.text}
          </div>)
        }
      </div>

      <form action={addDB} className="p-2">
        <input type="text" className="block" />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}



