import { SurveyData, SurveyTemplatesList } from '@/interfaces/Question'
import { CreateRandomQuestionList } from '@/helpers/RandomData'
import { NextRequest, NextResponse } from 'next/server';

const templates : SurveyTemplatesList = CreateRandomQuestionList();


export async function GET(request: NextRequest) {
  return NextResponse.json(templates);  
}

// export async function POST(request: NextRequest) {  
//   const data: SurveyData = await request.json();

//   console.log("DATA:",data)

//   const response = NextResponse.json("Mow");

//   response.cookies.set({
//     name: "jwt2",
//     value: JSON.stringify({myjwt:"SOS"}),
//     maxAge: 60*60*24,
//     httpOnly: true,
//     sameSite: "strict",
//   });
//   return response;
// }


export async function POST(request: NextRequest) {  
  const data: SurveyData = await request.json();

  const water = await new Promise((res,_)=>{
    setTimeout(res,2500);
  });

  console.log("DATA:",data)

  const response = NextResponse.json("Mow");

  response.cookies.set({
    name: "jwt2",
    value: JSON.stringify({myjwt:"SOS"}),
    maxAge: 60*60*24,
    httpOnly: true,
    sameSite: "strict",
  });
  return response;
}