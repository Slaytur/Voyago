import { redirect } from "@sveltejs/kit";

export async function load (event): Promise<{ user: any }> {
    const { locals } = event;

    // Logged out users can't access this page.
    if (!locals.user) redirect(302, "/signup");

    // Pass the user and documents to the page.
    return {
        user: locals.user
    };
}
