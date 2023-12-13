<template>
  <div class="login-form">
    <form class="login-form-main" @submit.prevent="registrationFormSubmit">
      <label for="email" class="login-form-main__input-label"
        >Email
        <input
          type="email"
          v-model="email"
          class="login-form-main__input"
          placeholder="Enter your email..."
        />
      </label>
      
      <label for="password" class="login-form-main__input-label"
        >Password
        <input
          v-model="password"
          class="login-form-main__input"
          placeholder="Enter your password..."
        />
      </label>

      <label for="repeatPassword" class="login-form-main__input-label"
        >Repeat Password
        <input
          v-model="repeatPassword"
          class="login-form-main__input"
          placeholder="Repeat your password..."
        />
      </label>

      <button @click="userRegistration" class="login-form-main__btn-submit">
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
import { ref } from 'vue';
import { validateRegistrationForm, registerUser } from "../../service/form/registrationService";
import { useRouter } from "vue-router";
import { createToaster } from "@meforma/vue-toaster";

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const repeatPassword = ref('');
    const errors = ref({
      email: null,
      password: null,
      repeatPassword: null,
    });
    const router = useRouter();
    const toaster = createToaster();

    const registrationFormSubmit = async () => {
      errors.value = validateRegistrationForm(email.value, password.value, repeatPassword.value);

      if (!errors.value.email && !errors.value.password && !errors.value.repeatPassword) {
        try {
          await registerUser(email.value, password.value);
          toaster.success('Successfully registered');
          router.push('/collections');
        } catch (error) {
          toaster.error(`Registration failed: ${error.message}`);
        }
      } else {
        if (errors.value.email) {
          toaster.error(errors.value.email);
        }
        if (errors.value.password) {
          toaster.error(errors.value.password);
        }
        if (errors.value.repeatPassword) {
          toaster.error(errors.value.repeatPassword);
        }
      }
    };

    return {
      email,
      password,
      repeatPassword,
      errors,
      registrationFormSubmit,
    };
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
      background-color: $color-background-white;
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
