<template>
  <button :class="classStyles" :disabled="disabled">
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
    bottomLeftRounded: {
      type: Boolean,
      required: false,
      default: false,
    },
    color: {
      type: String,
      required: false,
      default: "standard",
      validator: (val) => {
        const validValues = ["standard", "danger", "warning", "light"];
        return !!validValues.find((v) => v === val);
      },
    },
    disabled: {
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
        "bottom-left-rounded": this.bottomLeftRounded,
        "standard-btn": this.color === "standard",
        "warning-btn": this.color === "warning",
        "danger-btn": this.color === "danger",
        "light-btn": this.color === "light",
        "disabled-btn": this.disabled,
      };
    },
  },
};
</script>
<style scoped>
button {
  padding: 0.8rem 1rem;
  border: none;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  margin: 0.1rem;
  box-sizing: border-box;
  cursor: pointer;
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

.bottom-left-rounded {
  border-radius: 0 0 50% 0;
}

.standard-btn {
  background-color: var(--app-secondary-color);
  color: var(--app-secondary-contrast-color);
}

.warning-btn {
  background-color: var(--app-warning-color);
  color: var(--app-warning-contrast-color);
}

.danger-btn {
  background-color: var(--app-danger-color);
  color: var(--app-danger-contrast-color);
}

.light-btn {
  background-color: var(--app-light-color);
  color: var(--app-light-contrast-color);
}

.disabled-btn {
  background-color: var(--app-disabled-color);
  color: var(--app-disabled-contrast-color);
  box-shadow: none;
}
</style>
