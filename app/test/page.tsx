import Header from '@/components/ui/Header'
import { auth } from '@/lib/auth';
import Image from "next/image"

export default async function Home() {

  const session = await auth();

  return (
    <main className="flex flex-col min-h-screen">
      <Header/>

      <div>
        <h3>
          Session:{JSON.stringify(session)}
        </h3>
        <img 
          className='w-24 h-24 m-2 rounded-full'
          src={session?.user?.image || ""} 
          alt="avatar" 
        />


        <Image 
          className='w-24 h-24 m-2 rounded-full'
          src={session?.user?.image || ""} 
          alt="av"
          width={100}
          height={100}
        />
      </div>

      <button
        onClick={async ()=>{
          "use server"
          try {
            // const res = await sql`SELECT * from CARTS where user_id=${"0"}`;
            
            // console.log("res",res);
          } catch (error) {
            console.log("error",error);
          }
        }}
      >
        TEST CLIKC
      </button>

    </main>
  )
}
