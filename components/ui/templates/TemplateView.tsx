import { SurveyTemplates } from '@/components/interfaces/Question';
import { TrashIcon } from '@heroicons/react/24/solid'
import { Button } from '@mui/material';
import React from 'react'
import { useSurveyTemplatesStore } from '../../../store/SurveyBuilderStore';

export interface Props{
    template:SurveyTemplates;
}

function TemplateView({template}: Props) {
    const { id, title } = template;

    const handlerDelete = ()=>{
        useSurveyTemplatesStore.getState().delete(id);
    }

    return (
        <div className='m-1 p-1 px-2 bg-green-200 rounded flex justify-between items-center'>
            <span>{title}</span>
            <Button 
                variant="outlined" 
                startIcon={<TrashIcon width={24}/>}
                onClick={handlerDelete}
            >
                Delete
            </Button>
        </div>
    )
}

export default TemplateView
