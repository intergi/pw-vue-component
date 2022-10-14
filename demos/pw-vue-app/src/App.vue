<script setup>
import { Ramp, RampUnit } from '@playwire/pw-vue-component';
</script>

<template>
  <header
    style="display:flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;"
    >
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Vue App</h1>
  </header>

  <main>
    <!-- <Ramp publisherId="1016948" id="63673"> -->
    <Ramp publisherId="343" id="926">
      <RampUnit
        type="leaderboard_atf"
        selectorId="pwLeaderboardAtf"
        className="leaderboard"
      ></RampUnit>
      <RampUnit
        type="med_rect_atf"
        selectorId="pwMedRectAtf"
        className="med_rect"
      ></RampUnit>
    </Ramp>
  </main>
</template>
