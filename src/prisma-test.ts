import { PrismaClient } from "@prisma/client";
import { mainModule } from "process";

const prisma = new PrismaClient()

async function getUsers() {
    const users = await prisma.user.findMany();
    console.log(users);
}

getUsers().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})