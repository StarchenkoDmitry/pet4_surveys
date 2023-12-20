'use client'

import { PlusIcon } from "@heroicons/react/16/solid";
import { Button, Input, TextField } from "@mui/material";
import { OutlinedInput } from '@mui/material';
import { ChangeEvent, useState } from "react";
import Question from "./Question";
import { QuestionData, QuestionTypes } from "./interfaces/Question";
import { CreateRandomQuestion } from "../utils/Helper";

interface Props {
}

function Forms({}: Props) {

    const handlerName = (event: ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value);
    }

    const [questions,setQuestion] = useState<QuestionData[]>([
        {
            title:"Randm36",
            types:QuestionTypes.OneSelect,
            questions:[
                {text:"gfghdh"},
                {text:"gfghdh5"},
                {text:"gfghdh7"},
                {text:"gfghdh457"},
            ],
        }
    ])

    const handlerAddQuestion = ()=>{
        setQuestion(prev=>([...prev, CreateRandomQuestion()]))
    }
    
    return (
        <div className='p-2 bg-slate-100 rounded-lg '>
            <TextField 
                id="outlined-basic" 
                label="Surney title" 
                variant="outlined" 
                required
                size="small"
                onChange={handlerName}
            />

            <div className="">
                <span className="p-2">QUESTION:</span>
                {
                    questions.map(q=><Question question={q}/>)
                }
            </div>
            
            
            <Button 
                className="bg-orange-700 w-fit"
                component="label"
                variant="contained"
                startIcon={<PlusIcon className="w-4 h-4"/>}
                onClick={handlerAddQuestion}
            >
                Add question
            </Button>
        </div>
    )
}

export default Forms;
