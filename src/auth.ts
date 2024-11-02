import { SvelteKitAuth } from "@auth/sveltekit"
import Credentials from "@auth/sveltekit/providers/credentials";
import { db } from "$lib/server/prisma";
import { Argon2id } from "oslo/password";
import { PrismaAdapter } from "@auth/prisma-adapter"

export const hashPassword = (password: string): Promise<string> => new Argon2id().hash(password);

export const { signIn, signOut, handle } = SvelteKitAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
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
    providers: [
        Credentials({
            id: "user",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            authorize: async credentials => {
                if (typeof credentials?.email !== "string" || typeof credentials?.password !== "string") return null;

                const user = await db.user.findUnique({ where: { email: credentials.email } });
                if (user === null) return null;

                /**
                 * @note Password is base64-encoded before sending to server.
                 */
                const hashMatch = await new Argon2id().verify(credentials.password, user.password);
                if (!hashMatch) throw new Error("The credentials provided do not exist.");

                return user;
            }
        })
    ]
})