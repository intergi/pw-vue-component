<script setup>
import { Ramp, RampUnit } from '@intergi/pw-vue-component';
</script>

<template>
  <header>
    <img
      alt="PW logo"
      class="logo"
      src="./assets/logo.webp"
    />
  </header>

  <main>
    <Ramp publisherId="1016948" id="63673">
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
