<script>
    import { Menubar } from "bits-ui";
    import Icon from "./Icon.svelte";
</script>

<Menubar.Root class="flex w-full fixed bg-white h-14 z-50 items-center gap-1 rounded-10px border border-dark-10 bg-background-alt px-[3px] shadow-mini">
    <div class="px-2.5">
        <a href="/" class="flex">
            <Icon classes="size-6" />
            <p class="tracking-wide font-chewy ml-2.5">Voyago</p>
        </a>
    </div>

    <!-- Removing the link from Menubar.Trigger and applying it directly -->
    <Menubar.Menu>
        <a href="/dashboard" class="inline-flex h-10 cursor-pointer items-center justify-center rounded-9px px-3 text-base font-medium !ring-0 !ring-transparent hover:bg-muted focus:bg-muted">
            Dashboard
        </a>
    </Menubar.Menu>
    <Menubar.Menu>
        <a href="/create" class="inline-flex h-10 cursor-pointer items-center justify-center rounded-9px px-3 text-base font-medium !ring-0 !ring-transparent hover:bg-muted focus:bg-muted">
            Create
        </a>
    </Menubar.Menu>
    <Menubar.Menu>
        <a href="/pricing" class="inline-flex h-10 cursor-pointer items-center justify-center rounded-9px px-3 text-base font-medium !ring-0 !ring-transparent hover:bg-muted focus:bg-muted">
            Pricing
        </a>
    </Menubar.Menu>
    <Menubar.Menu>
        <a href="/feedback" class="inline-flex h-10 cursor-pointer items-center justify-center rounded-9px px-3 text-base font-medium !ring-0 !ring-transparent hover:bg-muted focus:bg-muted">
            Feedback
        </a>
    </Menubar.Menu>
</Menubar.Root>
