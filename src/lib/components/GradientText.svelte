<script>
  export let text = "Gradient Text";
  export let interval = 0;

  import { concurrent } from "svelte-typewriter";
</script>

<div class="relative w-full h-full">
    <p class="text-transparent w-full h-full bg-clip-text bg-gradient-to-r from-[#5C43A8]  to-[#5C43A8] animate-gradient-x" use:concurrent={{ interval: interval}}>{text}</p>
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
