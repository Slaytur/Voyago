<script lang='ts'>
    import { Button, Select } from "bits-ui";
    import { fly } from "svelte/transition";

    // Define regions with types
    interface Region {
        value: string;
        label: string;
    }

    interface Attraction {
        value: string;
        label: string;
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
    async function fetchAttractions(region: string) {
        // Replace this with a real API call to Perplexity or another service
        const simulatedAttractions: Attraction[] = [];

        // Simulating a delay for fetching data
        return new Promise<Attraction[]>((resolve) => {
            setTimeout(() => {
                resolve(simulatedAttractions);
            }, 1000);
        });
    }

  function onRegionSelect(value: string) {
      
      selectedRegion = regions.find(region => region.value === value) || null;


      attractions = [{ value: "United States", label: "United States" },{ value: "Canada / Greenland", label: "Canada / Greenland" }]//await fetchAttractions(selectedRegion.value);
      selectedAttraction = null; // Reset selected attraction

  }

  function onAttractionSelect(value: string) {
      
      selectedAttraction = attractions.find(region => region.value === value) || null;


      nearAttractions = [{ value: "United States", label: "United States" },{ value: "Canada / Greenland", label: "Canada / Greenland" }]//await fetchAttractions(selectedRegion.value);
      selectedNearAttraction = null; // Reset selected attraction
  }

  function addItem(value: string) {
      if (nearAttractions.find(region => region.value === value)) {
          return;
      }  
  }

</script>

<div class="sele pt-14 flex flex-col space-y-4">
    <Select.Root items={regions} on:ValueChange={e => onRegionSelect(e.detail.value)}>
        <h1>Choose a region:</h1>
        <Select.Trigger
            class="inline-flex h-10 w-[296px] items-center rounded-[9px] border border-border-input bg-background px-[11px] text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Select a region"
        >
            <span class="mr-[9px] size-6 text-muted-foreground">🌏</span>
            <Select.Value class="text-sm text-muted-foreground" placeholder="Select a region" />
            <span class="ml-auto size-6 text-muted-foreground">▼</span>
        </Select.Trigger>

        <Select.Content
            class="w-full max-h-80 overflow-auto rounded-xl border border-muted bg-background px-1 py-3 shadow-popover outline-none"
            transition={fly}
            sideOffset={8}
        >
            {#each regions as region}
                <Select.Item
                    class="flex h-10 w-full select-none items-center rounded-button py-3 pl-5 pr-1.5 text-sm outline-none transition-all duration-75 data-[highlighted]:bg-muted"
                    value={region.value}
                    label={region.label}
                    on:click = {e => onRegionSelect(e.detail.value)}
                >
                    {region.label}
                    <Select.ItemIndicator class="ml-auto" asChild={false}>
                        <span>✔</span>
                    </Select.ItemIndicator>
                </Select.Item>
            {/each}
        </Select.Content>

        <Select.Input name="favoriteRegion" />
    </Select.Root>

    {#if attractions.length > 0}
        <Select.Root items={attractions}>
            <h1>Choose an attraction: </h1>
            <Select.Trigger
                class="inline-flex h-10 w-[296px] items-center rounded-[9px] border border-border-input bg-background px-[11px] text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Select an attraction"
            >
                <span class="mr-[9px] size-6 text-muted-foreground">🎢</span>
                <Select.Value class="text-sm text-muted-foreground" placeholder="Select an attraction" />
                <span class="ml-auto size-6 text-muted-foreground">▼</span>
            </Select.Trigger>

            <Select.Content
                class="w-full max-h-80 overflow-auto rounded-xl border border-muted bg-background px-1 py-3 shadow-popover outline-none"
                transition={fly}
                sideOffset={8}
            >
                {#each attractions as attraction}
                    <Select.Item
                        class="flex h-10 w-full select-none items-center rounded-button py-3 pl-5 pr-1.5 text-sm outline-none transition-all duration-75 data-[highlighted]:bg-muted"
                        value={attraction.value}
                        label={attraction.label}
                        on:click = {e => onAttractionSelect(e.detail.value)}
                    >
                        {attraction.label}
                        <Select.ItemIndicator class="ml-auto" asChild={false}>
                            <span>✔</span>
                        </Select.ItemIndicator>
                    </Select.Item>
                {/each}
            </Select.Content>

            <Select.Input name="favoriteAttraction" />
        </Select.Root>
    {/if}

    {#if nearAttractions.length > 0}
        <Select.Root items={nearAttractions} multiple>
            <h1>Choose up to 4 nearby attractions: </h1>
            <Select.Trigger
                class="inline-flex h-10 w-[296px] items-center rounded-[9px] border border-border-input bg-background px-[11px] text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Select a nearer attraction"
            >
                <span class="mr-[9px] size-6 text-muted-foreground">🎢</span>
                <Select.Value class="text-sm text-muted-foreground" placeholder="Select an attraction" />
                <span class="ml-auto size-6 text-muted-foreground">▼</span>
            </Select.Trigger>

            <Select.Content
                class="w-full max-h-80 overflow-auto rounded-xl border border-muted bg-background px-1 py-3 shadow-popover outline-none"
                transition={fly}
                sideOffset={8}
                on:click={addItem(e.detail.value)}
            >
                {#each nearAttractions as nearAttraction}
                    <Select.Item
                        class="flex h-10 w-full select-none items-center rounded-button py-3 pl-5 pr-1.5 text-sm outline-none transition-all duration-75 data-[highlighted]:bg-muted"
                        value={nearAttraction.value}
                        label={nearAttraction.label}
                        
                    >
                        {nearAttraction.label}
                        <Select.ItemIndicator class="ml-auto" asChild={false}>
                            <span>✔</span>
                        </Select.ItemIndicator>
                    </Select.Item>
                {/each}
            </Select.Content>

            <Select.Input name="favoriteAttraction" />
        </Select.Root>
    {/if}
    <Button.Root color="green" hidden={false}>
        Continue
    </Button.Root>
</div>