import { SignInWithGitHub } from "lib/db/auth"
import NextAuth, { User } from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { v4 } from "uuid";
import { getSession } from "next-auth/react";

declare module 'next-auth' {
    interface User{
        accountId:string
        accessToken:string
    }

    interface Session{
        accessToken:string
    }
}

declare module "@auth/core/jwt" {
    interface JWT {
        accountId:string;
        accessToken:string;
    }
}


export const { handlers, auth } = NextAuth({
    providers: [ 
        GitHub,
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req):Promise<User | null> {
                console.log("Credentials authorize",credentials);
                // Add logic here to look up the user from the credentials supplied
                const user: User = { 
                    id: "1", 
                    name: "J Smith", 
                    email: "jsmith@example.com",
                    accountId:v4(),
                    accessToken:v4(),
                };

                console.log("Credentials user",user);
        
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user;
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;
                }        
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
        })
    ],
    callbacks: {
        // redirect({ url, baseUrl }) {
        //     console.log("redirect - url ", url, "baseUrl ", baseUrl); // This is what I was checking
            
        //     console.log("NEXT_PUBLIC_BASE_URL: ", process.env.NEXT_PUBLIC_BASE_URL);
        //     // console.log("THIS",this)

        //     // return `http://${}:3000`
        //     // return "http://localhost:3059";

        //     if(url.startsWith(baseUrl)) {
        //         console.log("redirect res1 ", url);
        //         return "http://localhost:3352";
        //         return url
        //     } else if(url.startsWith("/")) {
        //         const res = new URL(url, baseUrl).toString();
        //         console.log("redirect res2 ", res);
        //         return res;
        //     }
        //     return baseUrl;
        // },
        async signIn({ user, account, profile, email, credentials }) {
            console.log("/signIn:",user,account,profile,email,credentials);

            if(!account) return false;
            if(!account.providerAccountId) return false;

            const accessTokenRes = await SignInWithGitHub({
                avatarUrl:user.image as string,
                accountId: account?.providerAccountId,
                name: profile?.name as string,
                email: profile?.email as string,
                login: profile?.login as string,
            })

            if(!accessTokenRes)return false;

            user.accessToken = accessTokenRes.accessToken;
            user.accountId = account.providerAccountId;
            return true;
        },
        async jwt({token,user, session,trigger}){
            console.log("/jwt:",token,user,session,trigger);
            
            if(user){
                token.accessToken = user.accessToken;
                token.accountId = user.accountId;
            }
            return token;
        },
        async session({ session, newSession, token, trigger, user}){
            console.log("/session:",session,newSession,token,trigger,user);

            if(session.user){
                session.user.accessToken = token.accessToken;
            }

            return session;
        },
    },
    // trustHost:true
    debug:true,
});
