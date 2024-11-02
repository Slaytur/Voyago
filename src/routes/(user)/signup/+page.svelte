<script lang="ts">

</script>

<style>
    .login {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        justify-items: center;
        padding-top: 7vi;
    }
</style>

<section>
    <section class="login">
        <div>
            <form method="POST" action="?/signup" class="flex flex-col bg-white text-black font-bold rounded-lg space-y-8 p-10 text-lg items-start tracking-tight">
                <p class="text-3xl text-black">Register</p>
                <div class="flex flex-row justify-center items-center space-x-1">
                    <label class="flex flex-col items-start">
                        Name
                        <input name="name" id="name" type="text" placeholder="Charlie" class="flex border-3 border-[#42356b] rounded-lg p-1">
                    </label>
                    <!-- <label class="flex flex-col items-start">
                        Last Name
                        <input name="lname" type="text" placeholder="Doan" class="flex border-3 border-[#42356b] rounded-lg p-1">
                    </label> -->
                </div>
                <label class="flex flex-col items-start">
                    Email
                    <input name="email" id="email" type="email" placeholder="example@example.com" class="flex border-3 border-[#42356b] rounded-lg p-1">
                </label>
                <label class="flex flex-col items-start">
                    Password
                    <input name="password" id="password" type="password" placeholder="cd was here" class="flex border-3 border-[#42356b] rounded-lg p-1">
                </label>
                <button class="border-3 border-[#42356b] text-black font-bold rounded-full w-24">Register</button>
            </form>
            <a href="/signin">
                <p class="text-white text-sm underline">Already have an account? Sign in</p>
            </a>
        </div>
    </section>
</section>
