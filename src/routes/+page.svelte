<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import ScrollingBar from "$lib/components/ScrollingBar.svelte";
  import GradientText from "$lib/components/GradientText.svelte";
</script>

<section class="flex bg-gradient-to-br from-[#252651] via-[#12162E] to-[#12162E] w-full flex-col">
    <header class="h-16 font-sourcesans pt-1 text-white font-bold space-x-10 flex flex-row justify-center items-center w-full">
        <a href="/">
            <p class="text-3xl tracking-tight">stripe</p>
        </a>
        <p>Products</p>
        <p>Solutions</p>
        <p>Developers</p>
        <p>Resources</p>
        <p>Pricing</p>
        <div class="px-28"></div>

        <div><p>Contact Sales ></p></div>
        <a href="/signin">
            <div class="bg-white text-black font-bold pt-1 pb-1.5 flex flex-col justify-center items-center px-4 rounded-full w-fit">
                <p>Sign in ></p>
            </div>
        </a>
    </header>
    <div class="mt-4">
        <ScrollingBar/> 
    </div>
    <div class="w-[530px] h-full  mt-8 ml-60">
        <div class="font-sourcesans text-white font-bold text-[80px] leading-[80px] tracking-tight">Build the next era of your
            <GradientText text="enterprise" />
            </div>
        <p class="mt-8 leading-7 text-white text text-[18px]">Leading enterprises use Stripe to revolutionize their business—from Amazon's rapid expansion into global markets to BMW's reimagination of the customer experience.</p>
        <div class="mt-8 mb-12 bg-white text-black font-bold pt-1 pb-1.5 flex flex-col justify-center items-center px-4 rounded-full w-fit"> <p>Contact sales ></p></div>
    </div>
</section>
