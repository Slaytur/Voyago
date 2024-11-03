// src/routes/signup/+page.server.js

import { SESSION_COOKIE, createAdminClient } from "$lib/server/appwrite.js";
import { fail, redirect } from "@sveltejs/kit";
import { ID } from "node-appwrite";

export const actions = {
    signup: async ({ request, cookies }) => {
        // Extract form data.
        const data = await request.formData();

        const email: any = data.get("email");
        const password: any = data.get("password");
        const cfpassword: any = data.get("cfpassword");
        const fname: any = data.get("fname");
        const lname: any = data.get("lname");

        if (typeof email !== "string"
            || typeof password !== "string"
            || typeof cfpassword !== "string"
            || typeof fname !== "string"
            || typeof lname !== "string") {
            return fail(422, {
                error: "Invalid form data."
            });
        }

        if (password !== cfpassword) {
            return fail(422, {
                error: "Passwords must match."
            });
        }

        const name = `${fname} ${lname}`;

        // Create the Appwrite client.
        const { account } = createAdminClient();

        // Create the session using the client
        await account.create(ID.unique(), email, password, name)
            .then(async () => {
                const session = await account.createEmailPasswordSession(email, password);

                // Set the session cookie with the secret
                cookies.set(SESSION_COOKIE, session.secret, {
                    sameSite: "none",
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
