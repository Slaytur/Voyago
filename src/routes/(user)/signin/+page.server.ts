import { providerMap, signIn } from "../../../auth";
import type { Actions, RequestEvent } from "../../$types";
import { redirect } from "@sveltejs/kit";

export async function load ({ locals }: RequestEvent) {
    const session = await locals.auth();
    if (session) throw redirect(302, "/");

    return { providerMap };
}

export const actions: Actions = { default: signIn };
