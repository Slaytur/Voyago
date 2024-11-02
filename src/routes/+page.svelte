<script lang="ts">
    import GradientText from "$lib/components/GradientText.svelte";
    import palace from "$lib/images/Palace-modified.png";
    import manchu from "$lib/images/Machu_Picchu_Peru-modified.png";
    import city from "$lib/images/unsplash_allwyway-modified.png";
    import pyramids from "$lib/images/pyramids-modified.png";
</script>

<section class="flex w-full h-screen flex-col">
    <div class="absolute mt-24 top-0 h-full bottom-0 left-0 right-0 -z-50 justify-center items-center" >
        <div class="w-1/2 right-0 absolute grid-cols-2 grid grid-rows-2">
            <img src={palace} alt="palace" class="w-[100%]" />
            <img src={manchu} alt="manchu peachu" class="w-[100%]" />
            <img src={city} alt="palace" class="w-[100%] " />
            <img src={pyramids} alt="pyramids" class="w-[100%] " />
        </div>

    </div>
    <div class="h-full flex flex-col w-1/3 ml-[15%] justify-center items-centerml-60">
        <div class="font-sourcesans font-bold text-[80px] leading-[80px] tracking-tight">Plan the next era of your
            <GradientText text="life" />
        </div>
        <p class="mt-8 leading-7 text text-[18px] font-bold font-sourcesans">Revolutionizing ease of travel to every part of the world.</p>
        <div class="mt-8 mb-12 bg-white text-black font-bold pt-1 pb-1.5 flex flex-col justify-center items-center px-4 rounded-full w-fit"> <a href='/signin'>Explore ></a></div>
    </div>
</section>
