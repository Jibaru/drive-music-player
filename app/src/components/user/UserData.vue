<template>
  <section class="user-data">
    <div class="user-info">
      <div>
        <base-button icon bottom-left-rounded color="light">
          <font-awesome-icon icon="sign-out-alt" />
        </base-button>
      </div>
      <div>
        <h1>Ignacio</h1>
      </div>
    </div>
    <div class="user-buttons">
      <base-button mini color="warning">
        <font-awesome-icon icon="redo" /> Refresh Drive
      </base-button>
      <base-button mini>
        <font-awesome-icon icon="edit" /> Change Drive Root
      </base-button>
    </div>
  </section>
</template>
<style scoped>
.user-data {
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: 1;
  grid-template-areas: "data button";
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  padding-bottom: 1rem;
}

.user-info {
  grid-area: data;
}

.user-info h1 {
  color: var(--app-primary-contrast-color);
  font-size: 2rem;
}

.user-info div:last-child {
  padding: 0.5rem;
}

.user-buttons {
  grid-area: button;
  text-align: end;
  padding-top: 1rem;
  padding-right: 0.5rem;
}
</style>
