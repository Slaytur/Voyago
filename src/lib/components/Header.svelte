<script>
    import { page } from "$app/stores";
    import { Label, Switch } from "bits-ui";
    let pathname = $page.route.id;
    let theme = "light"
</script>

<header class="h-16 font-opensans pt-1 text-black font-bold space-x-10 flex flex-row shadow-sm shadow-black justify-center items-center w-full">
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
            <p>Contact Us ></p>
        </a>
    </div>
    <div class="flex items-center space-x-3">
      <Switch.Root
        id="marketing"
        class="peer inline-flex h-[36px] min-h-[36px] w-[60px] shrink-0 cursor-pointer items-center rounded-full px-[3px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=unchecked]:bg-dark-10 data-[state=unchecked]:shadow-mini-inset dark:data-[state=checked]:bg-foreground"
      >
        <Switch.Thumb
          class="pointer-events-none block size-[30px] shrink-0 rounded-full bg-background transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:shadow-mini dark:border dark:border-background/30 dark:bg-foreground dark:shadow-popover dark:data-[state=unchecked]:border"
        />
      </Switch.Root>
      <Label.Root for="marketing" class="text-sm font-medium"
        >{theme}</Label.Root
      >
    </div>
    <a href={pathname == "/" || pathname == "/(user)/register" ? "/signin" : "/register"}>
        <div class="outline outline-black font-bold py-1 flex flex-col justify-center items-center px-4 rounded-full w-fit">
            <p>{pathname == "/" || pathname == "/(user)/register" ? "Sign In >" : "Register >"}</p>
        </div>
    </a>
</header>
