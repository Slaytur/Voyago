  <!-- <ul class="pt-14">
    <li>
      <strong>Email:</strong> {user.email}
    </li>
    <li>
        <strong>Name:</strong> {user.name}
    </li>
    <li>
        <strong>ID: </strong> {user.$id}
    </li>
  </ul>

  <form method="post">
    <button type="submit">Log out</button>
  </form> -->

<script lang="ts">
    export let data;

    const { user, documents } = data;

    import { Button, Select } from "bits-ui";
    import { fly } from "svelte/transition";

    // Define regions with types
    interface Region {
        value: string
        label: string
    }

    interface Attraction {
        value: string
        label: string
    }

    const regions: Region[] = [
        { value: "United States", label: "United States" },
        { value: "Canada / Greenland", label: "Canada / Greenland" },
        { value: "Central America", label: "Central America" },
        { value: "South America", label: "South America" },
        { value: "Western Europe", label: "Western Europe" },
        { value: "Eastern Europe", label: "Eastern Europe" },
        { value: "East Asia", label: "East Asia" },
        { value: "South Asia", label: "South Asia" },
        { value: "Southeast Asia", label: "Southeast Asia" },
        { value: "Middle East", label: "Middle East" },
        { value: "Africa", label: "Africa" },
        { value: "Oceania", label: "Oceania" }
    ];

    let selectedRegion: Region | null = null;
    let attractions: Attraction[] = [];
    let nearAttractions: Attraction[] = [];
    let selectedAttraction: Attraction | null = null;
    let selectedNearAttraction: Attraction[] | null = [];

    // Function to simulate fetching attractions
    async function fetchAttractions (region: string) {
        // Replace this with a real API call to Perplexity or another service
        const simulatedAttractions: Attraction[] = [];

        // Simulating a delay for fetching data
        return new Promise<Attraction[]>(resolve => {
            setTimeout(() => {
                resolve(simulatedAttractions);
            }, 1000);
        });
    }

    function onRegionSelect (value: string) {
        selectedRegion = regions.find(region => region.value === value) || null;

        attractions = [{ value: "United States", label: "United States" }, { value: "Canada / Greenland", label: "Canada / Greenland" }];// await fetchAttractions(selectedRegion.value);
        selectedAttraction = null; // Reset selected attraction
    }

    function onAttractionSelect (value: string) {
        selectedAttraction = attractions.find(region => region.value === value) || null;

        nearAttractions = [{ value: "United States", label: "United States" }, { value: "Canada / Greenland", label: "Canada / Greenland" }];// await fetchAttractions(selectedRegion.value);
        selectedNearAttraction = null; // Reset selected attraction
    }

    function addItem (value: string) {
        if (nearAttractions.find(region => region.value === value))
            return;
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
<section class="flex justify-center space-x-6 pt-14 flex-col">

    <a href='/create'>
        create
    </a>

    <h2 class="pt-8">Itineraries: </h2>
    <ul class="my-8 space-y-4">
        {#if documents && documents.length > 0}
            {#each documents as document}
                <li class="pt-2">
                    <strong>Title:</strong> {document.Name} <br>
                    <strong>Itinerary:</strong> {document.Itinerary}
                </li>
            {/each}
        {:else}
            <li>No documents found.</li>
        {/if}
    </ul>
</section>
