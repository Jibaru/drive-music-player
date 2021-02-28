<template>
  <font-awesome-icon :icon="icon" :key="updateCounter" />
</template>
<script>
export default {
  props: {
    icon: {
      type: [Array, String],
      required: true,
    },
  },
  data() {
    return {
      updateCounter: 0,
    };
  },
  watch: {
    icon() {
      this.updateCounter++;
    },
  },
};
</script>
