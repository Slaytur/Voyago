// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
async function main (): Promise<void> {
    console.log("Start seeding ...");

    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
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
