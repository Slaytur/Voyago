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
            currentSequence = [Itin[i].replaceAll("#", "").trim()];
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
</script>
<section class="tw-pt-14 tw-px-[300px] tw-w-full tw-min-h-screen tw-flex tw-flex-col">
    <h1 class="tw-text-[50px] tw-font-opensans tw-w-full tw-text-center"><b>Trip</b>: {document.Name}</h1>
    {#each titles as titleArray}
    <!-- Title (First item in titleArray) -->

    <br>
    <!-- <h1 class="tw-flex tw-flex-col tw-text-3xl">{titleArray[0]}</h1> -->
    <!-- Lines (Remaining items in titleArray) -->
    <div class="card tw-p-2">
        <div class="card-body">
            <h1 class="tw-flex tw-flex-col tw-text-3xl tw-pb-2">{titleArray[0]}</h1>
            <div class="">
                {#each titleArray.slice(1) as line}
                    <p class="tw-text-xl tw-font-opensans tw-ml-7 tw-text-gray-500">{line}</p>
                {/each}
            </div>
        </div>
    </div>
    
            
    {/each}

    <br><br>


</section>