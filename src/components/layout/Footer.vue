<template>
  <footer class="footer">
    <form class="footer-email-form">
      <h3 class="footer-email-form__subheader" @sumbit.prevent="submitForm">
        Harvard Art Museum likes to send you emails
      </h3>
      <div class="footer-email-form__input-group">
        <input
          class="footer-email-form__input footer-email-form__input--name"
          type="text"
          placeholder="Name"
          id="name"
          v-model="name"
        />
        <input
          class="footer-email-form__input footer-email-form__input--email"
          placeholder="Email"
          id="email"
          v-model="email"
        />
      </div>
      <button
        class="btn footer-email-form__btn--signup"
        @click.prevent="submitData"
      >
        Sign up
      </button>
    </form>

    <ul class="footer-socials">
      <li class="footer-socials__item">
        <a href="#"
          ><img src="../../assets/svg/facebook.svg" alt="Facebook Icon"
        /></a>
      </li>
      <li class="footer-socials__item">
        <a href="#"
          ><img src="../../assets/svg/instagram.svg" alt="Instagram Icon"
        /></a>
      </li>
      <li class="footer-socials__item">
        <a href="#"
          ><img src="../../assets/svg/twitter.svg" alt="Twitter Icon"
        /></a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    submitData() {
      const formData = {
        name: this.name,
        emial: this.email,
      };
      console.log(formData);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";

.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &-email-form {
    text-align: center;

    &__subheader {
      padding-top: 50px;
    }

    &__input-group {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      margin-top: 40px;
    }

    &__input {
      width: 45%;
      border: none;
      border-bottom: 1px solid black;
      outline: none;
      background: transparent;
      padding: 5px 0;
      font-size: 16px;
    }

    &__btn--signup {
      background-color: $color-background-black;
      color: $font-color-body-white;
      margin: 40px 0;
    }
  }

  &-socials {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 200px;
    gap: 10px;

    &__social-item {
      width: 30px;
    }
  }
}
</style>
