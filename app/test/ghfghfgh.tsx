'use client'

import { useSession } from "next-auth/react";


export function CompInder() {

    const {update,data}= useSession();
    
  
    return(
      <div className="p-2 bg-green-100">
        <span>
          useSesssion,data:{JSON.stringify(data)}
        </span>
        <button
            className="p-1 bg-blue-400"
            onClick={()=>{
                update({myTestCode:"testtt"})
            }}
        >
            UpdateJWT
        </button>
      </div>
    )
  }
  