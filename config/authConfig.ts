import { SignInWithGitHub } from "lib/db/auth"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"


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
    providers: [ GitHub ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // console.log("/signIn:",user,account,profile,email,credentials);

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
            // console.log("/jwt:",token,user,session,trigger);
            
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
    }
});
