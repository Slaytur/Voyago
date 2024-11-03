<script lang="ts">
    import { concurrent } from "svelte-typewriter";
    import { page } from "$app/stores";
</script>

<section class="flex max-h-screen h-screen flex-col justify-center items-center font-sourcesans">
    <p class="text-[60px]">Sorry!</p>
    <p use:concurrent={{ interval: 120 }} class="font-bold text-[50px]">
        Error {$page.status}: {$page.error?.message}
    </p>
    <!-- <p use:concurrent={{ interval: 60 }} class="font-bold text-[50px]">
        Sorry, the page you've requested has produced error: {$page.status}
    </p> -->    

</section>
