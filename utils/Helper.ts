import { QuestionData, QuestionTypes, SelectData } from "@/components/interfaces/Question";

export function CreateRandomQuestion():QuestionData{

    const selects:SelectData[] = []
    for(let p = 0, max = Math.random()*5+2; p< max;p++){
        selects.push({
            text:`text-${Math.random()}`
        })
    }

    const q: QuestionData = {
        title:`Rand-${Math.random()}`,
        types:QuestionTypes.OneSelect,
        questions:selects,
    }
    return q;
}