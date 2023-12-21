import { Button, RadioGroup, TextField } from '@mui/material'
import React from 'react'
import { SurveyData } from '../interfaces/Question'
import { PlusIcon } from '@heroicons/react/16/solid';
import { v4 } from 'uuid';


interface Props {
    className?:string;
    question:SurveyData;
}

function QuestionBuilder({
    question,
    className = ""
}: Props) {

    const handlerAddVariant = ()=>{
        question.questions.push({
            id:v4(),
            text:`variant-${Math.random()}`
        })
    }

    return (
        <div className={`p-2 bg-white rounded-lg ${className}`}>
            <TextField 
                size="small"
                label='Question name'
                defaultValue={question.title}
            />

            <div className='p-1'>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    {
                        question.questions.map((s,i)=>(
                            <TextField 
                                key={s.id}
                                className="m-2"
                                variant="outlined" 
                                size="small"
                                required
                                defaultValue={s.text}
                                InputProps={{
                                    startAdornment:(<PlusIcon className='w-5 h-5' ></PlusIcon>)
                                }}
                            />
                        ))
                    }
                </RadioGroup>
                <Button 
                    className='m-2'
                    variant="outlined" 
                    startIcon={<PlusIcon className='w-5 h-5'/>} 
                    onClick={handlerAddVariant}
                >
                    Add variant
                </Button>
            </div>
            
        </div>
    )
}

export default QuestionBuilder
