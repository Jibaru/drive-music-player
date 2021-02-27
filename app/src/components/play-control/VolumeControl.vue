<template>
  <div class="volume-control">
    <div class="bar-container" v-show="barIsVisible">
      <div
        class="volume-bar-container"
        ref="volume-bar-container"
        @click="changeVolume"
      >
        <div class="volume-bar" ref="volume-bar" />
      </div>
    </div>
    <base-icon-button icon="volume-down" unbackground @click="toggleBar" />
  </div>
</template>
<script>
export default {
  emits: ["changed-volume"],
  props: {
    volume: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      barIsVisible: false,
    };
  },
  watch: {
    volume(newVal) {
      this.setVolume(newVal);
    },
  },
  methods: {
    toggleBar() {
      this.barIsVisible = !this.barIsVisible;
    },
    changeVolume(e) {
      const bcr = this.$refs["volume-bar-container"].getBoundingClientRect();
      const percentage = ((e.clientY - bcr.bottom) / bcr.height) * -100;
      this.setVolume(percentage);
      this.$emit("changed-volume", parseInt(percentage.toFixed(0)));
    },
    setVolume(volume) {
      this.$refs["volume-bar"].style.height = `${volume}%`;
    },
  },
  mounted() {
    this.setVolume(this.volume);
  },
};
</script>
<style scoped>
.volume-control {
  position: relative;
}

.bar-container {
  height: 7rem;
  width: 1.8rem;
  background-color: var(--app-primary-contrast-color);
  border-radius: 0.5rem;
  margin: 0 auto;
  padding: 0.5rem 0;
  position: absolute;
  bottom: 40px;
  left: 10px;
  z-index: 12;
}

.volume-bar-container {
  width: 0.5rem;
  height: 100%;
  background-color: #ccc;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
}

.volume-bar {
  width: 100%;
  border-radius: 1rem;
  background-color: var(--app-secondary-color);
}
</style>
