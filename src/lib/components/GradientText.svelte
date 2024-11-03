<script>
    export let text = "Gradient Text";
    export let interval = 0;

    import { concurrent } from "svelte-typewriter";
</script>

<div class="tw-relative tw-w-full tw-h-full">
    <span class="tw-w-full tw-h-full tw-pt-3 tw-bg-clip-text tw-text-accent">
        <p use:concurrent={{ interval: interval }}>{text}</p>
    </span>
</div>
