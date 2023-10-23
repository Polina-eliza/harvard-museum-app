<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item"><a href="#">Collections</a></li>
      <li class="navbar-item"><a href="#">Exibition</a></li>
      <li class="navbar-item logo">
        <a href="#">
          <span>HARVARD ART</span>
          <span class="logo-museum">MUSEUMS</span>
        </a>
      </li>
      <li class="navbar-item"><a href="#">Events</a></li>
      <li class="navbar-item"><a href="#">Publications</a></li>
    </ul>
  </nav>
  <Hero />
</template>

<style scoped>
.navbar {
  padding-top: 30px;
}

.logo-container {
  font-family: var(--font-family-accent);
}

.navbar-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.logo a {
  text-align: center;
  display: block;
  color: var(--font-color-body);
}

.logo span {
  display: block;
}

.logo-museum {
  transform: rotate(180deg);
}

.logo {
  font-family: var(--font-family-accent);
  line-height: 29px;
  font-size: 30px;
}
</style>
