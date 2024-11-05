// src/routes/signup/+page.server.js

import { SESSION_COOKIE, createAdminClient } from "$lib/server/appwrite.js";
import { fail, redirect } from "@sveltejs/kit";

export async function load (event): Promise<void> {
    const { locals } = event;

    // Logged out users can't access this page.
    if (locals.user) redirect(302, "/");
}

export const actions = {
    login: async ({ request, cookies }) => {
        // Extract the form data.
        const data = await request.formData();

        const email: any = data.get("email");
        const password: any = data.get("password");

        if (typeof email !== "string"
            || typeof password !== "string") {
            return fail(422, {
                error: "Invalid form data."
            });
        }

        // Create the Appwrite client.
        const { account } = createAdminClient();

        // Create the session using the client
        await account.createEmailPasswordSession(email, password)
            .then(session => {
                // Set the session cookie with the secret
                cookies.set(SESSION_COOKIE, session.secret, {
                    sameSite: "strict",
                    expires: new Date(session.expire),
                    secure: true,
                    path: "/"
                });

                // Redirect to the account page.
                redirect(302, "/dashboard");
            })
            .catch(err => {
                return fail(422, {
                    error: err
                });
            });
        redirect(302, "/dashboard");
    }
};
