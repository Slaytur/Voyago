// src/routes/signup/+page.server.js

import { SESSION_COOKIE, createAdminClient } from "$lib/server/appwrite.js";
import { redirect } from "@sveltejs/kit";
import { ID } from "node-appwrite";

export const actions = {
    signup: async ({ request, cookies }) => {
        // Extract the form data.
        const form = await request.formData();
        const email: any = form.get("email");
        const password: any = form.get("password");
        const name: any = `${form.get("fname")} ${form.get("lname")}`;

        // Create the Appwrite client.
        const { account } = createAdminClient();

        // Create the session using the client
        await account.create(ID.unique(), email, password, name);
        const session = await account.createEmailPasswordSession(email, password);

        // Set the session cookie with the secret
        cookies.set(SESSION_COOKIE, session.secret, {
            sameSite: "strict",
            expires: new Date(session.expire),
            secure: true,
            path: "/"
        });

        // Redirect to the account page.
        redirect(302, "/dashboard");
    }
};
