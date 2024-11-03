<script lang="ts">
    import Personal from "$lib/images/personal.png";
    import Pro from "$lib/images/pro.png";
    import Team from "$lib/images/team.png";
    import Enterprise from "$lib/images/enterprise.png";
</script>

<article class="">
    <h1 class="tw-text-7xl tw-font-bold tw-text-center tw-mt-20 tw-mb-5">World-class <span class="tw-text-accent">adventures</span> within reach</h1>
    <h2 class="tw-text-3xl tw-font-bold tw-text-center tw-text-primary">Transparent pricing that fits your budget</h2>
    <div class="row row-cols-1 row-cols-md-4 tw-text-center tw-mt-20 container tw-mx-auto">
        <div class="col">
            <div class="card card-body tw-mb-4 tw-rounded-[3px] tw-shadow-sm">
                <img src={Personal} alt="" class="tw-mx-auto">
                <h3 class="tw-text-2xl tw-text-primary tw-uppercase">Starter</h3>
                <h3 class="card-title tw-text-4xl tw-font-bold">$0</h3>
                <span class="tw-text-2xl tw-text-primary">1 itinerary</span>
                <hr class="tw-my-4">
                <ul class="tw-list-none">
                    <li>Your first itinerary is free!</li>
                    <li>You're going to love it.</li>
                </ul>
                <hr class="tw-my-4">
                <button class="btn tw-bg-secondary tw-text-white tw-font-semibold">Sign Up</button>
            </div>
        </div>
        <div class="col">
            <div class="card card-body tw-mb-4 tw-rounded-[3px] tw-shadow-sm">
                <img src={Pro} alt="" class="tw-mx-auto">
                <h3 class="tw-text-2xl tw-text-primary tw-uppercase">Explorer</h3>
                <h3 class="card-title tw-text-4xl tw-font-bold">$5</h3>
                <span class="tw-text-2xl tw-text-primary">10 itineraries</span>
                <hr class="tw-my-4">
                <ul class="tw-list-none">
                    <li>For the curious traveler, dipping their toes in adventure.</li>
                </ul>
                <hr class="tw-my-4">
                <button class="btn tw-bg-secondary tw-text-white tw-font-semibold">Get Started</button>
            </div>
        </div>
        <div class="col">
            <div class="card card-body tw-mb-4 tw-rounded-[3px] tw-shadow-sm">
                <img src={Team} alt="" class="tw-mx-auto">
                <h3 class="tw-text-2xl tw-text-primary tw-uppercase">Voyager</h3>
                <h3 class="card-title tw-text-4xl tw-font-bold">$15</h3>
                <span class="tw-text-2xl tw-text-primary">30 itineraries</span>
                <hr class="tw-my-4">
                <ul class="tw-list-none">
                    <li>For the avid explorer, ready to roam further.</li>
                </ul>
                <hr class="tw-my-4">
                <button class="btn tw-bg-secondary tw-text-white tw-font-semibold">Get Started</button>
            </div>
        </div>
        <div class="col">
            <div class="card card-body tw-mb-4 tw-rounded-[3px] tw-shadow-sm tw-border-accent">
                <img src={Enterprise} alt="" class="tw-mx-auto">
                <h3 class="tw-text-2xl tw-text-primary tw-uppercase">Veteran</h3>
                <h3 class="card-title tw-text-4xl tw-font-bold">$25</h3>
                <span class="tw-text-2xl tw-text-primary">60 itineraries</span>
                <hr class="tw-my-4">
                <ul class="tw-list-none">
                    <li>For the seasoned adventurer, conquering every corner of the map.</li>
                </ul>
                <hr class="tw-my-4">
                <button class="btn tw-bg-accent tw-text-white tw-font-semibold">Get Started</button>
            </div>
        </div>
    </div>
</article>
