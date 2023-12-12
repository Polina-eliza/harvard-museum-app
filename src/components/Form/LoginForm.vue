<template>
  <div class="login-form">
    <form class="login-form-main" @submit.prevent="loginFormSubmit">
      <label for="email" type="email" class="login-form-main__input-label"
        >Email
        <input v-model="email" class="login-form-main__input" placeholder="Enter your email..." />
      </label>
      <p v-if="errors.email" class="login-form-main__error-message">
        This field must be field in
      </p>

      <label for="password" type="password" class="login-form-main__input-label"
        >Password
        <input v-model="password" class="login-form-main__input" placeholder="Enter your password..."/>
      </label>
      <p v-if="errors.password" class="login-form-main__error-message">
        This field must be field in
      </p>

      <button class="login-form-main__btn-submit">
       Login
      </button>

      <div class="login-form-main__registration">
        Don't have an account?
        <router-link to="/signup"
          ><span class="login-form-main__registration-link"
            >Register</span
          ></router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import { validateLoginForm, loginUserWithEmailAndPassword } from "../../service/form/loginService";
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: {
        email: null,
        password: null,
      },
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    loginFormSubmit() {
      this.errors = validateLoginForm(this.email, this.password);

      if (!this.errors.email && !this.errors.password) {
        loginUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            alert("Login successful");
            this.router.push('/collections');
          })
          .catch(error => {
            alert(`Login failed: ${error.message}`);
            this.email = "";
            this.password = "";
          });
      }
    }
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";

.login-form {
  width: 900px;
  padding: 50px 0;

  &__title {
    margin-bottom: 20px;
  }

  &-main {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    background-color: $color-background-yellow;
    border-radius: 30px;
    margin: 0 auto;

    &__input {
      margin: 7px 0;
      width: 100%;
      padding: 5px 10px;
      border: 1px solid rgb(229, 224, 224);
      border-radius: 20px;
    }

    &__btn-submit {
      color: #231f20;
      font-family: "Futura", Helvetica, Arial, sans-serif;
      font-size: 15px;
      background-color: #fce373;
      padding: 5px 10px;
      text-align: center;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      background-color: $color-background-white;
      margin-top: 40px;
    }

    &__input-label {
      margin-top: 10px;
      font-family: $font-family-accent;
    }

    &__error-message {
      color: rgb(247, 41, 41);
      font-size: 14px;
    }

    &__registration {
      font-size: 16px;
      margin-top: 15px;

      &-link {
        font-weight: 600;
      }
    }
  }
}
</style>
