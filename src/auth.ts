import { SvelteKitAuth } from "@auth/sveltekit";
import Credentials from "@auth/sveltekit/providers/credentials";
import type { Provider } from "@auth/sveltekit/providers";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "$lib/server/prisma";
import { compare, hash } from "bcryptjs";
import type { RequestEvent } from "./routes/$types";
import { redirect } from "@sveltejs/kit";

export const hashPassword = (password: string): Promise<string> => hash(password, 10);

const providers: Provider[] = [
    Credentials({
        id: "signin",
        credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" }
        },
        authorize: async credentials => {
            if (typeof credentials?.email !== "string" || typeof credentials?.password !== "string") return null;

            const user = await db.user.findUnique({ where: { email: credentials.email } });
            if (!user) throw new Error("The credentials provided do not exist.");

            /**
             * @note Password is base64-encoded before sending to server.
             */
            const hashMatch = await compare(credentials.password, user.password);
            if (!hashMatch) throw new Error("The credentials provided do not exist.");

            return user;
        }
    })
];

export const { signIn, signOut, handle } = SvelteKitAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    pages: {
        signIn: "/signin"
    },
    callbacks: {
        session: async ({ session, token = null }) => {
            // if it exists, which it doesn't. will replace later.
            if (token) {
                (session.user as any).id = token.id;
                session.user.email = token.email!;
                session.user.name = token.name;
            }

            return session;
        },
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
            }

            return token;
        }
    },
    providers
});

export const providerMap = providers.map(provider => {
    if (typeof provider === "function") {
        const providerData = provider();
        return { id: providerData.id, name: providerData.name };
    } else
        return { id: provider.id, name: provider.name };
});
