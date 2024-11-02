<script>
  export let text = "Gradient Text";
</script>

<div class="relative">
  <h1 class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400  to-orange-400 animate-gradient-x">
    {text}
  </h1>
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
