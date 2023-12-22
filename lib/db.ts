import { PrismaClient } from "@prisma/client";


// const client = new PrismaClient().$extends(currentUser());

const db = new PrismaClient();

export default db;
