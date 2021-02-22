<template>
  <div id="mobile-view-container">
    <main>
      <router-view></router-view>
    </main>
    <the-navbar></the-navbar>
  </div>
</template>
<script>
import TheNavbar from "../nav/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
};
</script>
<style scoped>
#mobile-view-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}

main {
  flex: 1;
}
</style>
