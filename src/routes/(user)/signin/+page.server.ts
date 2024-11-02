import { db } from "$lib/server/prisma";
import { Argon2id } from "oslo/password";
import { lucia } from "$lib/server/auth.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const { email, password } = Object.fromEntries(data) as Record<string, string>;
        const user = await db.user.findFirst({
            where: {
                email: email
            }
        });

        if (!user) return null;

        if (!(await new Argon2id().verify(user.password, password))) return null;

        const session = await lucia.createSession(user.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });
        redirect(302, "/");
    }
};
