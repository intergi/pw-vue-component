<!-- DEMO RAMP UNIT-->
<script>
export default {
  created() {
    window.ramp = window.ramp || {};
    window.ramp.que = window.ramp.que || [];
  },
  mounted() {
    window.ramp.que.push(() => {
      window.ramp
        .addUnits([
          {
            selectorId: this.selectorId,
            type: this.type,
          },
        ])
        .then(() => {
          window.ramp.displayUnits();
        })
        .catch((e) => {
          console.log(e);
        });
    });
  },
  name: 'RampUnit',
  props: { selectorId: String, type: String, className: String },
};
</script>
<template>
  <div
    v-bind:data-pw-desk="type"
    v-bind:id="selectorId"
    v-bind:className="className"
  ></div>
</template>
