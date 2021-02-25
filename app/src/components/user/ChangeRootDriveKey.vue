<template>
  <div class="main">
    <div class="card">
      <h1>Set the google drive root folder key</h1>
      <ol class="step-list">
        <li>
          Enter to
          <a href="https://drive.google.com/" target="_blank">Google Drive</a>
        </li>
        <li>Select folder to store your music</li>
        <li>Share with read permissions</li>
        <li>Copy the last path of the url (this is your <b>key</b>)</li>
        <li>Paste the copied <b>key</b> into this form</li>
      </ol>
      <form @submit.prevent="login">
        <div class="form-control">
          <label for="root-drive-key">Drive Root Folder Key</label>
          <input
            type="text"
            id="root-drive-key"
            v-model.trim="rootDriveKey.val"
          />
          <span v-show="!rootDriveKey.isValid" class="error">
            Root Drive Key should not be blank
          </span>
        </div>
        <base-button v-if="!isLoading" d-block>
          <b>Set this folder</b>
        </base-button>
        <base-spinner v-else centered />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rootDriveKey: {
        val: "",
        isValid: true,
      },
      isLoading: false,
    };
  },
};
</script>
<style scoped>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--app-primary-color);
}

.card {
  max-width: 40rem;
  width: 100%;
  background-color: var(--app-primary-contrast-color);
  padding: 2rem 3rem;
  border-radius: 0.3rem;
  box-shadow: 2px 2px 20px 5px rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 2;
}

.step-list {
  margin-left: 1rem;
}

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
