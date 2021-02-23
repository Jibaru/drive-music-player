<template>
  <button :class="classStyles">
    <font-awesome-icon :icon="icon" />
  </button>
</template>
<script>
export default {
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
  },
  computed: {
    classStyles() {
      return {
        "backgrounded-btn": !this.unbackground,
        "unbackgrounded-btn": this.unbackground,
        big: this.big,
      };
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
}

.unbackgrounded-btn:hover {
  background-color: black;
}

.big {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2rem;
}
</style>
