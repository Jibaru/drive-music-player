<template>
  <div>
    <elapsed-time-bar :elapsed-time="111" :total-time="161" />
    <div class="controls">
      <div class="reproduction">
        <base-icon-button icon="backward" unbackground />
        <base-icon-button icon="play" unbackground big />
        <base-icon-button icon="forward" unbackground />
      </div>
      <volume-control :volume="45" />
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
