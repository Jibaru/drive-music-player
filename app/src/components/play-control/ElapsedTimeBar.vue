<template>
  <div class="elapsed-time-bar">
    <div class="time">
      <span class="elapsed-time">{{ mappedElapsedTime }}</span>
      <span class="total-time">{{ mappedTotalTime }}</span>
    </div>
    <div class="bar-container" @click="changeTime" ref="bar-container">
      <div class="bar" ref="bar" />
    </div>
  </div>
</template>
<script>
export default {
  emits: ["changed-bar", "finished"],
  props: {
    elapsedTime: {
      type: Number,
      required: true,
    },
    totalTime: {
      type: Number,
      required: true,
    },
  },
  computed: {
    mappedElapsedTime() {
      return this.mapDuration(this.elapsedTime);
    },
    mappedTotalTime() {
      return this.mapDuration(this.totalTime);
    },
  },
  watch: {
    elapsedTime(newVal) {
      const percentage = (newVal / this.totalTime) * 100;
      this.setTime(percentage);

      // After 5 seconds to end emits finished
      if (newVal.toFixed(0) == (this.totalTime - 5).toFixed(0)) {
        this.$emit("finished");
      }
    },
    totalTime(newVal) {
      const percentage = (this.elapsedTime / newVal) * 100;
      this.setTime(percentage);
    },
  },
  methods: {
    changeTime(e) {
      const bcr = this.$refs["bar-container"].getBoundingClientRect();
      const percentage = ((e.clientX - bcr.left) / bcr.width) * 100;
      const newElapsedTime = (this.totalTime * percentage) / 100;
      this.setTime(percentage);
      this.$emit("changed-bar", {
        percentage,
        newElapsedTime,
      });
    },
    setTime(percentage) {
      this.$refs.bar.style.width = `${percentage}%`;
    },
    mapDuration(millsecDuration) {
      return new Date(millsecDuration * 1000).toISOString().substr(14, 5);
    },
  },
  mounted() {
    const percentage = (this.elapsedTime / this.totalTime) * 100;
    this.setTime(percentage);
  },
};
</script>
<style scoped>
.elapsed-time-bar {
  width: 100%;
}

.time {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: var(--app-primary-contrast-color);
  font-size: 0.8rem;
}

.bar-container {
  width: 100%;
  height: 0.8rem;
  border: 1px solid rgb(58, 49, 49);
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: var(--app-primary-color);
}

.bar {
  height: 100%;
  background-color: var(--app-secondary-color);
  border-radius: 0.5rem;
}
</style>
