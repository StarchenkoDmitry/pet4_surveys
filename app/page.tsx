'use client'
import Header from '@/components/ui/Header'
import { GetTemplatesAll } from '../services/Templates'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data,setData]= useState("");

  useEffect(()=>{
    const func = async ()=>{
      const data = await GetTemplatesAll();
      console.log("DATA:,",data);
      setData(data);
    }
    func();
  },[])

  return (
    <main className="flex flex-col min-h-screen">
      <Header/>

      <p>{JSON.stringify(data)}</p>

      <button
        onClick={async ()=>{
          const res = await fetch("/api/templates",{
            method:"POST",
            body:JSON.stringify({mybody:"MY BODY"}),
          });
        }}
      >
        click me
      </button>

    </main>
  )
}
