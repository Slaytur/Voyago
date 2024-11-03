<script lang="ts">
    import { Button, Select, DatePicker } from "bits-ui";
    import { fly } from "svelte/transition";
    import { goto } from '$app/navigation';

    export let data;
    const { user} = data;

    interface Region {
        value: string;
    }
    interface Attraction {
        value: string;
    }

    const regions: Region[] = [
        { value: "United States"},
        { value: "Canada / Greenland"},
        { value: "Central America"},
        { value: "South America"},
        { value: "Western Europe"},
        { value: "Eastern Europe"},
        { value: "East Asia"},
        { value: "South Asia"},
        { value: "Southeast Asia"},
        { value: "Middle East"},
        { value: "Africa"},
        { value: "Oceania"}
    ];

    let selectedRegion: Region | null = null;
    let attractions: Attraction[] = [];
    let nearAttractions: Attraction[] = [];
    let selectedAttraction: Attraction | null = null;
    let selectedNearAttractions: Attraction[] = [];

    let activities = "";
    let activityList: string[] = [];
    let travelPace: string | null = null;
    let vacationLength: number | null = null;
    let date: string | null = null;

    async function makeRoute(selectedNearAttractions:Attraction[], activityList:string[], selectedRegion:Region, date:string, vacationLength:Number){
      const token = 'i2JGyVfh3hVdzibdtx63sCnu3Nh4wDNDX3lCSWhkLwlH4wFr7jZQ6oq3wpb5StCR';
      try {
          const newatt: string[] = selectedNearAttractions.map(selectedNearAttractions => selectedNearAttractions.value);
          console.log(newatt);
          const response = await fetch("https://voyago-backend.namikas.dev/create-itinerary", {
            //   mode: 'no-cors',
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`
              },
              body: JSON.stringify({
                points_of_interest: newatt.join(", "),
                interests: activityList.join(", "),
                location: selectedRegion.value,
                date: date,
                date_length: String(vacationLength),
                id: user.$id,
                token: token
              })
          });

          if (!response.ok) {
              throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
          
          const iten = await response.json();
          goto('/dashboard');


      } catch (error) {
          console.error("Failed to fetch near attractions:", error);
      }
    }
    async function onRegionSelect(value: string) {
        selectedRegion = regions.find(region => region.value === value) || null;
        if (!selectedRegion){
            attractions = [];
            selectedAttraction = null;
            console.log('how');
            return;
        }
        const token = 'i2JGyVfh3hVdzibdtx63sCnu3Nh4wDNDX3lCSWhkLwlH4wFr7jZQ6oq3wpb5StCR';
        try {
            const response = await fetch("https://voyago-backend.namikas.dev/autofillPoI1", {
                // mode: 'no-cors',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    region: selectedRegion.value,
                    interests: activityList.join(", "),
                    token: token
                })
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            
            const major_attractions = await response.json();
            console.log(major_attractions);
            let attractionstemp: Attraction[] = major_attractions.data.map((location: any) => ({ value: location }));
            attractions = attractionstemp;
            console.log(attractions)

        } catch (error) {
            console.error("Failed to fetch attractions:", error);
            attractions = [];  // Return an empty array in case of an error to match original behavior
        }
        selectedAttraction = null;
    }
    async function onAttractionSelect(value: string) {
        selectedAttraction = attractions.find(region => region.value === value) || null;
        if (!selectedAttraction){
            selectedAttraction = null;
            return;
        }
        const token = 'i2JGyVfh3hVdzibdtx63sCnu3Nh4wDNDX3lCSWhkLwlH4wFr7jZQ6oq3wpb5StCR';
        try {
            console.log(selectedAttraction);
            const response = await fetch("https://voyago-backend.namikas.dev/autofillPoI2", {
                // mode: 'no-cors',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    point_of_interest: selectedAttraction.value,
                    interests: activityList.join(", "),
                    token: token
                })
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            
            const near_attractions = await response.json();
            console.log(near_attractions);
            let nearattractionstemp: Attraction[] = near_attractions.data.map((location: any) => ({ value: location }));
            nearAttractions = nearattractionstemp;
            selectedNearAttractions = [selectedAttraction];
            console.log(nearAttractions)

        } catch (error) {
            console.error("Failed to fetch near attractions:", error);
            nearAttractions = [];  // Return an empty array in case of an error to match original behavior
        }
    }

    function addItem(value: string) {
        let nearAttraction = nearAttractions.find(region => region.value === value) || null;
        if (nearAttraction && !selectedNearAttractions.find(attraction => attraction.value === nearAttraction.value)) {
            selectedNearAttractions = [...selectedNearAttractions, nearAttraction];
        } else {
            selectedNearAttractions = selectedNearAttractions.filter(item => item.value !== nearAttraction?.value);
        }
    }
    
    function addActivity() {
        if (activities.trim() !== "") {
            activityList = [...activityList, activities.trim()];
            activities = ""; // Clear the input
        }
    }
    function removeActivity(index: number) {
        activityList = activityList.filter((_, i) => i !== index);
    }

    async function submit() {//hah litle dogma
      const token = 'i2JGyVfh3hVdzibdtx63sCnu3Nh4wDNDX3lCSWhkLwlH4wFr7jZQ6oq3wpb5StCR';
        try {
            const response = await fetch("https://voyago-backend.namikas.dev/create-itinerary", {
                mode: 'no-cors',
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    points_of_interest: `${selectedAttraction}, ${selectedNearAttractions.join(", ")}`,
                    interests: activityList.join(", "),
                    location: selectedRegion?.value,
                    date: date,
                    date_length: vacationLength as unknown as string,
                    token: token
                })
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            
            const res = await response.json();
            console.log(res);

        } catch (error) {
            console.error("Failed to fetch itinerary:", error);
        }
    }
</script>

<div class="flex flex-col w-full justify-center items-center py-16">
    <div class="sele pt-14 flex ml-7 max-w-[40%] flex-col space-y-4 justify-center">

        <h1>Enter your planned activities/interests:</h1>
        <div class="flex items-center space-x-2">
            <input
                type="text"
                bind:value={activities}
                placeholder="e.g., hiking, museum visit"
                class="border rounded-md p-2"
                required
            />
            <Button.Root on:click={addActivity} class="border rounded-md bg-green p-2">
                Enter
            </Button.Root>
        </div>

        {#if activityList.length > 0}
            <ul class="mt-4 space-y-2">
                {#each activityList as activity, index}
                    <li class="flex items-center space-x-2">
                        <span>{activity}</span>
                        <Button.Root on:click={() => removeActivity(index)} class="border rounded-md bg-red p-1 ">
                            X
                        </Button.Root>
                    </li>
                {/each}
            </ul>
        {/if}


        <Select.Root items={regions} on:ValueChange={e => onRegionSelect(e.detail.value)}>
            <h1>Choose a region:</h1>
            <Select.Trigger class="inline-flex h-10 w-[296px] items-center rounded-md border border-border-input bg-background px-[11px] text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background" aria-label="Select a region">
                <span class="mr-[9px] size-6 text-muted-foreground">🌏</span>
                <Select.Value class="text-sm text-muted-foreground" placeholder="Select a region" />
                <span class="ml-auto size-6 text-muted-foreground">▼</span>
            </Select.Trigger>
            <Select.Content class="w-full max-h-80 overflow-auto rounded-xl border border-muted bg-background px-1 py-3 shadow-popover outline-none" transition={fly} sideOffset={8}>
                {#each regions as region}
                    <Select.Item class="flex h-10 w-full select-none items-center rounded-sm py-3 pl-5 pr-1.5 text-sm outline-none transition-all duration-75 data-[highlighted]:bg-muted" value={region.value} on:click={() => onRegionSelect(region.value)}>
                        {region.value}
                        <Select.ItemIndicator class="ml-auto" asChild={false}><span>✔</span></Select.ItemIndicator>
                    </Select.Item>
                {/each}
            </Select.Content>
            <Select.Input name="favoriteRegion" />
        </Select.Root>


        {#if attractions.length > 0}
            <Select.Root items={attractions}>
                <h1>Choose an attraction:</h1>
                <Select.Trigger class="inline-flex h-10 w-[296px] items-center rounded-md border border-border-input bg-background px-[11px] text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background" aria-label="Select an attraction">
                    <span class="mr-[9px] size-6 text-muted-foreground">🎢</span>
                    <Select.Value class="text-sm text-muted-foreground" placeholder="Select an attraction" />
                    <span class="ml-auto size-6 text-muted-foreground">▼</span>
                </Select.Trigger>
                <Select.Content class="w-full max-h-80 overflow-auto rounded-xl border border-muted bg-background px-1 py-3 shadow-popover outline-none" transition={fly} sideOffset={8}>
                    {#each attractions as attraction}
                        <Select.Item class="flex h-10 w-full select-none items-center rounded-sm py-3 pl-5 pr-1.5 text-sm outline-none transition-all duration-75 data-[highlighted]:bg-muted" value={attraction.value} on:click={() => onAttractionSelect(attraction.value)}>
                            {attraction.value}
                            <Select.ItemIndicator class="ml-auto" asChild={false}><span>✔</span></Select.ItemIndicator>
                        </Select.Item>
                    {/each}
                </Select.Content>
                <Select.Input name="favoriteAttraction" />
            </Select.Root>
        {/if}


        {#if nearAttractions.length > 0}
            <Select.Root items={nearAttractions} multiple>
                <h1>Choose up to 4 nearby attractions:</h1>
                <Select.Trigger class="inline-flex h-10 w-[296px] items-center rounded-md border border-border-input bg-background px-[11px] text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background" aria-label="Select a nearer attraction">
                    <span class="mr-[9px] size-6 text-muted-foreground">🎢</span>
                    <Select.Value class="text-sm text-muted-foreground" placeholder="Select an attraction" />
                    <span class="ml-auto size-6 text-muted-foreground">▼</span>
                </Select.Trigger>
                <Select.Content class="w-full max-h-80 overflow-auto rounded-xl border border-muted bg-background px-1 py-3 shadow-popover outline-none" transition={fly} sideOffset={8}>
                    {#each nearAttractions as nearAttraction}
                        <Select.Item class="flex h-10 w-full select-none items-center rounded-sm py-3 pl-5 pr-1.5 text-sm outline-none transition-all duration-75 data-[highlighted]:bg-muted" value={nearAttraction.value} on:click={() => addItem(nearAttraction.value)}>
                            {nearAttraction.value}
                            <Select.ItemIndicator class="ml-auto" asChild={false}><span>✔</span></Select.ItemIndicator>
                        </Select.Item>
                    {/each}
                </Select.Content>
                <Select.Input name="favoriteNearAttractions" />
            </Select.Root>
        {/if}
    </div>


    <div class="sele pt-14 flex ml-7 flex-col space-y-4">

        

        <h1>What is your preferred travel pace?</h1>
        <Select.Root items={[{ value: "Relaxed"}, { value: "Moderate"}, { value: "Packed"}]} onSelectedChange={e => travelPace = e!.value}>
            <Select.Trigger class="inline-flex h-10 w-[296px] items-center rounded-md border border-border-input bg-background px-[11px] text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background">
                <Select.Value class="text-sm text-muted-foreground" placeholder="Select a travel pace" />
            </Select.Trigger>
            <Select.Content class="w-full max-h-80 overflow-auto rounded-xl border border-muted bg-background px-1 py-3 shadow-popover outline-none" transition={fly} sideOffset={8}>
                {#each ["Relaxed", "Moderate", "Packed"] as pace}
                    <Select.Item class="flex h-10 w-full select-none items-center rounded-sm py-3 pl-5 pr-1.5 text-sm outline-none transition-all duration-75 data-[highlighted]:bg-muted" value={pace}>
                        {pace}
                    </Select.Item>
                {/each}
            </Select.Content>
        </Select.Root>

        
        <DatePicker.Root weekdayFormat="short" fixedWeeks={true} onValueChange={e => date = String(e?.month) + "/" + String(e?.day) + "/" + String(e?.year)}>
            <div class="flex w-full max-w-[232px] flex-col gap-1.5">
              <DatePicker.Label class="block select-none text-sm font-medium"
                >Approximate travel Date</DatePicker.Label
              >
              <DatePicker.Input
                let:segments
                class="flex h-10 w-full max-w-[232px] select-none items-center rounded-md border border-border-input bg-background px-2 py-3 text-sm tracking-[0.01em] text-foreground focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover"
              >
                {#each segments as { part, value }}
                  <div class="inline-block select-none">
                    {#if part === "literal"}
                      <DatePicker.Segment {part} class="p-1 text-muted-foreground">
                        {value}
                      </DatePicker.Segment>
                    {:else}
                      <DatePicker.Segment
                        {part}
                        class="rounded-5px px-1 py-1 hover:bg-muted focus:bg-muted focus:text-foreground focus-visible:!ring-0 focus-visible:!ring-offset-0 aria-[valuetext=Empty]:text-muted-foreground"
                      >
                        {value}
                      </DatePicker.Segment>
                    {/if}
                  </div>
                {/each}
                <DatePicker.Trigger
                  class="ml-auto inline-flex size-8 items-center justify-center rounded-[5px] text-foreground/60 transition-all hover:bg-muted active:bg-dark-10"
                >
                📅
                </DatePicker.Trigger>
              </DatePicker.Input>
              <DatePicker.Content
                sideOffset={6}
                transition={fly}
                transitionConfig={{ duration: 150, y: -8 }}
                class="z-50"
              >
                <DatePicker.Calendar
                  class="rounded-[15px] border border-dark-10 bg-secondary p-[22px] shadow-popover"
                  let:months
                  let:weekdays
                >
                  <DatePicker.Header class="flex items-center justify-between">
                    <DatePicker.PrevButton
                      class="inline-flex size-10 items-center justify-center rounded-9px bg-secondary transition-all hover:bg-muted active:scale-98"
                    >
                    ↶
                    </DatePicker.PrevButton>
                    <DatePicker.Heading class="text-[15px] font-medium" />
                    <DatePicker.NextButton
                      class="inline-flex size-10 items-center justify-center rounded-9px bg-secondary transition-all hover:bg-muted active:scale-98"
                    >
                    ↷
                    </DatePicker.NextButton>
                  </DatePicker.Header>
                  <div
                    class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                  >
                    {#each months as month}
                      <DatePicker.Grid
                        class="w-full border-collapse select-none space-y-1"
                      >
                        <DatePicker.GridHead>
                          <DatePicker.GridRow class="mb-1 flex w-full justify-between">
                            {#each weekdays as day}
                              <DatePicker.HeadCell
                                class="w-10 rounded-md text-xs !font-normal text-muted-foreground"
                              >
                                <div>{day.slice(0, 2)}</div>
                              </DatePicker.HeadCell>
                            {/each}
                          </DatePicker.GridRow>
                        </DatePicker.GridHead>
                        <DatePicker.GridBody>
                          {#each month.weeks as weekDates}
                            <DatePicker.GridRow class="flex w-full">
                              {#each weekDates as date}
                                <DatePicker.Cell
                                  {date}
                                  class="relative size-10 !p-0 text-center text-sm"
                                >
                                  <DatePicker.Day
                                    {date}
                                    month={month.value}
                                    class="group relative inline-flex size-10 items-center justify-center whitespace-nowrap rounded-9px border border-transparent bg-transparent p-0 text-sm font-normal text-foreground transition-all hover:border-foreground data-[disabled]:pointer-events-none data-[outside-month]:pointer-events-none data-[selected]:bg-foreground data-[selected]:font-medium data-[disabled]:text-foreground/30 data-[selected]:text-background data-[unavailable]:text-muted-foreground data-[unavailable]:line-through"
                                  >
                                    <div
                                      class="absolute top-[5px] hidden size-1 rounded-full bg-foreground transition-all group-data-[today]:block group-data-[selected]:bg-background"
                                    ></div>
                                    {date.day}
                                  </DatePicker.Day>
                                </DatePicker.Cell>
                              {/each}
                            </DatePicker.GridRow>
                          {/each}
                        </DatePicker.GridBody>
                      </DatePicker.Grid>
                    {/each}
                  </div>
                </DatePicker.Calendar>
              </DatePicker.Content>
            </div>
          </DatePicker.Root>

          
        <h1>Enter your vacation length (in days):</h1>
        <input type="number" bind:value={vacationLength} placeholder="Enter days" min="1" class="border rounded-md p-2 w-[100px]" />
        {#if selectedNearAttractions.length > 0 && activityList.length > 0 && travelPace && vacationLength && date}
            <Button.Root color="green" class="border rounded-md ml-3 bg-green w-fit p-2" on:click={e=>makeRoute(selectedNearAttractions, activityList, selectedRegion, date, vacationLength)}>
                Continue
            </Button.Root>
        {/if}
    </div>
</div>
