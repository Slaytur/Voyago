<script lang="ts">

</script>

<style>
    .login {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        justify-items: center;
        padding-top: 13vi;
    }
</style>

<section>
    <header class="h-16 font-sourcesans pt-1 text-white font-bold space-x-10 flex flex-row justify-center items-center w-full">
        <a href="/">
            <p class="text-3xl tracking-tight">stripe</p>
        </a>
        <p>Products</p>
        <p>Solutions</p>
        <p>Developers</p>
        <p>Resources</p>
        <p>Pricing</p>
        <div class="px-28"></div>

        <div><p>Contact Sales ></p></div>
        <a href="/register">
            <div class="bg-white text-black font-bold pt-1 pb-1.5 flex flex-col justify-center items-center px-4 rounded-full w-fit">
                <p> Register ></p>
            </div>
        </a>
    </header>

    <section class="login">

        <div>
            <form method="POST" class="flex flex-col bg-white text-black font-bold rounded-lg space-y-8 p-10 text-lg items-start tracking-tight">
                <p class="text-3xl text-black tracking-tight">Login</p>
                <label class="flex flex-col items-start">
                    Email
                    <input name="email" type="email" placeholder="example@example.com" class="flex border-4 border-[#6578e0] rounded-lg p-1">
                </label>
                <label class="flex flex-col items-start">
                    Password
                    <input name="password" type="password" placeholder="cd was here" class="flex border-4 border-[#6578e0] rounded-lg p-1">
                </label>
                <button class="border-4 border-[#6578e0] text-black font-bold rounded-full w-24">Sign in</button>
            </form>
            <a href="/register">
                <p class="text-white text-sm underline py-2">Don't have an account? Register ></p>
            </a>
        </div>
    </section>
</section>
