import { SESSION_COOKIE, createDatabaseClient, createSessionClient } from "$lib/server/appwrite.js";
import { redirect } from "@sveltejs/kit";
import { Query } from "node-appwrite";

export async function load (event): Promise<{ user: any, documents: any }> {
    const { locals } = event;

    // Logged out users can't access this page.
    if (!locals.user) redirect(302, "/signup");

    // Create the Appwrite client.
    const { account: dbaccount } = createDatabaseClient(event);

    // Fetch documents related to the user.
    const documents = await dbaccount.listDocuments("6726c103000d53b938ab", "6726c10f0033575af875", [
        // Query.equal("userId", locals.user.$id)
    ]);
    console.log(documents.documents);
    // Pass the user and documents to the page.
    return {
        user: locals.user,
        documents: documents.documents // Access the documents array
    };
}