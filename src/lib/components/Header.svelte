<script lang="ts">
    import Logo from "../images/icon.svg";
// import { page } from "$app/stores";
// import { flyAndScale } from "$lib/utils/transitions";

// import { Label, Menubar, Switch } from "bits-ui";
// import { ArrowRight as CaretRight, Cat, Check, SwitchCameraIcon as SwitchOff, SwitchCameraIcon as SwitchOn } from "lucide-svelte";
// import { onMount } from "svelte";

// import Icon from "./Icon.svelte";

// let pathname = $page.route.id;
// let theme = "light";
// let checked = false;

// onMount(() => {
//     if (typeof localStorage !== "undefined") {
//         theme = localStorage.getItem("theme") || "light";
//         checked = theme === "dark";
//         document.documentElement.classList.toggle("dark", theme === "dark");
//     }
// });

// function toggleTheme () {
//     theme = theme === "light" ? "dark" : "light";
//     checked = !checked;

//     if (typeof document !== "undefined")
//         document.documentElement.classList.toggle("dark", theme === "dark");

//     if (typeof localStorage !== "undefined")
//         localStorage.setItem("theme", theme);
// }

// let bookmarks = false;
// let fullUrls = true;
// let pixelGrid = true;
// let layoutGrid = false;
// let view = "table";
// let profile = "pavel";

    import { browser } from "$app/environment";

    if (browser) {
        import("bootstrap");
    }
</script>

<header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src={Logo} alt="Voyago logo" width="30" height="24" class="d-inline-block align-text-top">
                Voyago
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/create">Create</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/pricing">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

<!--
<Menubar.Root class="flex w-full fixed bg-white h-14 items-center gap-1 rounded-10px border border-dark-10 bg-background-alt px-[3px] shadow-mini">
<div class="px-2.5">
<a href="/" class="flex">
<Icon classes="size-6" />
<p class="tracking-wide font-chewy ml-2.5">Voyago</p>
</a>
</div>
<Menubar.Menu>
<Menubar.Trigger class="inline-flex h-10 cursor-default items-center justify-center rounded-9px px-3 text-base font-medium !ring-0 !ring-transparent data-[highlighted]:bg-muted data-[state=open]:bg-muted">
<a href="/dashboard">Itineraries</a>
</Menubar.Trigger>
</Menubar.Menu>
<Menubar.Menu>
<Menubar.Trigger class="inline-flex h-10 cursor-default items-center justify-center rounded-9px px-3 text-base font-medium !ring-0 !ring-transparent data-[highlighted]:bg-muted data-[state=open]:bg-muted">
<a href="/services">Services</a>
</Menubar.Trigger>
</Menubar.Menu>
<Menubar.Menu>
<Menubar.Trigger class="inline-flex h-10 cursor-default items-center justify-center rounded-9px px-3 text-base font-medium !ring-0 !ring-transparent data-[highlighted]:bg-muted data-[state=open]:bg-muted">
<a href="/pricing">Pricing</a>
</Menubar.Trigger>
</Menubar.Menu>
<Menubar.Menu>
<Menubar.Trigger class="inline-flex h-10 cursor-default items-center justify-center rounded-9px px-3 text-base font-medium !ring-0 !ring-transparent data-[highlighted]:bg-muted data-[state=open]:bg-muted">
<a href="/about">About</a>
</Menubar.Trigger>
</Menubar.Menu>
</Menubar.Root> -->
