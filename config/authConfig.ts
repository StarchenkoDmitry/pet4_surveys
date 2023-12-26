import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { NextResponse } from "next/server";

export const { handlers, auth } = NextAuth({ 
    providers: [ GitHub({
        // profile:(profile,token)=>{
        //     console.log("NextAuth profile:",profile)
        //     console.log("NextAuth token:",token)
            
        //     return {
        //         id: profile.id.toString(),
        //         name: profile.name,
        //         emailf: profile.email,
        //         image3: "LOL URL"+profile.avatar_url,
        //         disk_usage2: profile.disk_usage,
        //     };
        // },
    })],
    // callbacks:{
    //     // async authorized({ request, auth }) {
    //     //     const url = request.nextUrl
    //     //     console.log("authorized: ",auth,request,url)
    //     //     // if(request.method === "POST") {
    //     //     //   const { authToken } = (await request.json()) ?? {}
    //     //     //   // If the request has a valid auth token, it is authorized
    //     //     //   const valid = await validateAuthToken(authToken)
    //     //     //   if(valid) return true
    //     //     //   return NextResponse.json("Invalid auth token", { status: 401 })
    //     //     // }
          
    //     //     // // Logged in users are authenticated, otherwise redirect to login page
    //     //     // return !!auth.user
    //     //     return {} as any
    //     // },
    //     // jwt: (params)=>{

    //     //     console.log("jwt: ",params)
    //     //     return {} as any
    //     // }
    //     session(params){
    //         console.log("!!!!!session: ",params)
    //         return {} as any
    //     }
    // },
});
