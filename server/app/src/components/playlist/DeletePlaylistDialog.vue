import { mapActions } from 'vuex';
<template>
  <base-confirm-dialog
    title="Delete playlist"
    :open="open && hasPlaylist"
    @confirm="deletePlaylist"
    @cancel="$emit('close')"
    :is-loading="isLoading"
    type="tiny"
  >
    <div class="delete-message">
      <p>
        Are you sure to delete playlist? <br />
        <b>{{ playlistName }}</b>
      </p>
    </div>
  </base-confirm-dialog>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  emits: ["close"],
  props: {
    playlistId: {
      type: Number,
      required: false,
    },
    playlistName: {
      type: String,
      required: false,
    },
    open: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      isLoading: "playlist/deletingPlaylist",
    }),
    hasPlaylist() {
      return !!this.playlistId && !!this.playlistName;
    },
  },
  methods: {
    ...mapActions({
      deletePlaylistAction: "playlist/deletePlaylist",
    }),
    async deletePlaylist() {
      await this.deletePlaylistAction({ playlistId: this.playlistId });
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.delete-message {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
