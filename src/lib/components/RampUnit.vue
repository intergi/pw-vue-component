<script>
export default {
  data() {
    return {
      inPageUnits: [
        'leaderboard_atf',
        'leaderboard_btf',
        'med_rect_atf',
        'med_rect_btf',
        'sky_atf',
        'sky_btf',
      ],
      rendered: false,
      unitToAdd: {},
    };
  },
  created() {
    window.ramp = window.ramp || {};
    window.ramp.que = window.ramp.que || [];

    this.unitToAdd = this.getInitialUnit();
  },
  mounted() {
    if (this.rendered) return;
    this.rendered = true;
    window.ramp.que.push(() => {
      window.ramp
        .addUnits([this.unitToAdd])
        .catch((e) => {
          console.warn(e);
        })
        .finally(() => {
          window.ramp.displayUnits();
        });
    });
  },
  unmounted() {
    window.ramp.que.push(() => {
      this.cleanUp(this.unitToAdd.selectorId);
    });
  },
  name: 'RampUnit',
  props: { selectorId: String, type: String, className: String },
  methods: {
    // find a new unique element ID to place this ad
    getUniqueId() {
      let base = `pw-${this.type}`;
      let idx = 1;
      while (document.getElementById(`${base}${idx}`)) {
        idx++;
      }

      return `${base}${idx}`;
    },
    // sets up the object and adds a selectorId if necessary
    getInitialUnit() {
      const unit = {
        type: this.type,
      };
      if (this.inPageUnits.includes(this.type)) {
        unit.selectorId = this.getUniqueId(this.type);
      }
      return unit;
    },

    // destroy the unit when componenent unmounts
    cleanUp(parentId) {
      // possible that component was removed before first ad was created
      if (!window.ramp.setttings || !window.ramp.settings.slots) return;

      let slotToRemove = null;
      Object.entries(window.ramp.settings.slots).forEach(([slotName, slot]) => {
        if (
          slot.element &&
          slot.element.parentElement &&
          slot.element.parentElement.id === parentId
        ) {
          slotToRemove = slotName;
        }
      });

      if (slotToRemove) {
        window.ramp.destroyUnits(slotToRemove);
      }
    },
  },
};
</script>
<template>
  <div v-bind:id="unitToAdd.selectorId" v-bind:className="className"></div>
</template>
