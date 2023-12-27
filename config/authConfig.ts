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
        profile:(profile,token)=>{
            console.log("NextAuth profile:",profile)
            console.log("NextAuth token:",token)
            token.access_token
            return {
                id: profile.id.toString(),
                name: profile.name,
                email: profile.email,
                image: "LOLU"+profile.avatar_url,
                disk_usage2: profile.disk_usage,
            };
        },        
    })],
    callbacks: {
        async jwt({token,user, session,trigger}){
            console.log("/jwt:",token,user,session,trigger);
            if(user){
                token.textfield = `testfiled code ${Math.random()}`
            }
            return token;
        },
        async session({ session, newSession, token, trigger, user}:any){
            console.log("/session:",session,newSession,token,trigger,user);
            // session.user.mama = 19;
            session.user.fieldtest = token.textfield;
            // await new Promise((res,_)=>{setTimeout(res,2000);})
            // user['petyu'] = "zenalalak";
            return session;
        },
        async signIn({ user, account, profile, email, credentials }) {
            console.log("/signIn:",user,account,profile,email,credentials);
            // user.kek = 999;
            // user.id = profile.id;
            return true;
        }

        // signIn:async function({user, account, profile}) {
        //     // Получение дополнительных данных пользователя GitHub и сохранение их в объекте сессии
        //     // if(!profile)return false;
        //     // user.id = profile.id;
        //     // user.created_at = profile.created_at;
        //     user.gfg = 

        //     return true;
        // }
    }

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
