<script lang="ts">
    import Logo from "$lib/images/icon.svg";

    // TODO: FIX FORM SO IT DOESN'T REFRESH AND WAITS FOR REDIRECT
    let { data, form } = $props();
</script>

<article>
    <div class="card card-body tw-container tw-mt-20 tw-mb-5">
        <img src={Logo} alt="Voyago logo" class="tw-mt-5 tw-mx-auto tw-max-w-[100px] tw-w-1/4" />
        <h1 class="tw-text-5xl tw-font-bold tw-text-center tw-mt-5 tw-mb-10">Register</h1>
        {#if form?.error}
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <span>{form.error}</span>
            </div>
        {/if}
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
                <input type="email" name="email" class="form-control" placeholder="Email address" autocomplete="email" required />
            </div>
            <div class="row g-2 tw-mb-4">
                <div class="col-md-6">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" placeholder="Enter password" autocomplete="new-password" required />
                </div>
                <div class="col-md-6">
                    <label for="password" class="form-label">Confirm Password</label>
                    <input type="password" name="cfpassword" class="form-control" placeholder="Confirm password" autocomplete="new-password" required />
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
