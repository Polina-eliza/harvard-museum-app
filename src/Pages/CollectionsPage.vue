<template>
  <div class="container-midi accent-bg collections-hero">
    <h1 class="collections-hero__header">Collections</h1>
    <h2 class="collections-hero__subheader">Browse through our art objects</h2>
  </div>

  <div class="container-midi dark-bg">
    <SearchInput />
  </div>

  <div class="container-midi light-bg collections">
    <div class="collections-header">
      <button class="collections-header__filter-btn">Filter</button>
      <div class="collections-header__dropdown">
        <div class="collections-header__dropdown-item">
          <button class="collections-header__dropdown-toggle">
            Classification
          </button>
          <ul class="collections-header__dropdown-list">
            <li class="collections-header__dropdown-checkbox">
              <input type="checkbox" /> Accessories
            </li>
          </ul>
        </div>
        <div class="collections-header__dropdown-item">
          <button class="collections-header__dropdown-toggle">
            Department <span>&raquo;</span>
          </button>
          <ul class="collections-header__dropdown-list">
            <li class="collections-header__dropdown-checkbox">
              <input type="checkbox" /> Accessories
            </li>
          </ul>
        </div>
        <div class="collections-header__dropdown-item">
          <button class="collections-header__dropdown-toggle">
            Culture <span>&raquo;</span>
          </button>
          <ul class="collections-header__dropdown-list">
            <li class="collections-header__dropdown-checkbox">
              <input type="checkbox" /> Accessories
            </li>
          </ul>
        </div>
        <div class="collections-header__dropdown-item">
          <button class="collections-header__dropdown-toggle">
            Technique <span>&raquo;</span>
          </button>
          <ul class="collections-header__dropdown-list">
            <li class="collections-header__dropdown-checkbox">
              <input type="checkbox" /> Accessories
            </li>
          </ul>
        </div>
      </div>
      <div class="collections-header-loading">
        <label class="collections-header-loading__label" for="loadAmount"
          >Load Amount</label
        >
        <select class="collections-header-loading__select" id="loadAmount">
          <option class="collections-header-loading__select-option" value="12">
            12
          </option>
          <option class="collections-header-loading__select-option" value="24">
            24
          </option>
          <option
            class="collections-header-loading__select-option"
            value="48"
            selected
          >
            48
          </option>
          <option class="collections-header-loading__select-option" value="100">
            100
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/Search/SearchInput.vue";

export default {
  components: {
    SearchInput,
  },
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

.collections-hero {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 70px 0 10px 0;

  &__subheader {
    margin-top: 35px;
  }
}
.collections {
  &-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;

    &__filter-btn {
      padding: 10px 20px;
      text-align: center;
      font-family: $font-family-accent;
      font-size: 16px;
      border: none;
      background-color: $color-background-yellow;
      &:focus + &__dropdown,
      &:hover + &__dropdown {
        display: block;
      }
    }

    &__dropdown {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1;
      border: 1px solid #ccc;
      background-color: #f9f9f9;

      &-item {
        position: relative;

        &:hover &__dropdown-list {
          display: block;
        }
      }

      &-toggle {
        background-color: #f9f9f9;
        border: none;
        padding: 10px 15px;
        text-align: left;
        cursor: pointer;
        width: 100%;

        &:hover {
          background-color: #ddd;
        }

        &:focus + &__dropdown-list {
          display: block;
        }
      }

      &-list {
        display: none;
        padding: 0;
        margin: 0;
        list-style-type: none;
        max-height: 250px;
        overflow-y: auto;
        position: absolute;
        left: 100%;
        top: 0;
        border: 1px solid #ccc;
        background-color: #f9f9f9;

        & > li {
          display: flex;
          align-items: center;
          padding: 10px;
          border-bottom: 1px solid #ccc;

          &:last-child {
            border-bottom: none;
          }

          & > input[type="checkbox"] {
            margin-right: 10px;
          }
        }
      }
    }

    &-loading {
        font-family: $font-family-accent;

        
        &__label {
            
    margin: 5px;
  }

  &__select {
    width: 60px;
    padding: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    font-size: 16px;
    cursor: pointer;

  }

    }
  }
}
</style>
