<script lang="ts">
    import { Button } from "bits-ui";
    import GradientText from "$lib/components/GradientText.svelte";
</script>

<style>
    .login {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        justify-items: center;
        padding-top: 1vi;
    }
    .box {
      border: 5px solid black;
      border-radius: 30px;
      width: 300px;
      height: 300px;
    }
    .text {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      justify-items: center;
    }
    #grad {
      padding: 0px 30px 0px; 
    }
    .prices {
      display: flex;
      justify-content: center;
      justify-items: center;
      align-items: center;
      padding-left: 30px;
    }
    .login-block {
      text-align: center;
      align-items: center;
      text-align: center;
      justify-content: center;
      justify-items: center;
    }
</style>

<section class="py-40 font-opensans">
    <section class="top">
      <div class="text text-[60px] font-bold">
        World-class 
        <div id="grad" class="text">
            <GradientText interval={210} text="adventures" />
        </div>
          within reach
      </div>
      <h2 class="text text-[26px] font-bold tracking-wide mb-10">Transparent pricing that fits your budget</h2>
    </section>
    <div class="prices">
      <section class="login black">
          <div class="box flex flex-col items-start p-6">
              <img src="" class="w-12 h-12" alt="StarterImg"/>
              <h1 class=" mt-1.5">STARTER</h1>
              <h1 class=" text-[50px]  -mt-2 font-bold">$0</h1>
              <p class='mb-4'>
                  Your first itinerary is free!
              </p>
              <p>
                  You’re going to love it.
              </p>
          </div>
      </section>
      <section class="login black">
          <div class="box flex flex-col items-start p-6">
              <img src="" class="w-12 h-12"/>
              <h1 class=" mt-1.5">EXPLORER</h1>
              <h1 class=" text-[50px]  -mt-2 font-bold">$5</h1>
              <p class='mb-4'>
                  15 itineraries
              </p>
              <p>
                  For the curious traveler, dipping their toes in adventure.
              </p>
          </div>
      </section>
      <section class="login black">
          <div class="box flex flex-col items-start p-6">
              <img src="" class="w-12 h-12"/>
              <h1 class=" mt-1.5">VOYAGER</h1>
              <h1 class=" text-[50px]  -mt-2 font-bold">$15</h1>
              <p class='mb-4'>
                  30 itineraries
              </p>
              <p>
                  For the avid explorer, ready to roam further.
              </p>
          </div>
      </section>
      <section class="login black">
          <div class="box flex flex-col items-start p-6">
              <img src="" class="w-12 h-12"/>
              <h1 class=" mt-1.5">VETERAN</h1>
              <h1 class=" text-[50px]  -mt-2 font-bold">$30</h1>
              <p class='mb-4'>
                  60 itineraries
              </p>
              <p>
                  For the seasoned adventurer, conquering every corner of the map.
              </p>
          </div>
      </section>
    </div>
</section>
