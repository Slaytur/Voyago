// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main (): Promise<void> {
    console.log("Start seeding ...");

    const user = await prisma.user.create({
        data: {
            name: "test name",
            email: "test@test.com",
            password: "test"
        }
    });

    main()
        .then(async () => {
            await prisma.$disconnect();
        })
        .catch(async e => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
        });
}
