// src/routes/account/+page.server.js

import { SESSION_COOKIE, createDatabaseClient, createSessionClient } from "$lib/server/appwrite.js";
import { redirect } from "@sveltejs/kit";
import { Query } from "node-appwrite";

export async function load ({ locals }): Promise<{ user: any }> {
    // Logged out users can't access this page.
    if (!locals.user) redirect(302, "/signup");

    // Pass the stored user local to the page.
    return {
        user: locals.user
    };
}

// Define our log out endpoint/server action.
export const actions = {
    default: async (event: any) => {
    // Create the Appwrite client.
        const { account: dbaccount } = createDatabaseClient(event);
        const { account } = createSessionClient(event);

        // Delete the session on Appwrite, and delete the session cookie.
        const docs = await dbaccount.listDocuments("6726c103000d53b938ab", "6726c10f0033575af875", [Query.equal("userId", (await account.get()).$id)]);
        console.log(docs);
    }
};
