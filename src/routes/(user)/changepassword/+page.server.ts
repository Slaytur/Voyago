import { createSessionClient } from "$lib/server/appwrite";
import { fail, redirect } from "@sveltejs/kit";

export async function load ({ locals }): Promise<{ user: any }> {
    // Logged out users can't access this page.
    if (!locals.user) redirect(302, "/signup");

    // Pass the stored user local to the page.
    return {
        user: locals.user
    };
}

export const actions = {
    changepassword: async ({ request, cookies }) => {
        // Extract the form data.
        const data = await request.formData();

        const oldpassword: any = data.get("old");
        const newpassword: any = data.get("new");

        if (typeof oldpassword !== "string"
            || typeof newpassword !== "string") {
            return fail(422, {
                error: "Invalid form data."
            });
        }

        // Create the Appwrite client.
        const { account } = createSessionClient({ cookies: cookies });

        await account.updatePassword(newpassword, oldpassword);
        redirect(302, "/account");
    }
};
