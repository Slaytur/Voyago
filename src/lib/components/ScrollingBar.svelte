<script lang="ts">
    import { onMount } from "svelte";

    interface Card {
        id: number
        title: string
        content: string
    }

    // Sample data for cards
    const cards: Card[] = [
        { id: 1, title: "Stories", content: "Accenture on the future of payments and financial automation" },
        { id: 2, title: "Report", content: "Stripe Insights 2023: Payments and fintech strategies in an economic dow..." },
        { id: 3, title: "Panel discussion", content: "Enabling innovation and growth with subscriptions" },
        { id: 4, title: "News", content: "Stripe expands network tokens and card account updater to improve conver..." }
    ];

    let containerWidth = 0;
    let contentWidth = 0;

    onMount(() => {
        const container: HTMLElement | null = document.querySelector(".scroll-container");
        const content: HTMLElement | null = document.querySelector(".scroll-content");

        if (container && content) {
            containerWidth = container.offsetWidth;
            contentWidth = content.offsetWidth;
        }
    });

    $: animationDuration = contentWidth > 0 ? `${contentWidth / 50}s` : "0s";
  </script>

  <div class="w-full overflow-hidden bg-white bg-opacity-[.05] py-4">
    <div class="scroll-container">
      <div class="scroll-content items-center" style="animation-duration: {animationDuration};">
        {#each [...cards, ...cards] as card} <!-- Duplicate cards for seamless loop -->
          <div class="w-80 flex flex-row rounded-lg py-4 mx-10">
            <h2 class="text-[12px] font-bold text-[#706BE8] mb-2">{card.title}</h2>
            <p class="text-[12px] font-bold text-white ml-4 tracking-wide">{card.content}</p>
            <p class="text-white font-bold scale-150">&rarr;</p>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <style>
    .scroll-container {
      width: 100%;
      overflow: hidden;
    }

    .scroll-content {
      display: inline-flex;
      animation: scroll linear infinite;
    }

    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  </style>
