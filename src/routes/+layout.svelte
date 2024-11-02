<script>
    import { Toaster } from "svelte-french-toast";

    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import "../app.css";
</script>

<div class="min-h-screen">
    <Header />

    <Toaster position="top-center" />

    <main>
        <slot />
    </main>

    <Footer />
</div>
