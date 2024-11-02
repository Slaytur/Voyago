<script lang="ts">
    import { signIn } from "@auth/sveltekit/client";

    import { Label } from "bits-ui";

    let email = "";
    let password = "";
</script>

<style>
    article {
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        padding: 10px;
        width: initial;
    }
</style>

<article>
    <div class="w-1/3 mx-auto mt-20 p-8 bg-secondary rounded-lg">
        <div>
            <img src="/favicon.png" alt="Voyago logo" class="mx-auto" />
            <h1 class="text-center text-3xl font-bold">Sign In</h1>
        </div>
        <form>
            <Label.Root for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</Label.Root>
            <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                bind:value={email}
                type="email"
                id="email"
                name="email"
                required
            />
            <br>
            <Label.Root for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</Label.Root>
            <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                bind:value={password}
                type="password"
                id="password"
                name="password"
                required
            />
            <br>

            <input
                on:click={() => signIn("signin", { email, password })}
                type="submit"
                id="submit"
                name="submit"
                value="Sign In"
                required
                class="inline-flex h-12 items-center justify-center rounded-input bg-dark
        px-[21px] text-[15px] font-semibold text-background shadow-mini
        hover:bg-dark/95 active:scale-98 active:transition-all
        bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        
            />
        </form>
    </div>
</article>
