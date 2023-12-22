import { SurveyData, SurveyTemplatesList } from '@/interfaces/Question'
import { CreateRandomQuestionList } from '@/helpers/RandomData'
import { NextRequest, NextResponse } from 'next/server';
import jwt from "jsonwebtoken"

export async function POST(request: NextRequest) {
  console.log("POST-auth")

  const payload = {
    name:`Name-${Math.random()}`,
    userSecretik:"ImLalka",
  }

  const dataSigned = jwt.sign(payload,"SECRETJWT",{
    expiresIn:5,
  });

  const response = NextResponse.json({
    data:"Mow",
    token:dataSigned,
  });

  response.cookies.set({
    name: "tokenjwt",
    value: dataSigned,
    maxAge: 8,
    httpOnly: false,
    sameSite: "strict",
  });
  return response;
}
