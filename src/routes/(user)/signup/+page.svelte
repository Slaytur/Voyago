<script lang="ts">
    import { Button, Label } from "bits-ui";

    let fname = "",
        lname = "",
        email = "",
        password = "",
        cfpassword = "";
</script>

<article class="py-20">
    <div class="w-1/3 mx-auto p-8 bg-secondary rounded-lg">
        <div>
            <img src="/favicon.png" alt="Voyago logo" class="mx-auto" />
            <h1 class="text-center text-3xl font-bold">Register</h1>
        </div>
        <br>
        <form method="POST" action="?/signup">
            <div class="grid gap-6 md:grid-cols-2">
                <div>
                    <Label.Root for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</Label.Root>
                    <input
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        bind:value={fname}
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="Charlie"
                        required
                    />
                </div>
                <div>
                    <Label.Root for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</Label.Root>
                    <input
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        bind:value={lname}
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Doan"
                        required
                    />
                </div>
            </div>
            <br>

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

            <Label.Root for="confpassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</Label.Root>
            <input
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                bind:value={cfpassword}
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
            />
            <br>

            <Button.Root class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</Button.Root>
        </form>
    </div>
</article>
