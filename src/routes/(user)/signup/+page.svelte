<script lang="ts">
    import Logo from "$lib/images/icon.svg";

    let { data, form } = $props();

    const formFeedback: { state: "initial" | "success" | "error", message: string | undefined } = {
        state: "initial",
        message: undefined
    };
</script>

<article>
    <div class="card card-body tw-container tw-mt-20 tw-mb-5">
        <img src={Logo} alt="Voyago logo" class="tw-mt-5 tw-mx-auto tw-max-w-[100px] tw-w-1/4" />
        <h1 class="tw-text-5xl tw-font-bold tw-text-center tw-mt-5 tw-mb-10">Register</h1>

        <form method="POST" action="?/signup">
            <div class="row g-2 tw-mb-4">
                <div class="col">
                    <label for="fname" class="form-label">First Name</label>
                    <input name="fname" type="text" class="form-control" placeholder="First name" aria-label="First Name" autocomplete="given-name" required>
                </div>
                <div class="col">
                    <label for="lname" class="form-label">Last Name</label>
                    <input name="lname" type="text" class="form-control" placeholder="Last name" aria-label="Last Name" autocomplete="family-name" required />
                </div>
            </div>
            <div class="tw-mb-4">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="Email address" autocomplete="email" required />
            </div>
            <div class="row g-2 tw-mb-4">
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" placeholder="Enter password" autocomplete="new-password" required />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" placeholder="Confirm password" autocomplete="new-password" required />
                </div>
            </div>
            <div class="tw-mb-4 form-check form-text">
                <input type="checkbox" class="form-check-input" id="agree-terms" name="agree-terms" required />
                <label for="agree-terms" class="form-check-label">By creating an account, I agree to the terms and conditions.</label>
            </div>
            <input type="submit" value="Sign Up" class="btn tw-bg-accent tw-text-white hover:tw-bg-accentForeground hover:tw-text-white" />
        </form>
    </div>
</article>

<!-- <article class="py-20">
    <div class="w-1/3 mx-auto p-8 bg-secondary rounded-lg">
        <div>
            <img src="/favicon.png" alt="Voyago logo" class="mx-auto" />
            <h1 class="text-center text-3xl font-bold">Register</h1>
        </div>
        <br>
        <form method="POST" action="?/signup" on:submit|preventDefault={submit}>
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
            <div class="flex items-center space-x-1 mt-4">
                <Checkbox.Root
                    id="terms"
                    aria-labelledby="terms-label"
                    class="peer inline-flex size-[20px] items-center justify-center rounded-md border border-muted bg-foreground transition-all duration-150 ease-in-out active:scale-98 data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-background data-[state=unchecked]:hover:border-dark-40"
                    checked={false}
                >
                    <Checkbox.Indicator
                        let:isChecked
                        let:isIndeterminate
                        class="inline-flex items-center justify-center text-background"
                    >
                        {#if isChecked}
                            <Check class="size-[10px]" />
                        {/if}
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <Label.Root
                    id="terms-label"
                    for="terms"
                    class="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Accept terms and conditions
                </Label.Root>
            </div>
            <br>
            <Button.Root class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</Button.Root>
        </form>
    </div>
</article> -->
