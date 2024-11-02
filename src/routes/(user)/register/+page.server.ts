import { db } from "$lib/server/prisma";
import { Argon2id } from "oslo/password";
import { redirect } from "@sveltejs/kit";

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const { email, password, fname, lname } = Object.fromEntries(data) as Record<string, string>;

        if (
            !email
            || typeof email !== "string"
            || !password
            || typeof password !== "string"
            || !fname
            || typeof fname !== "string"
            || !lname
            || typeof lname !== "string"
        ) return null;

        const hashedPassword = await new Argon2id().hash(password);
        const user = await db.user.create({
            data: {
                email: email,
                password: hashedPassword,
                name: `${fname} ${lname}`
            }
        });
        redirect(302, "/signin");
    }
};
