'use client'

import { useSession } from "next-auth/react";


export function CompInder() {

    const ses = useSession();
    
  
    return(
      <div className="p-2 bg-green-100">
        <span>
          useSesssion:{JSON.stringify(ses)}
        </span>
      </div>
    )
  }
  