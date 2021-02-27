<template>
  <div>
    <elapsed-time-bar
      :elapsed-time="elapsedTime"
      :total-time="totalTime"
      @changed-bar="$emit('changed-bar', $event)"
      @finished="$emit('play-finished')"
    />
    <div class="controls">
      <div class="reproduction">
        <base-icon-button icon="backward" unbackground />
        <base-icon-button
          :icon="statusIcon"
          unbackground
          big
          @click="changePlaybackStatus"
          :key="refreshIcon"
        />
        <base-icon-button icon="forward" unbackground />
      </div>
      <volume-control
        :volume="currentVolume"
        @changed-volume="$emit('changed-volume', $event)"
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
  emits: ["changed-bar", "changed-volume", "pause", "play", "play-finished"],
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
  },
  data() {
    return {
      refreshIcon: 0,
    };
  },
  computed: {
    statusIcon() {
      return this.isPlaying ? "pause" : "play";
    },
  },
  watch: {
    isPlaying() {
      this.refreshIcon++;
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
