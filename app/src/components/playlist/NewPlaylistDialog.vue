<template>
  <base-dialog :title="title" :open="open" @close="close" type="small">
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="new-playlist-name">Name</label>
        <input
          type="text"
          id="new-playlist-name"
          v-model.trim="playlistName.val"
        />
        <span v-show="!playlistName.isValid" class="error">
          Playlist name should not be blank
        </span>
      </div>
      <base-button v-if="!isLoading">
        <b>Create new Playlist</b>
      </base-button>
      <base-spinner v-else centered />
    </form>
  </base-dialog>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  emits: ["close"],
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      title: "New Playlist",
      playlistName: {
        val: "",
        isValid: true,
      },
    };
  },
  computed: {
    ...mapGetters({
      isLoading: "playlist/creatingPlaylist",
    }),
  },
  watch: {
    open() {
      this.clearForm();
    },
  },
  methods: {
    ...mapActions({
      createPlaylist: "playlist/createPlaylist",
    }),
    close() {
      this.$emit("close");
    },
    clearForm() {
      this.playlistName.val = "";
      this.playlistName.isValid = true;
    },
    isValidForm() {
      if (this.playlistName.val === "") {
        this.playlistName.isValid = false;
      } else {
        this.playlistName.isValid = true;
      }
      return this.playlistName.isValid;
    },
    async submitForm() {
      if (!this.isValidForm()) {
        return;
      }
      await this.createPlaylist({
        name: this.playlistName.val,
      });
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.form-control {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}

.form-control label {
  color: var(--app-primary-color);
  font-size: 0.9rem;
}

.form-control input {
  height: 1.6rem;
  border: 1px solid var(--app-secondary-color);
  border-radius: 0.2rem;
  background-color: white;
  font-size: 1rem;
  padding: 1rem 0.5rem;
}

.form-control input:focus,
.form-control input:active {
  outline: none;
  box-shadow: 0 0 2px 1px var(--app-secondary-color);
}

.form-control .error {
  font-size: 0.8rem;
  text-align: end;
  color: var(--app-danger-color);
}
</style>
