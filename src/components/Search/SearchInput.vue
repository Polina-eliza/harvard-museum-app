<template>
  <div class="search">
    <input type="text" class="search__input" placeholder="Search..." />
    <button class="search__btn">
      <img
        class="search__icon"
        src="../../assets/svg/icons8-search.svg"
        alt=""
      />
    </button>
  </div>
</template>

<style lang="scss">
$font-family-body: "Didact Gothic", Arial, Helvetica, sans-serif;
$font-color-body-white: var(--font-color-body-white);
$font-color-body-black: var(--font-color-body-black);
$color-background-black: var(--color-background-black);

.search {
  padding: 70px 0;
  position: relative;

  &__input {
    width: 100%;
    height: 60px;
    padding: 15px 25px;
    border: 1px solid rgb(43, 42, 42);
    border-radius: 30px;
    color: $font-color-body-black;
    font-size: 17px;
    font-family: $font-family-body;
    letter-spacing: 1.3px;

    &:focus {
      outline: none;
      box-shadow: 0 0 5px #4f4f4f;
    }

    &::placeholder {
      color: $font-color-body-black;
      opacity: 1;
      font-size: 17px;
      font-family: $font-family-body;
    }
  }

  &__btn {
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;

    &:active {
      transform: translateY(-48%);
    }
  }

  &__icon {
    width: 30px;
  }
}
</style>
