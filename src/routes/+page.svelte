<script lang="ts">
    import GradientText from "$lib/components/GradientText.svelte";

    import palace from "$lib/images/Palace-modified.webp";
    import manchu from "$lib/images/Machu_Picchu_Peru-modified.webp";
    import city from "$lib/images/unsplash_allwyway-modified.webp";
    import pyramids from "$lib/images/pyramids-modified.webp";

    import SASELogo from "$lib/images/logos/SASE.webp";
    import LSULogo from "$lib/images/logos/LSU.webp";
    import DOWLogo from "$lib/images/logos/DOW.webp";
    import ChevronLogo from "$lib/images/logos/Chevron.webp";
    import ChickenWagonLogo from "$lib/images/logos/ChickenWagon.webp";

    import Itineraries from "$lib/images/itineraries.webp";
    import WorldMap from "$lib/images/world-map.webp";

    import DavidL from "$lib/images/davidL.webp";
    import EstherM from "$lib/images/estherM.webp";
    import AnnabelleH from "$lib/images/annabelleH.webp";

    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

    import { concurrent } from "svelte-typewriter";
    import type { PageData } from "./$types";

    export let data: PageData;

    const User = {
        id: (data as any).user?.$id,
        name: (data as any).user?.name,
        email: (data as any).user?.email
    }

</script>

<style>
    article section {
        padding-top: 16px;
    }
</style>

<article class="tw-py-10 tw-mx-auto tw-container tw-font-sourcesans">
    <!-- Landing -->
    <section class="row tw-mt-5">
        <div class="col-sm-6">
            <h1 class="tw-text-7xl tw-font-bold tw-max-w-[500px] tw-mt-10">
                <p use:concurrent={{ interval: 60 }}>Plan the next</p> <p use:concurrent={{ interval: 90 }}>era of your</p>
                <GradientText interval={210} text="adventure" />
            </h1>
            <div class="tw-text-lg tw-my-10">
                <p class="tw-mb-2 tw-flex">
                    <span><FontAwesomeIcon icon={faCircleArrowRight} /></span>
                    <span class="tw-ml-1">Revolutionizing <span class="tw-text-accent">ease of travel</span> to every part of the world.</span>
                </p>
                <p class="tw-mb-2 tw-flex">
                    <span><FontAwesomeIcon icon={faCircleArrowRight} /></span>
                    <span class="tw-ml-1">Unlock a <span class="tw-text-accent">world of experiences</span> that resonate with who you are.</span>
                </p>
                <p class="tw-flex">
                    <span><FontAwesomeIcon icon={faCircleArrowRight} /></span>
                    <span class="tw-ml-1">Embrace the richness of <span class="tw-text-accent">global diversity</span>.</span>
                </p>
            </div>
            <a href={User.id ? "/create" : "/signup"} class="btn btn-lg tw-w-1/3 tw-bg-accent tw-text-white hover:tw-bg-accentForeground hover:tw-text-white  tw-font-bold">
                Explore
            </a>
        </div>
        <div class="col-sm-6">
            <div class="tw-flex">
                <img src={palace} alt="Palace" class="tw-h-[256px] tw-w-[256px] tw-mr-2 tw-mb-2">
                <img src={manchu} alt="Macchu Picchu" class="tw-h-[256px] tw-w-[256px] tw-mr-2 tw-mb-2">
            </div>
            <div class="tw-flex">
                <img src={city} alt="City" class="tw-h-[256px] tw-w-[256px] tw-mr-2">
                <img src={pyramids} alt="Pyramids" class="tw-h-[256px] tw-w-[256px] tw-mr-2">
            </div>
        </div>
    </section>
    <div class="tw-my-20"></div>
    <section>
        <h2 class="tw-uppercase tw-font-bold tw-text-2xl">Featured on</h2>
        <div class="tw-flex tw-justify-center tw-p-5 tw-mt-4 tw-flex-col lg:!tw-flex-row md:tw-space-x-20 tw-bg-secondary tw-rounded-xl lg:tw-h-28">
            <img src={SASELogo} alt="SASE logo">
            <img src={LSULogo} alt="LSU logo">
            <img src={DOWLogo} alt="DOW logo">
            <img src={ChevronLogo} alt="Chevron logo">
            <img src={ChickenWagonLogo} alt="Chicken wagon logo">
        </div>
    </section>
    <div class="tw-my-20"></div>
    <section>
        <div class="row container">
            <div class="col-sm-1"></div>
            <div class="col-sm-5">
                <img src={Itineraries} alt="Pencil writing" class="tw-h-[450px]">
            </div>
            <div class="col-sm-6">
                <h2 class="tw-text-7xl tw-font-bold tw-mt-20">Itineraries Crafted Just For You</h2>
                <p class="tw-my-5 tw-text-primary">Experience expertly designed itineraries that blend your unique preferences with local insights, ensuring every moment of your journey is unforgettable.</p>
                <a href="/create" class="btn btn-lg tw-w-1/3 tw-bg-accent tw-text-white hover:tw-bg-accentForeground hover:tw-text-white tw-font-bold">Build Experience</a>
            </div>
        </div>
    </section>
    <div class="tw-my-20"></div>
    <section class="row">
        <div class="col">
            <h2 class="tw-text-7xl tw-font-bold tw-mt-20">Unbeatable Value</h2>
            <p class="tw-my-5 tw-text-primary">Discover incredible adventures without breaking the bank -- our pricing makes dream travel accessible to everyone.</p>
            <a href="/pricing" class="btn btn-lg tw-w-1/3 tw-bg-accent tw-text-white hover:tw-bg-accentForeground hover:tw-text-white tw-font-bold">View Pricing</a>
        </div>
        <div class="col">
            <img src={WorldMap} alt="World map" class="tw-h-[350px]">
        </div>
    </section>
    <div class="tw-my-20"></div>
    <section>
        <h2 class="tw-uppercase tw-font-bold tw-text-xl tw-text-primary tw-text-center tw-mt-10">Testimonials</h2>
        <h3 class="tw-text-7xl tw-font-bold tw-text-center">Read What Others Have To Say</h3>
        <div class="tw-flex tw-mt-10 tw-mx-auto tw-container tw-flex-col md:tw-flex-row tw-space-x-2 tw-max-w-4xl tw-justify-center">
            <div class="card tw-border-secondary tw-border-4 tw-rounded-[10px] tw-w-[235px]">
                <div class="card-img-top tw-h-[227px]">
                    <img src={DavidL} alt="David L profile" class="card-img-top">
                </div>
                <div class="card-body tw-z-10 tw-bg-white tw-rounded-b-2xl">
                    <h5 class="card-title tw-font-bold">David L.</h5>
                    <p class="card-text">"Voyago turned my long-time travel dreams into a reality! I finally experienced Italy the way I always imagined, and the whole process was seamless! I can't believe how easy and affordable it was—my life truly feels richer thanks to this trip!"</p>
                </div>
            </div>
            <div class="card tw-border-secondary tw-border-4 tw-rounded-[10px] tw-w-[235px]">
                <div class="card-img-top tw-h-[227px]">
                    <img src={EstherM} alt="Esther M profile" class="card-img-top">
                </div>
                <div class="card-body tw-z-10 tw-bg-white tw-rounded-b-2xl">
                    <h5 class="card-title tw-font-bold">Esther M.</h5>
                    <p class="card-text">"I always thought traveling to Japan would be overwhelming and out of reach, but Voyago made it unbelievably simple! Their AI-driven recommendations hit the mark every time, and I was able to immerse myself in experiences I never would've found on my own."</p>
                </div>
            </div>
            <div class="card tw-border-secondary tw-border-4 tw-rounded-[10px] tw-w-[235px]">
                <div class="card-img-top tw-h-[227px]">
                    <img src={AnnabelleH} alt="Annabelle H profile" class="card-img-top">
                </div>
                <div class="card-body tw-z-10 tw-bg-white tw-rounded-b-2xl">
                    <h5 class="card-title tw-font-bold">Annabelle H.</h5>
                    <p class="card-text">"Voyago helped me plan the trip of a lifetime to South America. I didn't have to stress about the details; Voyago handled everything, even down to packing tips and what to expect at each spot. It's so intuitive to use, and the pricing was shockingly affordable. Thank you, Voyago!"</p>
                </div>
            </div>
        </div>
    </section>
    <div class="tw-my-10"></div>
    <section>
        <div class="container">
            <div class=" lg:tw-w-1/3 tw-mx-auto  tw-px-8 tw-py-4 tw-text-black tw-text-center tw-rounded-3xl">
                <p class="tw-uppercase">Are you ready?</p>
                <div class="tw-container tw-my-4">
                    <h3 class="tw-font-bold tw-text-4xl">Be A Part of the Next Big Thing</h3>
                </div>
                <a href="/create" class="btn btn-lg tw-w-2/3 tw-bg-accent tw-text-white hover:tw-bg-accentForeground hover:tw-text-white tw-font-bold">Get Started</a>
            </div>
        </div>
    </section>
    <div class="tw-mb-5"></div>
</article>
