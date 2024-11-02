<script>
    import { Toaster } from "svelte-french-toast";

    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import "../app.css";
</script>

<div class="bg-gradient-to-br from-[#252651] via-[#12162E] to-[#12162E] max-h-screen h-screen">
    <Header />

      <header class="h-16 font-sourcesans pt-1 text-white font-bold space-x-10 flex flex-row justify-center items-center w-full">
          <a href="/">
              <p class="text-3xl tracking-tight">Voyago</p>
          </a>
          <a href="/mainpage">
              <div class="text-white font-bold pt-1 pb-1.5 flex flex-col justify-center items-center px-4 rounded-full w-fit">
                  <p>Explore></p>
              </div>
          </a>
          <div class="px-28"></div>
          <a href="/signin">
              <div class="bg-white text-black font-bold pt-1 pb-1.5 flex flex-col justify-center items-center px-4 rounded-full w-fit">
                  <p>Sign in ></p>
              </div>
          </a>
      </header>
    <Toaster position="top-center" />

    <main>
        <slot />
    </main>

    <Footer />
</div>
