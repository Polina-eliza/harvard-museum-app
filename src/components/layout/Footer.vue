<template>
  <footer class="footer">
    <div class="email-container">
      <h3 class="subheader">Harvard Art Museum likes to send you emails</h3>
      <div class="input-container">
        <input class="input-name" type="text" placeholder="Name" id="name" />
        <input class="input-email" placeholder="Email" id="email" />
      </div>

      <button class="btn btn-signup"><a href="#">Sign up</a></button>
    </div>
    <hr class="divider" />
    <ul class="socials-container">
      <li class="social-item">
        <a href="#"><img src="../../assets//svg/facebook.svg" alt="Facebook Icon" /></a>
      </li>
      <li class="social-item">
        <a href="#"
          ><img class="social-item" src="../../assets//svg/instagram.svg" alt="Instagram Icon"
        /></a>
      </li>
      <li class="social-item">
        <a href="#"
          ><img class="social-item" src="../../assets//svg/twitter.svg" alt="Twitter Icon"
        /></a>
      </li>
    </ul>
  </footer>
</template>

<script></script>

<style scoped>
.social-item {
  width: 30px;
}

.subheader {
  padding-top: 50px;
}

.email-container {
  text-align: center;
}

.input-container {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
}

.input-container .input-name,
.input-container .input-email
 {
  width: 45%;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  background: transparent;
  padding: 5px 0;
  font-size: 16px;
}

.btn-signup {
  background-color: var(--color-background-black);
  color: var(--color-background-white);
  margin-bottom: 20px;
}

.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
}

.socials-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
}
</style>
