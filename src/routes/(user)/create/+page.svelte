<script lang="ts">
    import { Button, Select, DatePicker } from "bits-ui";
    import { fly } from "svelte/transition";
    import { goto } from "$app/navigation";

    export let data;
    const { user } = data;

    interface Region {
        value: string
    }
    interface Attraction {
        value: string
    }

    const regions: Region[] = [
        { value: "United States" },
        { value: "Canada / Greenland" },
        { value: "Central America" },
        { value: "South America" },
        { value: "Western Europe" },
        { value: "Eastern Europe" },
        { value: "East Asia" },
        { value: "South Asia" },
        { value: "Southeast Asia" },
        { value: "Middle East" },
        { value: "Africa" },
        { value: "Oceania" }
    ];
    let loading = false;
    let selectedRegion: Region | null = null;
    let attractions: Attraction[] = [];
    let nearAttractions: Attraction[] = [];
    let selectedAttraction: Attraction | null = null;
    let selectedNearAttractions: Attraction[] = [];

    let activities = "";
    let activityList: string[] = [];
    let travelPace: string | null = "Packed";
    let vacationLength: number | null = null;
    let date: string | null = null;
    let name = "";

    async function makeRoute (selectedNearAttractions: Attraction[], activityList: string[], selectedRegion: Region, date: string, vacationLength: number) {
        const token = "i2JGyVfh3hVdzibdtx63sCnu3Nh4wDNDX3lCSWhkLwlH4wFr7jZQ6oq3wpb5StCR";
        loading = true;
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
                    name: name,
                    id: user.$id,
                    token: token
                })
            });

            if (!response.ok)
                throw new Error(`Error ${response.status}: ${response.statusText}`);

            const iten = await response.json();
            goto("/dashboard");
        } catch (error) {
            console.error("Failed to fetch near attractions:", error);
        } finally {
            loading = false; // Stop loading
        }
    }
    async function onRegionSelect (value: string) {
        selectedRegion = regions.find(region => region.value === value) || null;
        if (!selectedRegion) {
            attractions = [];
            selectedAttraction = null;
            console.log("how");
            return;
        }
        loading = true;
        const token = "i2JGyVfh3hVdzibdtx63sCnu3Nh4wDNDX3lCSWhkLwlH4wFr7jZQ6oq3wpb5StCR";
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

            if (!response.ok)
                throw new Error(`Error ${response.status}: ${response.statusText}`);

            const major_attractions = await response.json();
            console.log(major_attractions);
            let attractionstemp: Attraction[] = major_attractions.data.map((location: any) => ({ value: location }));
            attractions = attractionstemp;
            console.log(attractions);
        } catch (error) {
            console.error("Failed to fetch attractions:", error);
            attractions = []; // Return an empty array in case of an error to match original behavior
        } finally {
            loading = false; // Stop loading
        }
        selectedAttraction = null;
    }
    async function onAttractionSelect (value: string) {
        selectedAttraction = attractions.find(region => region.value === value) || null;
        if (!selectedAttraction) {
            selectedAttraction = null;
            return;
        }
        loading = true;
        const token = "i2JGyVfh3hVdzibdtx63sCnu3Nh4wDNDX3lCSWhkLwlH4wFr7jZQ6oq3wpb5StCR";
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

            if (!response.ok)
                throw new Error(`Error ${response.status}: ${response.statusText}`);

            const near_attractions = await response.json();
            console.log(near_attractions);
            let nearattractionstemp: Attraction[] = near_attractions.data.map((location: any) => ({ value: location }));
            nearAttractions = nearattractionstemp;
            selectedNearAttractions = [selectedAttraction];
            console.log(nearAttractions);
        } catch (error) {
            console.error("Failed to fetch near attractions:", error);
            nearAttractions = []; // Return an empty array in case of an error to match original behavior
        } finally {
            loading = false; // Stop loading
        }
    }

    function addItem (value: string) {
        let nearAttraction = nearAttractions.find(region => region.value === value) || null;
        if (nearAttraction && !selectedNearAttractions.find(attraction => attraction.value === nearAttraction.value))
            selectedNearAttractions = [...selectedNearAttractions, nearAttraction];
        else
            selectedNearAttractions = selectedNearAttractions.filter(item => item.value !== nearAttraction?.value);
    }

    function addActivity () {
        if (activities.trim() !== "") {
            activityList = [...activityList, activities.trim()];
            activities = ""; // Clear the input
        }
    }
    function removeActivity (index: number) {
        activityList = activityList.filter((_, i) => i !== index);
    }
</script>

<div class="tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center tw-py-16">
    <div class="sele tw-pt-14 tw-flex tw-ml-7 tw-max-w-[40%] tw-flex-col tw-space-y-2 tw-justify-center">
        {#if loading}
            <div class="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white p-6 rounded shadow-lg">
                    <p class="text-xl font-semibold">Loading...</p>
                </div>
            </div>
        {/if}
        <h1>Enter Trip Name:</h1>
        <input type="text" bind:value={name} placeholder="Ex. My favorite trip" min="1" class="tw-border tw-rounded-md tw-p-2 tw-w-[300px]" />
        <br>
        {#if name.length > 1}
            <h1 class="tw-mt-4">Enter your interests, or activities you would like to do:</h1>
            <div class="tw-flex tw-items-center tw-space-x-2">
                <input
                    type="text"
                    bind:value={activities}
                    placeholder="e.g., hiking, museum visit"
                    class="tw-border tw-rounded-md tw-p-2"
                    required
                />
                <Button.Root on:click={addActivity} class="tw-border tw-rounded-md tw-bg-green tw-p-2">
                    Enter
                </Button.Root>
            </div>
        {/if}
        {#if activityList.length > 0}
            <ul class="tw-space-y-2">
                {#each activityList as activity, index}
                    <li class="tw-flex tw-items-center tw-space-x-2">
                        <span>{activity}</span>
                        <Button.Root on:click={() => removeActivity(index)} class="tw-border tw-rounded-md tw-bg-red tw-p-1 ">
                            X
                        </Button.Root>
                    </li>
                {/each}
            </ul>
        {/if}
        <br>
        {#if activityList.length > 0 && name.length > 1}
            <Select.Root items={regions} on:ValueChange={e => onRegionSelect(e.detail.value)}>
                <h1>Choose a region:</h1>
                <Select.Trigger class="tw-inline-flex tw-h-10 w-[296px] tw-items-center tw-rounded-md tw-border tw-border-border-input tw-bg-background tw-px-[11px] tw-text-sm tw-transition-colors focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-foreground focus:tw-ring-offset-2 focus:tw-ring-offset-background" aria-label="Select a region">
                    <span class="tw-mr-[9px] tw-size-6 tw-text-muted-foreground">🌏</span>
                    <Select.Value class="tw-text-sm tw-text-muted-foreground" placeholder="Select a region" />
                    <span class="tw-ml-auto tw-size-6 tw-text-muted-foreground">▼</span>
                </Select.Trigger>
                <Select.Content class="tw-w-full tw-max-h-80 tw-overflow-auto tw-rounded-xl tw-border tw-border-muted tw-bg-background tw-px-1 tw-py-3 tw-shadow-popover tw-outline-none" transition={fly} sideOffset={8}>
                    {#each regions as region}
                        <Select.Item class="tw-flex tw-h-10 tw-w-full tw-select-none tw-items-center tw-rounded-sm tw-py-3 tw-pl-5 tw-pr-1.5 tw-text-sm tw-outline-none tw-transition-all tw-duration-75 data-[highlighted]:bg-muted" value={region.value} on:click={() => onRegionSelect(region.value)}>
                            {region.value}
                            <Select.ItemIndicator class="tw-ml-auto" asChild={false}><span>✔</span></Select.ItemIndicator>
                        </Select.Item>
                    {/each}
                </Select.Content>
                <Select.Input name="favoriteRegion" />
            </Select.Root>
        {/if}
        <br>
        {#if selectedRegion != null && attractions.length > 0 && activityList.length > 0 && name.length > 1}
            <Select.Root items={attractions}>
                <h1>Choose an attraction:</h1>
                <Select.Trigger class="tw-inline-flex tw-h-10 tw-w-[296px] tw-items-center tw-rounded-md tw-border tw-border-border-input tw-bg-background tw-px-[11px] tw-text-sm tw-transition-colors focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-foreground focus:tw-ring-offset-2 focus:tw-ring-offset-background" aria-label="Select an attraction">
                    <span class="tw-mr-[9px] tw-size-6 tw-text-muted-foreground">🎢</span>
                    <Select.Value class="tw-text-sm tw-text-muted-foreground" placeholder="Select an attraction" />
                    <span class="tw-ml-auto tw-size-6 tw-text-muted-foreground">▼</span>
                </Select.Trigger>
                <Select.Content class="tw-w-full tw-max-h-80 tw-overflow-auto tw-rounded-xl tw-border tw-border-muted tw-bg-background tw-px-1 tw-py-3 tw-shadow-popover tw-outline-none" transition={fly} sideOffset={8}>
                    {#each attractions as attraction}
                        <Select.Item class="tw-flex tw-h-10 tw-w-full tw-select-none tw-items-center tw-rounded-sm tw-py-3 tw-pl-5 tw-pr-1.5 tw-text-sm tw-outline-none tw-transition-all tw-duration-75" value={attraction.value} on:click={() => onAttractionSelect(attraction.value)}>
                            {attraction.value}
                            <Select.ItemIndicator class="tw-ml-auto" asChild={false}><span>✔</span></Select.ItemIndicator>
                        </Select.Item>
                    {/each}
                </Select.Content>
                <Select.Input name="favoriteAttraction" />
            </Select.Root>
        {/if}
        <br>
        {#if nearAttractions.length > 0 && selectedAttraction != null && selectedRegion != null && activityList.length > 0 && name.length > 1}
            <Select.Root items={nearAttractions} multiple>
                <h1>Choose up to 4 nearby attractions:</h1>
                <Select.Trigger class="tw-inline-flex tw-h-min-10 tw-h-fit tw-w-[296px] tw-items-center tw-rounded-md tw-border tw-border-border-input tw-bg-background tw-px-[11px] tw-text-sm tw-transition-colors focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-foreground focus:tw-ring-offset-2 focus:tw-ring-offset-background" aria-label="Select a nearer attraction">
                    <span class="tw-mr-[9px] tw-size-6 tw-text-muted-foreground">🎢</span>
                    <Select.Value class="tw-h-fit tw-text-sm tw-text-muted-foreground" placeholder="Select an attraction" />
                    <span class="tw-ml-auto tw-size-6 tw-text-muted-foreground">▼</span>
                </Select.Trigger>
                <Select.Content class="tw-w-full tw-max-h-80 tw-overflow-auto tw-rounded-xl tw-border tw-border-muted tw-bg-background tw-px-1 tw-py-3 tw-shadow-popover tw-outline-none" transition={fly} sideOffset={8}>
                    {#each nearAttractions as nearAttraction}
                        <Select.Item class="tw-flex tw-h-10 tw-w-full tw-select-none tw-items-center tw-rounded-sm tw-py-3 tw-pl-5 tw-pr-1.5 tw-text-sm tw-outline-none tw-transition-all tw-duration-75 data-[highlighted]:bg-muted" value={nearAttraction.value} on:click={() => addItem(nearAttraction.value)}>
                            {nearAttraction.value}
                            <Select.ItemIndicator class="tw-ml-auto" asChild={false}><span>✔</span></Select.ItemIndicator>
                        </Select.Item>
                    {/each}
                </Select.Content>
                <Select.Input name="favoriteNearAttractions" />
            </Select.Root>
        {/if}
        <br>
        {#if travelPace && selectedNearAttractions.length > 1 && selectedNearAttractions.length < 6 && selectedAttraction != null && selectedRegion && activityList.length > 0 && name.length > 1}
            <DatePicker.Root weekdayFormat="short" fixedWeeks={true} onValueChange={e => date = `${String(e?.month)}/${String(e?.day)}/${String(e?.year)}`}>
                <div class="tw-flex tw-w-full tw-max-w-[232px] tw-flex-col tw-gap-1.5">
                    <DatePicker.Label class="tw-block tw-select-none tw-text-sm"
                    >Approximate travel Date</DatePicker.Label
                    >
                    <DatePicker.Input
                        let:segments
                        class="tw-flex tw-h-10 tw-w-full tw-max-w-[232px] tw-select-none tw-items-center tw-rounded-md tw-border tw-border-border-input tw-bg-white tw-px-2 tw-py-3 tw-text-sm tw-tracking-[0.01em] tw-text-foreground focus-within:tw-border-border-input-hover focus-within:tw-shadow-date-field-focus hover:tw-border-border-input-hover"
                    >
                        {#each segments as { part, value }}
                            <div class="tw-inline-block tw-select-none">
                                {#if part === "literal"}
                                    <DatePicker.Segment {part} class="tw-p-1 tw-text-muted-foreground">
                                        {value}
                                    </DatePicker.Segment>
                                {:else}
                                    <DatePicker.Segment
                                        {part}
                                        class="tw-rounded-5px tw-px-1 tw-py-1 hover:tw-bg-muted focus:tw-bg-muted focus:tw-text-foreground focus-visible:!tw-ring-0 focus-visible:!tw-ring-offset-0 aria-[valuetext=Empty]:tw-text-muted-foreground"
                                    >
                                        {value}
                                    </DatePicker.Segment>
                                {/if}
                            </div>
                        {/each}
                        <DatePicker.Trigger
                            class="tw-ml-auto tw-inline-flex tw-size-8 tw-items-center tw-justify-center tw-rounded-[5px] tw-text-foreground/60 tw-transition-all hover:tw-bg-muted active:tw-bg-dark-10"
                        >
                            📅
                        </DatePicker.Trigger>
                    </DatePicker.Input>
                    <DatePicker.Content
                        sideOffset={6}
                        transition={fly}
                        transitionConfig={{ duration: 150, y: -8 }}
                        class="tw-z-50"
                    >
                        <DatePicker.Calendar
                            class="tw-rounded-[15px] tw-border-2 tw-border-dark-10 tw-bg-white tw-p-[22px] tw-shadow-popover"
                            let:months
                            let:weekdays
                        >
                            <DatePicker.Header class="tw-flex tw-items-center tw-justify-between">
                                <DatePicker.PrevButton
                                    class="tw-inline-flex tw-size-10 tw-items-center tw-justify-center tw-rounded-9px tw-bg-white tw-transition-all tw-hover:bg-muted active:tw-scale-98"
                                >
                                    ↶
                                </DatePicker.PrevButton>
                                <DatePicker.Heading class="tw-text-[15px] font-medium" />
                                <DatePicker.NextButton
                                    class="tw-inline-flex tw-size-10 tw-items-center tw-justify-center tw-rounded-9px tw-bg-white tw-transition-all hover:tw-bg-muted active:tw-scale-98"
                                >
                                    ↷
                                </DatePicker.NextButton>
                            </DatePicker.Header>
                            <div
                                class="tw-flex tw-flex-col tw-space-y-4 tw-pt-4 sm:tw-flex-row sm:tw-space-x-4 sm:tw-space-y-0"
                            >
                                {#each months as month}
                                    <DatePicker.Grid
                                        class="tw-w-full tw-border-collapse tw-select-none tw-space-y-1"
                                    >
                                        <DatePicker.GridHead>
                                            <DatePicker.GridRow class="tw-mb-1 tw-flex tw-w-full tw-justify-between">
                                                {#each weekdays as day}
                                                    <DatePicker.HeadCell
                                                        class="tw-w-10 tw-rounded-md tw-text-xs !tw-font-normal tw-text-muted-foreground"
                                                    >
                                                        <div>{day.slice(0, 2)}</div>
                                                    </DatePicker.HeadCell>
                                                {/each}
                                            </DatePicker.GridRow>
                                        </DatePicker.GridHead>
                                        <DatePicker.GridBody>
                                            {#each month.weeks as weekDates}
                                                <DatePicker.GridRow class="tw-flex tw-w-full">
                                                    {#each weekDates as date}
                                                        <DatePicker.Cell
                                                            {date}
                                                            class="tw-relative tw-size-10 !tw-p-0 tw-text-center tw-text-sm"
                                                        >
                                                            <DatePicker.Day
                                                                {date}
                                                                month={month.value}
                                                                class="tw-group tw-relative tw-inline-flex tw-size-10 tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-9px tw-border tw-border-transparent tw-bg-transparent tw-p-0 tw-text-sm tw-font-normal tw-text-foreground tw-transition-all hover:tw-border-foreground data-[disabled]:tw-pointer-events-none data-[outside-month]:tw-pointer-events-none data-[selected]:tw-bg-foreground data-[selected]:tw-font-medium data-[disabled]:tw-text-foreground/30 data-[selected]:tw-text-accent data-[unavailable]:tw-text-muted-foreground data-[unavailable]:tw-line-through"
                                                            >
                                                                <div
                                                                    class="tw-absolute tw-top-[5px] tw-hidden tw-size-1 tw-rounded-full tw-bg-foreground tw-transition-all group-data-[today]:tw-block group-data-[selected]:tw-bg-background"
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
        {/if}
        <br>
        {#if selectedNearAttractions.length > 1 && selectedNearAttractions.length < 6 && selectedAttraction != null && selectedRegion != null && activityList.length > 0 && name.length > 1 && date && travelPace}
            <h1>Enter your vacation length (in days):</h1>
            <input type="number" bind:value={vacationLength} placeholder="Enter days" min="1" class="tw-border tw-rounded-md tw-p-2 tw-w-[100px]" />
        {/if}
        <br>
        {#if selectedNearAttractions.length > 0 && activityList.length > 0 && travelPace && vacationLength && date && name}
            <Button.Root color="green" class=" tw-border-accent tw-border-2 tw-rounded-full  tw-text-accent tw-font-bold tw-bg-green tw-w-fit tw-px-3 tw-py-2" on:click={e => makeRoute(selectedNearAttractions, activityList, selectedRegion!, date!, vacationLength ?? 0)}>
                Continue
            </Button.Root>
        {/if}
    </div>
</div>
