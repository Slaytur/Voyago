import { db } from "$lib/server/prisma";
import { Argon2id } from "oslo/password";
import { redirect } from "@sveltejs/kit";
import { signIn } from "@auth/sveltekit/client";
import { AuthError } from "@auth/sveltekit";

export const actions = {
    default: async ({ request, cookies }) => {
        const e = await request.formData();
        const { email, password } = Object.fromEntries(e) as Record<string, string>;
        const data = {
            email: email,
            password: password
        };
        
        try {
            signIn("user", data);
        } catch (error: any) {
            if (error instanceof AuthError) {
                switch (error.type) {
                    case "CredentialsSignin":
                        return null;
                    default:
                        return null;
                }
            }
        }
    }
};
