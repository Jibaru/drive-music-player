<template>
  <teleport to="body">
    <div class="snackbar">
      <slot />
    </div>
  </teleport>
</template>
<script>
export default {
  emits: ["close"],
  props: {
    openDuration: {
      type: Number, // Milliseconds
      required: false,
      default: 3000,
    },
    open: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    open(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.$emit("close");
        }, this.openDuration);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.$emit("close");
    }, this.openDuration);
  },
};
</script>
<style scoped>
.snackbar {
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 1rem 1rem;
  box-shadow: 2px 2px 20px 5px rgba(0, 0, 0, 0.4);
  background-color: var(--app-primary-color);
  color: var(--app-primary-contrast-color);
  z-index: 90;
}
</style>
