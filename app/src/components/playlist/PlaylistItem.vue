<template>
  <li class="playlist-item" @click="$emit('click')">
    <div class="info">
      <h2>{{ playlistName }}</h2>
      <p>{{ countSongs }} songs</p>
    </div>
    <div class="actions">
      <base-button mini color="danger" @click.stop="$emit('delete')">
        <base-icon icon="trash-alt" /> Delete
      </base-button>
      <base-button mini @click.stop="$emit('add-song')">
        <base-icon icon="plus" /> Add song
      </base-button>
    </div>
  </li>
</template>
<script>
export default {
  emits: ["click", "delete", "add-song"],
  props: {
    playlistId: {
      type: Number,
      required: true,
    },
    playlistName: {
      type: String,
      required: true,
    },
    countSongs: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style scoped>
.playlist-item {
  list-style: none;
  margin: 0.5rem;
  padding: 0.5rem 0.8rem;
  border-radius: 0.4rem;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  width: 97%;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.info {
  text-align: start;
  margin: 0 1rem;
  width: 100%;
}

.info h2 {
  color: var(--app-primary-contrast-color);
  font-size: 1.1rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.info p {
  color: var(--app-primary-contrast-color);
  font-size: 0.8rem;
  opacity: 0.5;
  margin-top: 0.2rem;
}

.actions {
  min-width: 5rem;
  text-align: end;
}
</style>
