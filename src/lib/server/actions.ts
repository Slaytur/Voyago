import { db } from "$lib/server/prisma";
import { signIn, signOut, hashPassword } from "../../auth";
import { AuthError } from "@auth/sveltekit";
import { compare } from "bcryptjs";

// export const logout = async (): Promise<any> => {
//     await signOut();
// };

export const getUsers = async (): Promise<any> => {
    const users = await db.user.findMany();

    let temp = {
        id: 0,
        email: "",
        name: ""
    };

    const result: Array<typeof temp> = [];
    for (let i = 1; i < users.length + 1; i++) {
        temp.id = i;
        temp.email = users[i - 1].email;
        temp.name = users[i - 1].name;
        result.push(temp);
        temp = {
            id: 0,
            email: "",
            name: ""
        };
    }

    return result;
};
// user method
export const changePassword = async (email: string, oldPassword: string, newPassword: string): Promise<void> => {
    if (
        !email
        || typeof email !== "string"
    ) throw new Error("Invalid Session");

    if (email === process.env.ADMIN_EMAIL) throw new Error("Restricted Access");

    const user = await db.user.findUnique({
        where: {
            email: email
        }
    });

    if (!compare(oldPassword, user?.password!)) throw new Error("Bad Old Password");

    const res = await db.user.update({
        where: {
            email: email
        },
        data: {
            password: await hashPassword(newPassword)
        }
    });

    if (!res) throw new Error("Something went wrong!");
};

// administrator methods

export const deleteUser = async (email: string): Promise<any> => {
    if (
        !email
        || typeof email !== "string"
    ) throw new Error("Invalid Credentials");

    const res = await db.user.delete({
        where: {
            email: email
        }
    });

    if (!res) throw new Error("Something went wrong");
    return res;
};

export const changeEmail = async (oldEmail: string, newEmail: string): Promise<string> => {
    if (
        !oldEmail
        || typeof oldEmail !== "string"
        || !newEmail
        || typeof newEmail !== "string"
    ) throw new Error("Invalid Credentials");

    const res = await db.user.update({
        where: { email: oldEmail },
        data: { email: newEmail }
    });

    if (!res) throw new Error("No email associated.");
    return "Success";
};

export const changeName = async (email: string, name: string): Promise<string> => {
    if (
        !email
        || typeof email !== "string"
        || !name
        || typeof name !== "string"
    ) throw new Error("Invalid Credentials");

    const res = await db.user.update({
        where: { email: email },
        data: { name: name }
    });

    if (!res) throw new Error("No email associated.");
    return "Success";
};
