<template>
  <base-dialog
    :title="title"
    :open="open"
    @close="$emit('cancel')"
    :type="type"
    footered
  >
    <slot></slot>
    <template #actions>
      <div v-if="!isLoading">
        <base-button @click="$emit('confirm')">
          Yes
        </base-button>
        <base-button @click="$emit('cancel')" color="danger">
          Cancel
        </base-button>
      </div>
      <base-spinner v-else centered />
    </template>
  </base-dialog>
</template>
<script>
export default {
  emits: ["cancel", "confirm"],
  props: {
    title: {
      type: String,
      required: true,
    },
    open: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: "small",
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
