// 'use client'
import Header from "@/components/ui/Header";
import db from "lib/db";


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
  

  return (
    <main className="flex flex-col min-h-screen">
      <Header/>
      
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
