'use client'

import { PlusIcon } from "@heroicons/react/16/solid";
import { Button, Input, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { SurveyData, SurveyTypes } from "../interfaces/Question";
import { CreateRandomQuestion, CreateRandomSelectData } from "../helpers/RandomData";
import QuestionBuilder from "./QuestionBuilder";
import { useSurveyTemplatesStore } from "../store/SurveyBuilderStore";
import { v4 } from "uuid";

interface Props {
}

function SurveyBuilder({}: Props) {

    const handlerName = (event: ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value);
    }

    const state  = useSurveyTemplatesStore(state=>state)

    const [questions,setQuestion] = useState<SurveyData[]>()

    useEffect(() => {
        setQuestion([
            {
                id:v4(),
                title:"Randm36",
                types:SurveyTypes.OneSelect,
                questions:[
                    CreateRandomSelectData(),
                    CreateRandomSelectData(),
                    CreateRandomSelectData(),
                    CreateRandomSelectData(),
                    CreateRandomSelectData(),
                ],
            }
        ])
        // useSurveyTemplatesStore.getState().load();
    }, [])
    console.log("STRICT",questions)

    const [_,gdfg] = useState(true);
    const handlerAddQuestion = ()=>{
      gdfg(p=>!p);
        // setQuestion(prev=>([...prev, CreateRandomQuestion()]))
    }

    return (
        <div className='p-2 bg-sky-100 rounded-lg '>
            <TextField 
                className="m-2"
                id="outlined-basic" 
                label="Surney title" 
                variant="outlined" 
                required
                size="small"
                onChange={handlerName}
            />
            <Typography className="mx-4" component="h3">Questions:</Typography>
            {/* <span>{state.num}</span>
            <button onClick={()=>{
                useSurveyTemplatesStore.setState((p)=>({num:p.num+1}));
            }}>CLKC</button> */}
            <div className="">
            {
                questions?.map((q,i)=><QuestionBuilder key={i}
                    className="my-2"
                    question={q}
                />)
            }
            </div>
            
            
            <Button 
                className="w-fit mt-2"
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
