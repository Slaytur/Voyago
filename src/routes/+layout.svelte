<script lang="ts">
    import { Toaster } from "svelte-french-toast";

    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import { MetaTags } from "svelte-meta-tags";

    import "../app.scss";
    import type { PageData } from "./$types";
    export let data: PageData;

    const User = {
        id: (data as any).user?.$id,
        name: (data as any).user?.name,
        email: (data as any).user?.email
    }
</script>

<MetaTags
    title="Voyago"
    titleTemplate="%s | Voyago"
    description="A canonical description of Voyago."
    openGraph={{
        url: "https://voyago.world",
        title: "Voyago",
        description: "A canonical description of Voyago.",
        images: [
            {
                url: "https://voyago.namikas.dev/favicon.png",
                width: 800,
                height: 600,
                alt: "The real image"
            },
            {
                url: "http://127.0.0.1:3000/favicon.png",
                width: 800,
                height: 600,
                alt: "The localhost image"
            }
        ],
        siteName: "Voyago"
    }}
    twitter={{
        cardType: "summary_large_image",
        title: "Voyago",
        description: "A canonical description of Voyago.",
        image: "https://voyago.namikas.dev/favicon.png",
        imageAlt: "The Twitter image"
    }}
/>

<div>
    <Header session={User} />
    <main>
        <Toaster position="top-center" />
        <slot />
        <hr>
    </main>
    <Footer />
</div>
