<template>
  <div class="login-form">
    <form class="login-form-main" @submit.prevent="loginFormSubmit">
      <label for="email" type="email" class="login-form-main__input-label"
        >Email
        <input
          v-model="email"
          class="login-form-main__input"
          placeholder="Enter your email..."
        />
      </label>

      <label for="password" type="password" class="login-form-main__input-label"
        >Password
        <input
          v-model="password"
          class="login-form-main__input"
          placeholder="Enter your password..."
        />
      </label>

      <button class="login-form-main__btn-submit">Login</button>

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
import { ref, reactive } from "vue";
import {
  validateLoginForm,
  loginUserWithEmailAndPassword,
} from "../../service/auth/loginService";
import { useRouter } from "vue-router";
import { createToaster } from "@meforma/vue-toaster";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const errors = reactive({
      email: null,
      password: null,
    });
    const toaster = createToaster();
    const router = useRouter();

    const loginFormSubmit = async () => {
      const validationErrors = validateLoginForm(email.value, password.value);

      if (!validationErrors.email && !validationErrors.password) {
        try {
          await loginUserWithEmailAndPassword(email.value, password.value);
          toaster.success("Login successful");
          router.push("/collections");
        } catch (error) {
          handleAuthError(error, toaster);
        }
      } else {
        if (validationErrors.email) {
          toaster.error(validationErrors.email);
        }
        if (validationErrors.password) {
          toaster.error(validationErrors.password);
        }
      }
    };

    return {
      email,
      password,
      errors,
      loginFormSubmit,
    };
  },
};

function handleAuthError(error, toaster) {
  let errorMessage = "";
  switch (error.code) {
    case "auth/invalid-email":
      errorMessage = "Invalid email";
      break;
    case "auth/user-not-found":
      errorMessage = "No account with that email was found";
      break;
    case "auth/wrong-password":
      errorMessage = "Incorrect password";
      break;
    default:
      errorMessage = "Email or password was incorrect";
  }
  toaster.error(errorMessage);
}
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
