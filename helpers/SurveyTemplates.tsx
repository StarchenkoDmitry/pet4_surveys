import { SurveyTemplatesList } from "../interfaces/Question"

const SURVEYREFDATA_KEY = "_#_#_#_SurveyRefData";

export function LoadSurveyList():SurveyTemplatesList{
    const rowData =  localStorage.getItem(SURVEYREFDATA_KEY);
    if(!rowData) return [];
    const data = JSON.parse(rowData);
    return data;
}

export function SaveSurveyList(data:SurveyTemplatesList){
    localStorage.setItem(SURVEYREFDATA_KEY,JSON.stringify(data));
}
