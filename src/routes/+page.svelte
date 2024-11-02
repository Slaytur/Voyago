<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import ScrollingBar from "$lib/components/ScrollingBar.svelte";
  import GradientText from "$lib/components/GradientText.svelte";
</script>

<section class="flex bg-gradient-to-br from-[#252651] via-[#12162E] to-[#12162E] w-full flex-col">
    <div class="mt-4">
        <ScrollingBar/> 
    </div>
    <div class="w-[600px] h-full  mt-8 ml-60">
        <div class="font-sourcesans text-white font-bold text-[70px] leading-[80px] tracking-tight">Find your next dream
            <GradientText text="DESTINATION" />
            </div>
        <div class="mt-8 mb-12 bg-white text-black font-bold pt-1 pb-1.5 flex flex-col justify-center items-center px-4 rounded-full w-fit"> <a href='/mainpage'>Explore ></a></div>
    </div>
</section>
