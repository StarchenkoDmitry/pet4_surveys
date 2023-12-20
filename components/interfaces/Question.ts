export enum QuestionTypes{
    OneSelect,
    MultySelect,
}

export interface SelectData{
    text:string;
}

export interface QuestionData{
    title:string;
    types:QuestionTypes;
    questions:SelectData[]
}
