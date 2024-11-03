<script lang="ts">
    export let data;
  
    const { user, documents} = data

    function convertToDate (date: string) {
      return date.slice(0, date.indexOf("T"));
    }

</script>

<style>
    .sele {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 80px;
    }
</style>
<section class="tw-flex tw-w-full tw-h-full tw-items-center tw-space-x-6 tw-pt-24 tw-flex-col">
    
    <a href='/create' class= "">
        <button class="tw-text-black tw-outline-[#A295CB] tw-outline tw-outline-2 tw-shadow-lg focus:tw-ring-4 focus:tw-outline-none tw-font-medium tw-rounded-full tw-text-xl tw-w-full sm:tw-w-auto tw-px-10 tw-py-2.5 tw-text-center">Create an Itinerary</button>
    </a>

    <h2 class="tw-pt-8 tw-text-[40px] tw-font-semibold">Itineraries: </h2>
    <ul class="tw-my-8 tw-space-y-4 tw-flex tw-flex-col tw-justify-center tw-items-center">
        {#if documents && documents.length > 0}
        {#each documents as document}
            <li class="pt-2">
                <a href={`/itinerary/${document.$id}`}><button class="tw-text-black tw-outline tw-outline-[#A295CB] tw-shadow-xl focus:tw-ring-4 focus:tw-outline-none tw-font-medium tw-rounded-full tw-text-xl tw-w-full sm:tw-w-auto tw-px-10 tw-py-2.5 tw-text-center hover:tw-scale-125 tw-transition-all tw-ease-in-out hover:tw-shadow-gray-500">{`${document.Name}, ${(convertToDate(document.$createdAt))}`}</button></a>
            </li>
        {/each}
        {:else}
            <li>No documents found.</li>
        {/if}
    </ul>
</section>
    