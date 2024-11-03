<!-- src/routes/itinerary/[id].svelte -->

<script>
    import { page } from '$app/stores';
    
    export let data;
    const { user, document} = data
    // Get the id parameter from the page store
    let id;
    id = $page.url.searchParams.get('id') || $page.params.id;
    const Itin = document.Itinerary.split("\n");

    let titles = [];
    let currentSequence = [];

    for (let i = 0; i < Itin.length; i++) {
        if (Itin[i].includes("#")) {
            // If we encounter a new `#`, push the current sequence if it exists and start a new one
            if (currentSequence.length > 0) {
                titles.push(currentSequence);
            }
            currentSequence = [Itin[i].replace("##", "").trim()];
        } else if (Itin[i].includes("-") && currentSequence.length > 0) {
            // Add lines with '-' to the current sequence
            currentSequence.push(Itin[i].replace("-", "").replaceAll("**", "").trim());
        } else if (currentSequence.length > 0) {
            // End of the current sequence when a line without `-` is reached
            titles.push(currentSequence);
            currentSequence = [];
        }
    }

    // Push the last sequence if there is one left
    if (currentSequence.length > 0) {
        titles.push(currentSequence);
    }
    console.log(titles)


    // console.log(id);

</script>
<section class="pt-24 px-10 w-full h-screen flex flex-col overflow-scroll">
    <h1 class=" text-[50px] font-opensans"><b>Trip</b>: {document.Name}</h1>
    {#each titles as titleArray}
    <!-- Title (First item in titleArray) -->

    <br>
    <h1 class="flex flex-col text-3xl">{titleArray[0]}</h1>
    <!-- Lines (Remaining items in titleArray) -->
        <div class="">
            {#each titleArray.slice(1) as line}
            <p class="text-xl font-opensans ml-7 text-gray-500">{line}</p>
            {/each}
        </div>
            
    {/each}

    <br><br>


</section>