'use client'

import { PlusIcon } from "@heroicons/react/16/solid";
import { Button, Input, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { QuestionData, QuestionTypes } from "./interfaces/Question";
import { CreateRandomQuestion } from "../utils/Helper";
import QuestionBuilder from "./QuestionBuilder";

interface Props {
}

function SurveyBuilder({}: Props) {

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
        <div className='p-2 bg-sky-100 rounded-lg '>
            <TextField 
                className="my-2"
                id="outlined-basic" 
                label="Surney title" 
                variant="outlined" 
                required
                size="small"
                onChange={handlerName}
            />

            <Typography className="mx-3" component="h3">Questions:</Typography>

            <div className="">
            {
                questions.map((q,i)=><QuestionBuilder key={i}
                    className="my-2"
                    question={q}
                />)
            }
            </div>
            
            
            <Button 
                className="w-fit my-2"
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

export default SurveyBuilder;
