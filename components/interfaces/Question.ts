export enum SurveyTypes{
    OneSelect,
    MultySelect,
}

export interface SelectData{
    id:string;
    text:string;
}

export interface SurveyData{
    id:string;

    title:string;
    types:SurveyTypes;
    
    questions:SelectData[]
}

export type SurveyTemplates = {
    id:string;
    title:string;
}

export type SurveyTemplatesList = SurveyTemplates[];