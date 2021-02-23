<template>
  <section>
    <div class="image-container">
      <img
        src="https://dummyimage.com/600x400/e8561c/e8e9f0"
        alt="song-image"
      />
    </div>
    <div class="info">
      <div>
        <h1>
          Songname Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Natus, totam suscipit. Sapiente, recusandae aliquid hic explicabo
          ipsum ipsa voluptas ea esse aliquam velit debitis eligendi voluptatum
          sint consequatur quisquam repellat!
        </h1>
        <p>
          <font-awesome-icon icon="history" /> Times Played: <span>10</span>
        </p>
        <p><font-awesome-icon icon="clock" /> Duration: <span>--:--</span></p>
      </div>
      <ul>
        <li>
          <base-icon-button icon="download" />
        </li>
        <li>
          <base-icon-button icon="list" />
        </li>
      </ul>
    </div>
    <play-control />
  </section>
</template>
<script>
import PlayControl from "../play-control/PlayControl.vue";

export default {
  components: {
    PlayControl,
  },
};
</script>
<style scoped>
section {
  background: var(--app-primary-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.image-container {
  max-width: 250px;
  height: 250px;
  border-radius: 0.3rem;
  overflow: hidden;
  margin: 0 auto;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  width: 100%;
  color: var(--app-primary-contrast-color);
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
}

.info h1 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.info p {
  opacity: 0.5;
}

.info li {
  list-style: none;
  display: inline-block;
}
</style>
