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
<section class="flex w-full h-full items-center space-x-6 pt-24 flex-col">
    
    <a href='/create' class= "">
        <button class="text-black outline-[#A295CB] outline outline-2 shadow-lg focus:ring-4 focus:outline-none  font-medium rounded-full text-xl w-full sm:w-auto px-10 py-2.5 text-center" >Create an Itinerary</button>
    </a>

    <h2 class="pt-8 text-[40px] font-semibold">Itineraries: </h2>
    <ul class="my-8 space-y-4 flex flex-col justify-center items-center">
        {#if documents && documents.length > 0}
        {#each documents as document}
        <li class="pt-2">
            <a href={`/itinerary/${document.$id}`}><button class="text-black outline outline-[#A295CB] shadow-xl focus:ring-4 focus:outline-none  font-medium rounded-full text-xl w-full sm:w-auto px-10 py-2.5 text-center hover:scale-125 transition-all ease-in-out hover:shadow-gray-500" >{`${document.Name}, ${(convertToDate(document.$createdAt))}`}</button></a>
        </li>
        {/each}
        {:else}
        <li>No documents found.</li>
        {/if}
    </ul>
</section>
    