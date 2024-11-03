import { SESSION_COOKIE, createDatabaseClient, createSessionClient } from "$lib/server/appwrite.js";
import { redirect } from "@sveltejs/kit";
import { Query } from "node-appwrite";

// Get the id parameter from the page store

export async function load (event): Promise<{ user: any, document: any }> {
    const { locals, url, params } = event;

    // Logged out users can't access this page.
    if (!locals.user) redirect(302, "/signup");

    // Create the Appwrite client.
    const { account: dbaccount } = createDatabaseClient(event);

    const id = params.id;
    console.log(id);

    if (id != null) {
        const documents = await dbaccount.listDocuments("6726c103000d53b938ab", "6726c10f0033575af875", [
            Query.equal("$id", id)
        ]);
        // console.log("Document: ", documents.documents[0]);
        // Pass the user and documents to the page.
        return {
            user: locals.user,
            document: documents.documents[0] // Access the documents array
        };
    }
    return {
        user: locals.user,
        document: [] // Access the documents array
    };

    // Fetch documents related to the user.
}
