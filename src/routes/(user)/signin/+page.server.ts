import { db } from "$lib/server/prisma";
import { Argon2id } from "oslo/password";
import { redirect } from "@sveltejs/kit";
import {
    createSession,
    generateSessionToken,
    setSessionTokenCookie,
    validateSessionToken
} from "$lib/server/session";
import { writable } from "svelte/store";

let userId;

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const { email, password } = Object.fromEntries(data) as Record<string, string>;
        const user = await db.user.findFirst({
            where: {
                email: email
            }
        });

        userId = user?.id;

        if (!user) return null;

        if (!(await new Argon2id().verify(user.password, password))) return null;

        const token = generateSessionToken();
        const session = createSession(token, Number(user.id));

        await validateSessionToken(token);
        redirect(302, "/");
    }
};
