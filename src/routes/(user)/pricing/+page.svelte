<script lang="ts">
    import { Button } from "bits-ui";
</script>

<style>
    .login {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        justify-items: center;
        padding-top: 12vi;
    }
</style>

<section>
    <section class="login">
        <div class="flex flex-row space-x-10 font-sourcesans tracking-wide">
            <div class="flex flex-col justify-between items-center outline outline-white rounded-md h-96 font-bold text-xl">
                <div class="space-y-4">
                    <h1 class="flex flex-col justify-center items-center w-full h-20 rounded-t-lg bg-gradient-to-br from-[#4f52ff] via-[#152aa5] to-[#0f29b9] p-8">Voyago Explorer</h1>
                    <h2>5 itineraries for $5</h2>
                </div>
                <Button.Root class="inline-flex h-12 items-center justify-center rounded-input rounded-xl outline outline-white text-[15px] max-w-20 w-20 font-semibold text-white er:bg-dark/95 active:transition-all bg-gradient-to-br from-[#4f52ff] via-[#152aa5] to-[#0f29b9]">
                    $5
                </Button.Root>
            </div>
            <div class="flex flex-col justify-between items-center outline outline-white rounded-md h-96 font-bold text-xl">
                <div class="space-y-4">
                    <h1 class="flex flex-col justify-center items-center w-full h-20 rounded-t-lg bg-gradient-to-br from-[#52ffa9] via-[#04cf41] to-[#05e886] p-8">Voyago Voyager</h1>
                    <h2>15 itineraries for $10</h2>
                </div>
                <Button.Root class="inline-flex h-12 items-center justify-center rounded-input rounded-xl outline outline-white text-[15px] max-w-20 w-20 font-semibold text-white er:bg-dark/95 active:transition-all bg-gradient-to-br from-[#52ffa9] via-[#04cf41] to-[#05e886]">
                    $10
                </Button.Root>
            </div>
            <div class="flex flex-col justify-between items-center outline outline-white rounded-md h-96 font-bold text-xl">
                <div class="space-y-4">
                    <h1 class="flex flex-col justify-center items-center w-full h-20 rounded-t-lg bg-gradient-to-br from-[#ff734c] via-[#ff3c00] to-[#ff5e00] p-8">Voyago Veteran</h1>
                    <h2>50 itineraries for $30</h2>
                </div>
                <Button.Root class="inline-flex h-12 items-center justify-center rounded-input rounded-xl outline outline-white text-[15px] max-w-20 w-20 font-semibold text-white er:bg-dark/95 active:transition-all bg-gradient-to-br from-[#ff734c] via-[#ff3c00] to-[#ff5e00]">
                    $30
                </Button.Root>
            </div>
        </div>
    </section>
</section>
