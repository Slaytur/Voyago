<script lang="ts">
    import Logo from "$lib/images/icon.svg";
    import { browser } from "$app/environment";

    export let session: any;

    if (browser)
        import("bootstrap");
</script>

<header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand tw-font-chewy" href="/">
                <img src={Logo} alt="Voyago logo" width="30" height="24" class="d-inline-block align-text-top hover:tw-rotate-90 tw-transition-all">
                Voyago
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto tw-font-medium">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/create">Create</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/pricing">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/feedback">Feedback</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto tw-font-medium tw-mr-4">
                    <li class="nav-item tw-me-2" hidden={session.id}>
                        <a href="/signup" class="btn tw-bg-accent tw-text-white hover:tw-bg-accentForeground hover:tw-text-white">Sign Up</a>
                    </li>
                    <li class="nav-item" hidden={session.id}>
                        <a href="/login" class="btn tw-bg-accent tw-text-white hover:tw-bg-accentForeground hover:tw-text-white">Sign In</a>
                    </li>
                    <li class="nav-item" hidden={!session.id}>
                        <a href="/account" class="btn tw-bg-accent tw-text-white hover:tw-bg-accentForeground hover:tw-text-white tw-tracking-wide">Account</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
