'use client'
import { useEffect } from "react";
import { Button } from "@mui/material";
import { PlusIcon } from "@heroicons/react/16/solid";
import { useSurveyTemplatesStore } from "../../store/SurveyBuilderStore";

import Header from "@/components/ui/Header";
import TemplateView from "@/components/ui/templates/TemplateView";


export default function Home() {
  console.log("Templates Page");
  const { templates, create } = useSurveyTemplatesStore()
  
  useEffect(()=>{
    useSurveyTemplatesStore.persist.rehydrate()
  },[])

  return (
    <main className="flex flex-col min-h-screen">
      <Header/>
      
      <div className="mx-auto p-2 max-w-[600px] w-full flex-grow rounded">
        
        <div className="flex justify-between items-center">
          <span >Templates</span>
          <Button
              variant="outlined" 
              size="small"
              startIcon={<PlusIcon className='w-5 h-5'/>} 
              onClick={create}
          >
            Add variant
          </Button>
        </div>
        
        <div>
          {
            templates?.map(t=><TemplateView key={t.id} template={t}/>)
          }
        </div>
      </div>
    </main>
  )
}
