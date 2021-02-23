<template>
  <button>
    <font-awesome-icon :icon="icon" />
  </button>
</template>
<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
button {
  background-color: var(--app-secondary-color);
  color: var(--app-secondary-contrast-color);
  border: none;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin: 0.1rem;
  box-sizing: border-box;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button:focus {
  outline-color: transparent;
  outline-style: none;
  outline-width: 0;
  opacity: 0.8;
}

.mini {
  padding: 0.3rem 0.5rem;
}
</style>
