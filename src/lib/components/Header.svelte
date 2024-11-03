<script lang="ts">
    import Logo from "../images/icon.svg";
    import { browser } from "$app/environment";

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
                <ul class="navbar-nav ms-auto tw-font-medium">
                    <li class="nav-item tw-me-2">
                        <a href="/signup" class="btn tw-bg-primary tw-text-white hover:tw-bg-primaryForeground hover:tw-text-white">Sign Up</a>
                    </li>
                    <li class="nav-item">
                        <a href="/signin" class="btn tw-bg-primary tw-text-white hover:tw-bg-primaryForeground hover:tw-text-white">Sign In</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
