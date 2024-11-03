// src/routes/signup/+page.server.js

import { SESSION_COOKIE, createAdminClient, createDatabaseClient } from "$lib/server/appwrite.js";
import { redirect } from "@sveltejs/kit";
import { ID } from "node-appwrite";

export const actions = {
    default: async (event: any) => {
        const { request, cookies } = event;
        // Extract the form data.
        const form = await request.formData();

        // Create the Appwrite client.
        const { account } = createAdminClient();
        const { account: dbaccount } = createDatabaseClient(event);

        // Create the session using the client
        const data = {
            name: "name",
            userId: (await account.get()).$id,
            itinerary: "itinerary",
            weather: "weather",
            travel_tips: ["tip 1", "tip 2", "tip 3"],
            packing_list: ["item 1", "item 2", "item 3"]

        };

        const doc = await dbaccount.createDocument("6726c103000d53b938ab", "6726c10f0033575af875", ID.unique(), data);


        // Redirect to the account page.
        redirect(302, "/dashboard");
    }
};
