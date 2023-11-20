<template>
  <div class="search">
    <input type="text" class="search__input" placeholder="Search by author name..."  v-model="searchQuery"
      @keyup.enter="emitSearchQuery"/>
    <button class="search__btn" @click="emitSearchQuery"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    emitSearchQuery() {
      this.$emit('onSearch', this.searchQuery);
      this.resetInput(); 
    },
    resetInput() {
      this.searchQuery = ''; 
    },
    
  },
};
</script>

<style lang="scss">
@import "../../scss/variables";

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
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: url('../../assets//svg/icons8-search.svg');
      font-size: 27px;
      color: #4f4f4f;
      line-height: 1;
    }

    &:active {
      transform: translateY(-48%);
    }
  }
}
</style>
