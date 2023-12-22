import Header from '@/components/ui/Header'
import { GetTemplatesAll } from '../../services/Templates'
import { useEffect, useState } from 'react'
import { sql } from '@vercel/postgres';


export default async function Home() {
  let data;
  let errorData;
  try {

    data = await sql`SELECT * from CARTS where user_id=${"4398634"}`;
    
  } catch (error) {
    errorData = error;
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header/>

      <h1>Test Page</h1>

      <p>data {JSON.stringify(data)}</p>
      <p>errorData {JSON.stringify(errorData)}</p>

    </main>
  )
}
