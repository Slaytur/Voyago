<script>
    import { page } from "$app/stores";
    let pathname = $page.route.id;
</script>

<header class="h-16 font-opensans pt-1 text-black font-bold space-x-10 flex flex-row shadow-sm shadow-black justify-center items-center w-full">
    <a href="/">
        <p class="text-3xl tracking-wide font-chewy ">Voyago</p>
    </a>
    <a href="/travel">
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
    <a href={pathname == "/" || pathname == "/(user)/register" ? "/signin" : "/register"}>
        <div class="outline outline-black font-bold py-1 flex flex-col justify-center items-center px-4 rounded-full w-fit">
            <p>{pathname == "/" || pathname == "/(user)/register" ? "Sign In >" : "Register >"}</p>
        </div>
    </a>
</header>
