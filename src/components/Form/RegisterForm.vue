<template>
    <div class="login-form">
      <form class="login-form-main" @submit.prevent="registrationFormSubmit">
        <label for="username" class="login-form-main__input-label"
          >Username
          <input v-model="username" class="login-form-main__input" />
        </label>
        <p v-if="errors.username" class="login-form-main__error-message">
          This field must be field in
        </p>
  
        <label for="email" class="login-form-main__input-label"
          >Email
          <input type="email" v-model="email" class="login-form-main__input" />
        </label>
        <p v-if="errors.email" class="login-form-main__error-message">
          This field must be field in
        </p>

        <label for="password" class="login-form-main__input-label"
          >Password
          <input v-model="password" class="login-form-main__input" />
        </label>
        <p v-if="errors.password" class="login-form-main__error-message">
          This field must be field in
        </p>

        <label for="repeatPassword" class="login-form-main__input-label"
          >Repeat Password
          <input v-model="repeatPassword" class="login-form-main__input" />
        </label>
        <p v-if="errors.repeatPassword" class="login-form-main__error-message">
          This field must be field in
        </p>

        <button @click="formSubmit" class="login-form-main__btn-submit">
          Register
        </button>

        <div class="login-form-main__registration">
          Have an account?
          <router-link to="/login"
            ><span class="login-form-main__registration-link"
              >Login</span
            ></router-link
          >
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { validateRegistrationForm } from "../../service/form/registrationService";
  
  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
      repeatPassword: "",
        errors: {
          username: null,
          email: null,
          password: null,
          repeatPassword: null
        },
      };
    },
    methods: {
      registrationFormSubmit() {
        this.errors = validateRegistrationForm(this.username, this.email, this.password, this.repeatPassword);
  
        if (!this.errors.username && !this.errors.email && !this.error.password && !this.error.repeatPassword) {
          alert("Your registration is successful");
        }
        this.email = "";
        this.username = "";
        this.password = "";
        this.repeatPassword  = "";
      },
    },
  };
  </script>
  
  <style lang="scss">
  @import "../../scss/variables";
  
  .login-form {
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
        background-color: $color-background-white
      }
  
      &__btn-submit {
        color: #231f20;
        font-family: $font-family-accent;
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
  