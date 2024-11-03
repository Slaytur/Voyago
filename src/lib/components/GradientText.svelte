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

<style>
  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .animate-gradient-x {
    background-size: 200% 100%;
    animation: gradientMove 5s linear infinite;
  }
</style>
