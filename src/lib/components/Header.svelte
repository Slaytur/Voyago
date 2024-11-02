<script>
    import { page } from "$app/stores";
    import { flyAndScale } from "$lib/utils/transitions";

    import { Label, Menubar, Switch } from "bits-ui";
    import { ArrowRight as CaretRight, Cat, Check, SwitchCameraIcon as SwitchOff, SwitchCameraIcon as SwitchOn } from "lucide-svelte";
    import { onMount } from "svelte";

    import Icon from "./Icon.svelte";

    let pathname = $page.route.id;
    let theme = "light";
    let checked = false;

    onMount(() => {
        if (typeof localStorage !== "undefined") {
            theme = localStorage.getItem("theme") || "light";
            checked = theme === "dark";
            document.documentElement.classList.toggle("dark", theme === "dark");
        }
    });

    function toggleTheme () {
        theme = theme === "light" ? "dark" : "light";
        checked = !checked;

        if (typeof document !== "undefined")
            document.documentElement.classList.toggle("dark", theme === "dark");

        if (typeof localStorage !== "undefined")
            localStorage.setItem("theme", theme);
    }

    let bookmarks = false;
    let fullUrls = true;
    let pixelGrid = true;
    let layoutGrid = false;
    let view = "table";
    let profile = "pavel";
</script>

<Menubar.Root class="flex w-full fixed bg-white h-14 items-center gap-1 rounded-10px border border-dark-10 bg-background-alt px-[3px] shadow-mini">
    <div class="px-2.5">
        <a href="/" class="flex">
            <Icon classes="size-6" />
            <p class="tracking-wide font-chewy ml-2.5">Voyago</p>
        </a>
    </div>
    <Menubar.Menu>
        <Menubar.Trigger class="inline-flex h-10 cursor-default items-center justify-center rounded-9px px-3 text-base font-medium !ring-0 !ring-transparent data-[highlighted]:bg-muted data-[state=open]:bg-muted">
            <a href="/itineraries">Itineraries</a>
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
</Menubar.Root>
