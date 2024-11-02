<script>
    import { Toaster } from "svelte-french-toast";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import "../app.css";
</script>

<div class="min-h-screen">
    <main>
        <Header />
        <Toaster position="top-center" />
        <slot />
        <Footer />
    </main>
</div>
