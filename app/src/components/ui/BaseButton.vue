<template>
  <button :class="classStyles" :style="styles">
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    dBlock: {
      type: Boolean,
      required: false,
      default: false,
    },
    mini: {
      type: Boolean,
      required: false,
      default: false,
    },
    flat: {
      type: Boolean,
      required: false,
      default: false,
    },
    bottomLeftRounded: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    classStyles() {
      return {
        "d-block": this.dBlock,
        mini: this.mini,
        flat: this.flat,
        "bottom-left-rounded": this.bottomLeftRounded,
      };
    },
  },
};
</script>
<style scoped>
button {
  background-color: var(--app-secondary-color);
  color: var(--app-secondary-contrast-color);
  padding: 0.8rem 1rem;
  border: none;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  margin: 0.1rem;
  box-sizing: border-box;
}

button:focus {
  outline-color: transparent;
  outline-style: none;
  outline-width: 0;
  opacity: 0.8;
}

.d-block {
  display: block;
  width: 99%;
}

.mini {
  padding: 0.3rem 0.5rem;
}

.flat {
  background-color: rgb(255, 255, 255, 0.8);
  color: black;
}

.bottom-left-rounded {
  border-radius: 0 0 50% 0;
}
</style>
