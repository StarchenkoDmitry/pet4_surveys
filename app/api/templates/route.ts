import { SurveyData, SurveyTemplatesList } from '@/interfaces/Question'
import { CreateRandomQuestionList } from '@/helpers/RandomData'
import { NextRequest, NextResponse } from 'next/server';

const templates : SurveyTemplatesList = CreateRandomQuestionList();


export async function GET(request: NextRequest) {
  return NextResponse.json(templates);  
}

export async function POST(request: NextRequest) {  
  const data: SurveyData = await request.json();

  console.log("DATA:",data)

  return NextResponse.json("Mow");    
}
