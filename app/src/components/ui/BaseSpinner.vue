<template>
  <div
    class="container"
    :class="{ center: centered, 'full-height': fullHeight }"
  >
    <div class="loader" :style="styles"></div>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: Number,
      required: false,
      default: 3,
    },
    centered: {
      type: Boolean,
      required: false,
      default: false,
    },
    fullHeight: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    styles() {
      return {
        width: `${this.size}rem`,
        height: `${this.size}rem`,
      };
    },
  },
};
</script>
<style scoped>
.container {
  width: fit-content;
}

.loader {
  border: 0.5rem solid #f3f3f3;
  border-top: 0.5rem solid var(--app-secondary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.center {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-height {
  height: 100%;
}
</style>
