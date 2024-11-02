import {
    validateSessionToken,
    setSessionTokenCookie,
    deleteSessionTokenCookie
} from "./lib/server/session";

import type { Handle } from "@sveltejs/kit";

// eslint-disable-next-line @typescript-eslint/unbound-method
export const handle: Handle = async ({ event, resolve }) => {
    const token = event.cookies.get("session") ?? null;
    if (token === null) {
        event.locals.user = null;
        event.locals.session = null;
        return resolve(event);
    }

    const { session, user } = await validateSessionToken(token);
    if (session !== null)
        setSessionTokenCookie(event, token, session.expiresAt);
    else
        deleteSessionTokenCookie(event);

    event.locals.session = session;
    event.locals.user = user;
    return resolve(event);
};
