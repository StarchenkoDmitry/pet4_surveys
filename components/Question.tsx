import { FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import { QuestionData } from './interfaces/Question'

interface Props {
    question:QuestionData;
}

function Question({question}: Props) {

    return (
        <div className='p-3 bg-green-300 rounded'>
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
                        question.questions.map(s=>(
                            <FormControlLabel 
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

export default Question


            {/* <Typography variant="h1" component="h2">
                h1. Heading
            </Typography> */}