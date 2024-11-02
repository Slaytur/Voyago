<script lang="ts">
    import { signIn } from "@auth/sveltekit/client";

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
    <h2>
        <img src="/favicon.png" alt="Voyago logo" />
        <span>Voyago</span>
    </h2>
    <form>
        <label for="email">Email</label>
        <label for="password">Password</label>
        <input
            bind:value={email}
            type="email"
            id="email"
            name="email"
            required
        />
        <input
            bind:value={password}
            type="password"
            id="password"
            name="password"
            required
        />

        <input
            on:click={() => signIn("signin", { email, password })}
            type="submit"
            id="submit"
            name="submit"
            value="Sign In"
            required
        />
    </form>
</article>
