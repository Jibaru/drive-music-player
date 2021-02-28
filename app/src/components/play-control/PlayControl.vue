<template>
  <div>
    <elapsed-time-bar
      :elapsed-time="elapsedTime"
      :total-time="totalTime"
      :disabled="!playEnabled"
      @changed-bar="$emit('changed-bar', $event)"
      @finished="$emit('play-finished')"
    />
    <div class="controls">
      <div class="reproduction">
        <base-icon-button
          icon="backward"
          unbackground
          @click="$emit('prev')"
          :disabled="!prevEnabled"
        />
        <base-icon-button
          :icon="statusIcon"
          unbackground
          big
          @click="changePlaybackStatus"
          :disabled="!playEnabled"
        />
        <base-icon-button
          icon="forward"
          unbackground
          @click="$emit('next')"
          :disabled="!nextEnabled"
        />
      </div>
      <volume-control
        :volume="currentVolume"
        @changed-volume="$emit('changed-volume', $event)"
        :disabled="!playEnabled"
      />
    </div>
  </div>
</template>
<script>
import ElapsedTimeBar from "./ElapsedTimeBar.vue";
import VolumeControl from "./VolumeControl.vue";

export default {
  components: {
    ElapsedTimeBar,
    VolumeControl,
  },
  emits: [
    "changed-bar",
    "changed-volume",
    "pause",
    "play",
    "play-finished",
    "next",
    "prev",
  ],
  props: {
    elapsedTime: {
      type: Number,
      required: true,
    },
    totalTime: {
      type: Number,
      required: true,
    },
    currentVolume: {
      type: Number,
      required: true,
    },
    isPlaying: {
      type: Boolean,
      required: true,
    },
    prevEnabled: {
      type: Boolean,
      required: true,
    },
    playEnabled: {
      type: Boolean,
      required: true,
    },
    nextEnabled: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    statusIcon() {
      return this.isPlaying ? "pause" : "play";
    },
  },
  methods: {
    changePlaybackStatus() {
      if (this.isPlaying) {
        this.$emit("pause");
      } else {
        this.$emit("play");
      }
    },
  },
};
</script>
<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
}

.reproduction {
  display: flex;
  align-items: center;
}
</style>
