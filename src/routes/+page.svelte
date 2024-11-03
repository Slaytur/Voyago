<script lang="ts">
    import GradientText from "$lib/components/GradientText.svelte";
    import palace from "$lib/images/Palace-modified.png";
    import manchu from "$lib/images/Machu_Picchu_Peru-modified.png";
    import city from "$lib/images/unsplash_allwyway-modified.png";
    import pyramids from "$lib/images/pyramids-modified.png";
    import { Button } from "bits-ui";
    import { concurrent } from "svelte-typewriter";

</script>

<section class="flex w-full h-screen pt-14 px-4 flex-col">
    <div class="absolute pt-24 mr-10 top-0 h-full bottom-0 left-0 right-0 -z-50 justify-center items-center" >

    </div>
    <div class="w-1/2 h-full pt-24 pb-10 pr-10 bottom-0 -z-50 top-0 right-0 absolute grid-cols-2 gap-4 grid grid-rows-2">
        <img src={palace} alt="palace" class="h-[100%] " />
        <img src={manchu} alt="manchu peachu" class="h-[100%]" />
        <img src={city} alt="palace" class="h-full aspect-square " />
        <img src={pyramids} alt="pyramids" class="h-[100%]" />
    </div>
    <div class="h-full flex flex-col w-[500px] ml-[15%] justify-center items-center">
        <div class="font-sourcesans font-black text-[80px] leading-[80px] tracking-tight">
            <p use:concurrent={{ interval: 60 }}>Plan the next </p> <p use:concurrent={{ interval: 90 }}>era of your</p>
            <div class="text-[90px]">
                <GradientText interval={210} text="life" />
            </div>
        </div>
        <p class="mt-20 leading-7 text text-[18px] font-sourcesans">&rarr; Revolutionizing ease of travel to every part of the world.</p>
        <p class="leading-7 text text-[18px] font-sourcesans">&rarr; something something something.</p>
        <p class="leading-7 text text-[18px] font-sourcesans">&rarr; something something something.</p>

            <Button.Root href='/signin'
            class="inline-flex h-12 items-center justify-center rounded-input bg-dark
	px-[21px] text-[15px] font-semibold text-background shadow-mini
	hover:bg-dark/95 active:scale-98 active:transition-al"
            >
            Explore
        </Button.Root>
    </div>
</section>
