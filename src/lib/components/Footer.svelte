<script lang="ts">
    import GitHub from "$lib/images/github.svg";
    // import Discord from "$lib/images/discord.svg";
</script>

<!-- 
<style>
    .nav.flex-column a {
            
    }
</style> -->

<footer>
    <div class="tw-mt-5 container">
        <div class="row">
            <div class="col-6 col-md-2 mb-3">
                <h5 class="tw-text-[1.25rem] tw-font-medium">Info</h5>
                <ul class="nav flex-column">
                    <a href="/itineraries">Itineraries</a>
                    <a href="/pricing">Pricing</a>
                    <a href="/services">Services</a>
                </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
                <h5 class="tw-text-[1.25rem] tw-font-medium">About</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="/about" class="nav-link p-0 text-body-secondary">About</a></li>
                </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
                <h5>Legal</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="/terms_of_service" class="nav-link p-0 text-body-secondary">Terms of Service</a></li>
                    <li class="nav-item mb-2"><a href="/privacy_policy" class="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
                </ul>
            </div>

            <div class="col-md-5 offset-md-1 mb-3">
                <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of what&apos;s new and exciting from us.</p>
                    <div class="tw-flex tw-flex-column flex-sm-row w-100 gap-2">
                        <label for="newsletter1" class="visually-hidden">Email address</label>
                        <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                        <button class="btn btn-darken btn-green" type="button">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2024 Voyago, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
                <li class="ms-3"><a class="link-body-emphasis footer-darken" href="https://github.com/Slaytur/Voyago" target="_blank" rel="noreferrer" aria-label="GitHub button"><img src={GitHub} alt="GitHub logo" class="tw-h-[24px]" /></a></li>
            </ul>
        </div>
    </div>
</footer>

<!-- 
<div class="foot">
    <footer class="foot flex flex-row justify-between items-start h-16 bg-white rounded px-16 text-[14px] py-2">
        <div class="flex flex-col justify-start">
            <h1 class="font-bold">Products & Pricing</h1>
            <div class="flex flex-col text-[12px]">
                <a href="/itineraries">Itineraries</a>
                <a href="/pricing">Pricing</a>
                <a href="/services">Services</a>
            </div>
        </div>
        <div class="flex flex-col justify-center text-[14px]">
            <h1 class="font-bold">About</h1>
            <div class="flex flex-col text-[12px]">
                <a href="/about">About</a>
            </div>
        </div>
        <div class="flex flex-col justify-center text-[14px]">
            <h1 class="font-bold">Privacy</h1>
            <div class="flex flex-col text-[12px]">
                <a href="https://www.saselsu.org">Privacy Statement</a>
            </div>
        </div>
    </footer>
</div> -->
