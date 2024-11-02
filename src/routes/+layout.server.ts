<<<<<<< Updated upstream
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async event => {
    const session = await event.locals.auth();

    return {
        session
    };
};
=======
// import type { LayoutServerLoad } from "./$types";

// export const load: LayoutServerLoad = async event => {
//     const session = await event.locals.auth();

//     return {
//         session
//     };
// };
>>>>>>> Stashed changes
