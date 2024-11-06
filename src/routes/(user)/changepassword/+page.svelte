<script lang="ts">
    import Logo from "$lib/images/icon.svg";

    // TODO: FIX FORM SO IT DOESN'T REFRESH AND WAITS FOR REDIRECT
    let { data, form } = $props();
</script>

<article>
    <div class="card card-body tw-container tw-mt-20 tw-mb-5">
        <img src={Logo} alt="Voyago logo" class="tw-mt-5 tw-mx-auto tw-max-w-[100px] tw-w-1/4" />
        <h1 class="tw-text-5xl tw-font-bold tw-text-center tw-mt-5 tw-mb-10">Change Password</h1>
        {#if form?.error}
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <span>{form.error}</span>
            </div>
        {/if}
        <form method="POST" action="?/changepassword">
            <div class="tw-mb-4">
                <label for="email" class="form-label">Old Password</label>
                <input type="password" name="old" id="old" class="form-control" placeholder="Old password" autocomplete="new-password" required />
            </div>
            <div class="tw-mb-4">
                <label for="password" class="form-label">New Password</label>
                <input type="password" class="form-control" name="new" id="new" placeholder="New password" autocomplete="new-password" required />
            </div>
            <input type="submit" value="Change Password" class="btn tw-bg-accent tw-text-white hover:tw-bg-accentForeground hover:tw-text-white" />
        </form>
    </div>
</article>
