<template>
  <main>
    <div class="card">
      <h1>Register a new Account</h1>
      <form @submit.prevent="submitForm">
        <section v-show="!isPreRegistered">
          <div class="form-control">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              v-model.trim="username.val"
              @keyup="isPreRegisterFormValid()"
            />
            <span v-show="!username.isValid" class="error">
              Username should not be blank
            </span>
          </div>
          <div class="form-control">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model.trim="email.val"
              @keyup="isPreRegisterFormValid()"
            />
            <span v-show="!email.isValid" class="error">
              Email should not be blank
            </span>
          </div>
          <div class="form-control">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model.trim="password.val"
              @keyup="isPreRegisterFormValid()"
              autocomplete
            />
            <span v-show="!password.isValid" class="error">
              Password should not be blank and must be at least 6 characters
            </span>
          </div>
          <base-button v-if="!isLoading" d-block>
            <b>Sign In</b>
          </base-button>
          <base-spinner v-else centered />
        </section>
        <section v-show="isPreRegistered">
          <div class="form-control">
            <label for="code">Verification Code</label>
            <input
              type="text"
              id="code"
              class="verification-input"
              v-model.trim="pin.val"
              @keyup="isRegisterFormValid()"
            />
            <span v-show="!pin.isValid" class="error">
              Pin should not be blank
            </span>
          </div>
          <base-button d-block v-if="!isLoading">
            <b>Check and Finish</b>
          </base-button>
          <base-spinner v-else centered />
        </section>
        <div class="card-footer">
          <router-link to="/login">Let's Start!</router-link>
        </div>
      </form>
    </div>
    <div class="background-card">
      <img
        :src="backgroundImageUrl"
        alt="background"
        class="background-image"
      />
    </div>
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
      email: {
        val: "",
        isValid: true,
      },
      password: {
        val: "",
        isValid: true,
      },
      pin: {
        val: "",
        isValid: true,
      },
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      isPreRegistered: "auth/isPreRegistered",
      registered: "auth/registered",
    }),
    backgroundImageUrl() {
      return require("@/assets/img/background.svg");
    },
  },
  watch: {
    registered(newVal) {
      if (newVal) {
        this.clearForm();
      }
    },
  },
  methods: {
    ...mapActions({
      preRegisterAction: "auth/preRegister",
      registerAction: "auth/register",
      newRegister: "auth/newRegister",
    }),
    isPreRegisterFormValid() {
      if (this.username.val === "") {
        this.username.isValid = false;
      } else {
        this.username.isValid = true;
      }

      if (this.email.val === "") {
        this.email.isValid = false;
      } else {
        this.email.isValid = true;
      }

      if (this.password.val === "" || this.password.val.length < 6) {
        this.password.isValid = false;
      } else {
        this.password.isValid = true;
      }

      return (
        this.username.isValid && this.email.isValid && this.password.isValid
      );
    },
    isRegisterFormValid() {
      if (this.pin.val === "") {
        this.pin.isValid = false;
      } else {
        this.pin.isValid = true;
      }

      return this.pin.isValid;
    },
    async submitForm() {
      this.isLoading = true;

      if (!this.isPreRegistered) {
        if (!this.isPreRegisterFormValid()) {
          this.isLoading = false;
          return;
        }

        this.newRegister();
        await this.preRegisterAction({
          username: this.username.val,
          email: this.email.val,
          password: this.password.val,
        });
      } else {
        if (!this.isRegisterFormValid()) {
          this.isLoading = false;
          return;
        }

        await this.registerAction({
          username: this.username.val,
          email: this.email.val,
          password: this.password.val,
          pin: this.pin.val,
        });
      }

      this.isLoading = false;
    },
    clearForm() {
      this.username.val = "";
      this.email.val = "";
      this.password.val = "";
    },
  },
  beforeRouteEnter(_, _2, next) {
    next((vm) => {
      vm.newRegister();
    });
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

.verification-input {
  letter-spacing: 5px;
  text-align: center;
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
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-image {
  height: 100%;
  object-fit: cover;
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
