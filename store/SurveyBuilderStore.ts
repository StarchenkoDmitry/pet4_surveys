import { SurveyTemplatesList } from "@/components/interfaces/Question";
import { v4 } from "uuid";
import { create } from "zustand";
import { persist } from "zustand/middleware";


export interface ISurveyTemplatesStore{
    templates:SurveyTemplatesList;
    create:()=>void;
    delete:(id:string)=>void;
}

export const useSurveyTemplatesStore = create(persist<ISurveyTemplatesStore>(
    (set, get)=>({
        templates:[],
        create(){
            const { templates } = get();
            const newId = v4();
            if(templates.find(t=>t.id === newId)){
                throw new Error("newId exist in templates");
            }
            set({
                templates: [...templates,{
                    id:v4(),
                    title:'Title'
                }]
            })
        },
        delete(id){
            set({
                templates: get().templates.filter((t)=>t.id !== id)
            });
        },
    }),
    { name:"__TemplatesStore",skipHydration:true })
);
