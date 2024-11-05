export async function load (event): Promise<{ user: any } | null> {
    const { locals } = event;

    // Create the Appwrite client.
    if (!locals.user) {
        return {
            user: null
        };
    }

    return {
        user: locals.user
    };
};
