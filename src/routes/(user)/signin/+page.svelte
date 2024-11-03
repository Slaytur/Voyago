<script lang="ts">
    import Logo from "$lib/images/icon.svg";

    // TODO: FIX FORM SO IT DOESN'T REFRESH AND WAITS FOR REDIRECT
    let { data, form } = $props();
</script>

<article>
    <div class="card card-body tw-container tw-mt-20 tw-mb-5">
        <img src={Logo} alt="Voyago logo" class="tw-mt-5 tw-mx-auto tw-max-w-[100px] tw-w-1/4" />
        <h1 class="tw-text-5xl tw-font-bold tw-text-center tw-mt-5 tw-mb-10">Log In</h1>
        {#if form?.error}
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <span>{form.error}</span>
            </div>
        {/if}
        <form method="POST" action="?/signin">
            <div class="tw-mb-4">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="Email address" autocomplete="email" required />
            </div>
            <div class="tw-mb-4">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" placeholder="Enter password" autocomplete="new-password" required />
            </div>
            <input type="submit" value="Log In" class="btn tw-bg-accent tw-text-white hover:tw-bg-accentForeground hover:tw-text-white" />
        </form>
    </div>
</article>
