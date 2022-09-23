<!-- DEMO RAMP SCRIPT-->
<script>
export default {
  created() {
    window.ramp = {
      mode: 'ramp',
      passiveMode: true,
    };

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
      const configScript = document.createElement('script');
      configScript.src = `https://cdn.intergient.com/${publisherId}/${id}/ramp.js`;
      document.head.appendChild(configScript);
      configScript.onload = () => {};
    },
  },
};
</script>
<template>
  <slot></slot>
</template>
