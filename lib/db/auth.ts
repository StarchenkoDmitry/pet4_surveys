import { AccessToken } from "@prisma/client";
import db from "lib/db"
import { v4 } from "uuid";


export type SignInResult = AccessToken | undefined

export type SignInArgs = {
    accountId:string
    name?:string
    login?:string
    email?:string
    avatarUrl?:string
}

export async function SignInWithGitHub({
    accountId,
    name,
    login,
    email,
    avatarUrl,
}:SignInArgs):Promise<SignInResult>{
    console.log("addTemplate(...)")
    try {
        const resToken = db.$transaction(async (ts)=>{
            //check exist user with provider
            const userProvider = await ts.githubProvider.findFirst({
                where:{
                    accountId
                },
                include:{
                    user:{
                        select:{
                            id:true
                        }
                    }
                }
            });

            const currentTime = new Date();
            //add 4 days
            const addTime = 4 * 24 * 60 * 60 * 1000;
            const expiresTime = new Date(currentTime.getTime() + addTime);

            if(userProvider){
                //создаем новый токен для пользователя
                const accessToken = await db.accessToken.create({
                    data:{
                        accessToken: v4(),
                        expiresIn: expiresTime,
                        user:{
                            connect:{
                                id:userProvider.user.id
                            }
                        }
                    }
                });
                return accessToken;
            }else{
                //создаем новый токен для пользователя и нового пользователя
                const accessToken = await db.accessToken.create({
                    data:{
                        accessToken: v4(),
                        expiresIn: expiresTime,
                        user:{
                            create:{
                                name,
                                providers:{
                                    create:{
                                        accountId,
                                        name,
                                        login,
                                        email,
                                        avatarUrl,
                                    }
                                }
                            }
                        }
                    }
                });
                return accessToken;
            }

        },{
            isolationLevel:"Serializable"
        });

        return resToken;
    } catch (error) {
        console.error("SignInOnGitHubProvider error:",error)
        return;
    }
}
