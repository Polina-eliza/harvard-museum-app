<template>
  <div class="search-container">
    <input type="text" class="search-input" placeholder="Search..." />
    <button class="search-btn">
      <img class="" src="../../assets/svg/icons8-search.svg" alt="" />
    </button>
  </div>
</template>

<style scoped>
.search-container {
  padding: 70px 0;
  position: relative;
}

.search-input {
  width: 100%;
  height: 60px;
  padding: 15px 25px;

  border: 1px solid var(--color-background-black);
  border-radius: 30px;
  color: var(--font-color-body-black);
  font-size: 17px;
  font-family: var(--font-family-body);
  letter-spacing: 1.3px;
}

.search-input:focus {
  outline: none;
  box-shadow: 0 0 5px #4f4f4f;
}

.search-input::placeholder {
  color: var(--font-color-body-black);
  opacity: 1;
  font-size: 17px;
  font-family: var(--font-family-body);
}

.search-btn {
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}

.search-btn img {
  width: 30px;
}

.search-btn:active {
  transform: translateY(-48%);
}
</style>
