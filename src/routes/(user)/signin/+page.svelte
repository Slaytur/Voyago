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
    <section class="login">

        <div>
            <form method="POST" class="flex flex-col bg-white text-black font-bold rounded-lg space-y-8 p-10 text-lg items-start tracking-tight">
                <p class="text-3xl text-black tracking-tight">Login</p>
                <label class="flex flex-col items-start">
                    Email
                    <input name="email" type="email" placeholder="example@example.com" class="flex border-3 border-[#42356b] rounded-lg p-1">
                </label>
                <label class="flex flex-col items-start">
                    Password
                    <input name="password" type="password" placeholder="cd was here" class="flex border-3 border-[#42356b] rounded-lg p-1">
                </label>
                <button class="border-3 border-[#42356b] text-black font-bold px-2 rounded-full ">Sign in</button>
            </form>
            <a href="/register">
                <p class="text-white text-sm underline py-2">Don't have an account? Register </p>
            </a>
        </div>
    </section>
</section>
