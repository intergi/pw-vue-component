<script>
export default {
  created() {
    window.ramp = window.ramp || {};
    window.ramp.que = window.ramp.que || [];
    window.ramp.passiveMode = true;
    window._pwRampComponentLoaded = window._pwRampComponentLoaded || false;

    this.oopUnits = [
      'trendi_slideshow',
      'trendi_video',
      'site_skin',
      'flex_leaderboard',
      'top_rail',
      'right_rail',
      'bottom_rail',
      'left_rail',
    ];
    if (!this.publisherId || !this.id) {
      console.error('publisherId and id are required props.');
      return;
    }
    this.init(this.publisherId, this.id);
  },
  name: 'Ramp',
  props: { publisherId: String, id: String },
  methods: {
    init: (publisherId, id) => {
      if (window._pwRampComponentLoaded) return;

      window._pwRampComponentLoaded = true;
      const configScript = document.createElement('script');
      configScript.src = `https://cdn.intergient.com/${publisherId}/${id}/ramp.js`;
      document.head.appendChild(configScript);

      window.ramp.que.push(() => {
        window.ramp
          .addUnits([
            { type: 'trendi_slideshow' },
            { type: 'trendi_video' },
            { type: 'site_skin' },
            { type: 'flex_leaderboard' },
            { type: 'top_rail' },
            { type: 'right_rail' },
            { type: 'bottom_rail' },
            { type: 'left_rail' },
          ])
          .then(() => {
            window.ramp.displayUnits();
          });
      });
    },
  },
};
</script>
<template>
  <slot></slot>
</template>
