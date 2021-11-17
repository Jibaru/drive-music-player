<template>
  <button :class="classStyles" @click="emitClick">
    <base-icon :icon="icon" />
  </button>
</template>
<script>
export default {
  emits: ["click"],
  props: {
    icon: {
      type: [Array, String],
      required: true,
    },
    unbackground: {
      type: Boolean,
      required: false,
      default: false,
    },
    big: {
      type: Boolean,
      required: false,
      default: false,
    },
    mini: {
      type: Boolean,
      required: false,
      default: false,
    },
    color: {
      type: String,
      required: false,
      default: "standart",
      validator: (val) => {
        const values = ["standart", "warning", "danger"];
        return values.find((v) => v !== val);
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
        "backgrounded-btn": !this.unbackground,
        "unbackgrounded-btn": this.unbackground,
        big: this.big,
        mini: this.mini,
        [this.color]: true,
        "backgrounded-disabled": this.disabled && !this.unbackground,
        "unbackgrounded-disabled": this.disabled && this.unbackground,
      };
    },
  },
  methods: {
    emitClick(e) {
      if (!this.disabled) {
        this.$emit("click", e);
      }
    },
  },
};
</script>
<style scoped>
.backgrounded-btn {
  background-color: var(--app-secondary-color);
  color: var(--app-secondary-contrast-color);
  border: none;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin: 0.1rem;
  box-sizing: border-box;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.backgrounded-btn:focus {
  outline-color: transparent;
  outline-style: none;
  outline-width: 0;
  opacity: 0.8;
}

.unbackgrounded-btn {
  margin: 0.5rem;
  padding: 0.1rem;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  color: var(--app-primary-contrast-color);
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
}

.big {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2rem;
}

.mini {
  width: 1.8rem;
  height: 1.8rem;
  font-size: 0.7rem;
}

.warning {
  background-color: var(--app-warning-color);
  color: var(--app-warning-contrast-color);
}

.danger {
  background-color: var(--app-danger-color);
  color: var(--app-danger-contrast-color);
}

.backgrounded-disabled {
  color: var(--app-disabled-contrast-color);
  background-color: var(--app-disabled-color);
  cursor: default;
}

.backgrounded-disabled:hover,
.backgrounded-disabled:active,
.backgrounded-disabled:focus {
  opacity: 1;
}

.unbackgrounded-disabled {
  color: var(--app-disabled-contrast-color);
  cursor: default;
}

.unbackgrounded-disabled:hover {
  background-color: none !important;
}

.unbackgrounded-disabled:focus {
  outline: none;
}
</style>
