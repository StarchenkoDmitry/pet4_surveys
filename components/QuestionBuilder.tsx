import { FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import { QuestionData } from './interfaces/Question'

interface Props {
    className?:string;
    question:QuestionData;
}

function QuestionBuilder({
    question,
    className = ""
}: Props) {

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
                            <FormControlLabel 
                                key={i}
                                control={<Radio />} 
                                label={s.text} 
                                value={s.text} 
                            />
                        ))
                    }
                </RadioGroup>
            </div>
        </div>
    )
}

export default QuestionBuilder
