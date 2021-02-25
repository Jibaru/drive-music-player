<template>
  <main>
    <div class="card">
      <h1>Drive Music Player</h1>
      <form @submit.prevent="login">
        <div class="form-control">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model.trim="username.val"
            @keyup="isValidForm()"
          />
          <span v-show="!username.isValid" class="error">
            Username is invalid
          </span>
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model.trim="password.val"
            @keyup="isValidForm()"
          />
          <span v-show="!password.isValid" class="error">
            Password is invalid
          </span>
        </div>
        <base-button v-if="!isLoading" d-block>
          <b>Start!</b>
        </base-button>
        <base-spinner v-else centered />
        <div class="card-footer">
          <router-link to="/register">Register new account</router-link>
        </div>
      </form>
    </div>
    <div class="background-card"></div>
    <footer>
      <p>
        Created By
        <a href="https://github.com/Jibaru" target="_blank">Jibaru</a>
      </p>
    </footer>
  </main>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      username: {
        val: "",
        isValid: true,
      },
      password: {
        val: "",
        isValid: true,
      },
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/isAuthenticated",
    }),
  },
  watch: {
    isAuthenticated(newVal) {
      if (newVal) {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 576) {
          this.$router.push("/mobile");
        } else {
          this.$router.push("/home");
        }
      }
    },
  },
  methods: {
    ...mapActions({
      loginAction: "auth/login",
    }),
    isValidForm() {
      if (this.username.val === "") {
        this.username.isValid = false;
      } else {
        this.username.isValid = true;
      }

      if (this.password.val === "") {
        this.password.isValid = false;
      } else {
        this.password.isValid = true;
      }

      return this.username.isValid && this.password.isValid;
    },
    async login() {
      if (!this.isValidForm()) {
        return;
      }

      this.isLoading = true;

      await this.loginAction({
        username: this.username.val,
        password: this.password.val,
      });

      this.isLoading = false;
    },
  },
};
</script>
<style scoped>
main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--app-primary-color);
}

.card {
  max-width: 20rem;
  width: 100%;
  background-color: var(--app-primary-contrast-color);
  padding: 2rem 3rem;
  border-radius: 0.3rem;
  box-shadow: 2px 2px 20px 5px rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 2;
}

@media (min-width: 530px) {
  .card {
    max-width: 20rem;
    margin-right: 40%;
  }
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

.card-footer {
  margin-top: 1rem;
  text-align: center;
}

.background-card {
  position: absolute;
  width: 100%;
  height: 90%;
  background-color: var(--app-secondary-color);
  z-index: 1;
  border-radius: 5rem 0 5rem 0;
}

@media (min-width: 530px) {
  .background-card {
    right: 0;
    width: 70%;
    height: 90%;
    border-radius: 5rem 0 10rem 0;
  }
}

footer {
  position: absolute;
  bottom: 0.5rem;
  color: var(--app-primary-contrast-color);
  z-index: 2;
}

footer a {
  color: var(--app-primary-contrast-color);
  font-weight: bold;
}
</style>
