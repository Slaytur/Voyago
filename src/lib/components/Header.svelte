<script>
    import { page } from "$app/stores";
    import { Label, Switch } from "bits-ui";
    import { onMount } from "svelte";
    let pathname = $page.route.id;
    let theme = "light"
    let checked = false;
    onMount(() => {
        if (typeof localStorage !== "undefined") {
            theme = localStorage.getItem("theme") || "light";
            checked = theme === "dark";
            document.documentElement.classList.toggle("dark", theme === "dark");
        }
    });

    function toggleTheme() {
        theme = theme === "light" ? "dark" : "light";
        checked = !checked;

        if (typeof document !== "undefined") {
            document.documentElement.classList.toggle("dark", theme === "dark");
        }
        if (typeof localStorage !== "undefined") {
            localStorage.setItem("theme", theme);
        }
    }
</script>

<header class="absolute h-16 font-opensans pt-1 font-bold space-x-10 flex flex-row shadow-sm shadow-[#727272] justify-center items-center w-full">
    <a href="/">
        <p class="text-3xl tracking-wide font-chewy ">Voyago</p>
    </a>
    <a href="/dashboard">
        <p>Travel</p>
    </a>
    <a href="/services">
        <p>Services</p>
    </a>
    <a href="/maps">
        <p>Maps</p>
    </a>
    <a href="/about">
        <p>About Us</p>
    </a>
    <div class="px-28"></div>

    <div>
        <a href="/contact">
            <p>Contact Us</p>
        </a>
    </div>
    <div class="flex items-center space-x-3">
        <Switch.Root
            id="marketing"
            checked={checked}
            class="peer inline-flex h-[36px] min-h-[36px] w-[60px] shrink-0 cursor-pointer items-center rounded-full px-[3px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-foreground data-[state=checked]:bg-dark-10 data-[state=checked]:shadow-mini-inset"
            on:click={toggleTheme}
        >
        <Switch.Thumb
            class="pointer-events-none block size-[30px] shrink-0 rounded-full bg-background transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:shadow-mini dark:border dark:bg-background dark:shadow-popover dark:data-[state=checked]:border"
        />
        </Switch.Root>
        <Label.Root for="marketing" class="text-sm font-medium"
            >{theme}</Label.Root
        >
    </div>
    <a href={pathname == "/" || pathname == "/(user)/register" ? "/signin" : "/register"}>
        <div class="outline outline-foreground font-bold py-1 flex flex-col justify-center items-center px-4 rounded-full w-max">
            <p>{pathname == "/" || pathname == "/(user)/register" ? "Sign In" : "Register"}</p>
        </div>
    </a>
</header>
