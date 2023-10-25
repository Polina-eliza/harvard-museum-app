<template>
  <footer class="footer">
    <form class="footer__email-form">
      <h3 class="footer__subheader">
        Harvard Art Museum likes to send you emails
      </h3>
      <div class="footer__input-group">
        <input
          class="footer__input footer__input--name"
          type="text"
          placeholder="Name"
          id="name"
        />
        <input
          class="footer__input footer__input--email"
          placeholder="Email"
          id="email"
        />
      </div>
      <button class="btn footer__btn--signup"><a href="#">Sign up</a></button>
    </form>

    <ul class="footer__socials">
      <li class="footer__social-item">
        <a href="#"
          ><img src="../../assets//svg/facebook.svg" alt="Facebook Icon"
        /></a>
      </li>
      <li class="footer__social-item">
        <a href="#"
          ><img src="../../assets//svg/instagram.svg" alt="Instagram Icon"
        /></a>
      </li>
      <li class="footer__social-item">
        <a href="#"
          ><img src="../../assets//svg/twitter.svg" alt="Twitter Icon"
        /></a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
// Fonts
$font-family-body: "Didact Gothic", Arial, Helvetica, sans-serif;
$font-color-body-black: #231f20;
$font-color-body-white: #e1e0e0;
$color-background-black: #151515;

.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &__email-form {
    text-align: center;
  }

  &__input-group {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-top: 40px;
  }

  .footer__input {
    width: 45%;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    background: transparent;
    padding: 5px 0;
    font-size: 16px;
  }

  &__subheader {
    padding-top: 50px;
  }

  .btn.footer__btn--signup {
    background-color: $color-background-black;
    color: $font-color-body-white;
    margin: 40px 0;

    a {
      color: $font-color-body-white;
      text-decoration: none;
    }
  }

  &__socials {
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
