<script>
    import { Toaster } from "svelte-french-toast";

    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import "../app.css";
</script>

<div class="bg-gradient-to-br from-[#252651] via-[#12162E] to-[#12162E] max-h-screen h-screen">
    <Header />

    <Toaster position="top-center" />

    <main>
        <slot />
    </main>

    <Footer />
</div>
