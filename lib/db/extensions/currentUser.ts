import { auth } from "@/config/authConfig";
import { Prisma } from "@prisma/client";

export function extensionsCurrentUser() {
	return Prisma.defineExtension((client) => {
		return client.$extends({
			model: {
				user: {
					async currentUser() {
						const session = await auth();

						if(!session)return null;

						const accToken = session?.user?.accessToken;
						console.log("currentUser accToken",accToken);

						if (!accToken) return null;

						try {
							const user = await client.user.findFirst({
								where:{
									tokens:{
										some:{
											accessToken:accToken
										}
									}
								}
							});
							// console.log("currentUser user",user);
							return user;
						} catch (error) {
							return null;
						}
					}
				}
			}
		});
	});
}
