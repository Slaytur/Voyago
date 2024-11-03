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
      padding-bottom: 30px;
      font-size: 50px;
    }
    #grad {
      padding: 0px 30px 0px; 
    }
</style>

<section class="py-48">
    <section class="top">
      <div class="text">
        World-class 
        <div id="grad" class="text">
            <GradientText interval={210} text="adventures" />
        </div>
          within reach
      </div>
    </section>
    <section class="login">
        <div class="box">
          yes 
        </div>
    </section>
</section>
