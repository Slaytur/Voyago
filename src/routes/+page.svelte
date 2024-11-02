<script lang="ts">
    import ScrollingBar from "$lib/components/ScrollingBar.svelte";
    import GradientText from "$lib/components/GradientText.svelte";
</script>

<section class="flex bg-gradient-to-br from-[#252651] via-[#12162E] to-[#12162E] w-full flex-col">
    <div class="mt-4">
        <ScrollingBar/>
    </div>
    <div class="w-[500px] h-full  mt-8 ml-60">
        <div class="font-sourcesans text-white font-bold text-[80px] leading-[80px] tracking-tight">Plan the next era of your 
            <GradientText text="life" />
        </div>
        <p class="mt-8 leading-7 text-white text text-[18px] font-bold font-sourcesans">Revolutionizing ease of travel to every part of the world.</p>
        <div class="mt-8 mb-12 bg-white text-black font-bold pt-1 pb-1.5 flex flex-col justify-center items-center px-4 rounded-full w-fit"> <a href='/signin'>Explore ></a></div>
    </div>
</section>
