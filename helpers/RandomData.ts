import { SurveyData, SurveyTypes, SelectData } from "@/components/interfaces/Question";
import { v4 } from "uuid";


export function CreateRandomSelectData():SelectData{
    return {
        id:v4(),
        text:`text-${Math.random()}`,
    }
}
export function CreateRandomQuestion():SurveyData{

    const selects:SelectData[] = []
    for(let p = 0, max = Math.random()*5+2; p< max;p++){
        selects.push(CreateRandomSelectData())
    }

    const q: SurveyData = {
        id:v4(),
        title:`Rand-${Math.random()}`,
        types:SurveyTypes.OneSelect,
        questions:selects,
    }
    return q;
}
