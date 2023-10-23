<template>
  <div class="cards-container">
    
    <div class="card">
      <div class="img-container">
        <img class="card-img" src="../../assets/497110754.jpeg" alt="" />
        <div class="card-date">Thursday, October 26, 2023</div>
      </div>
      <div class="card-title">
        <a href="#"
          >Objects of Addiction: Opium, Empire, and the Chinese Art Trade</a
        >
      </div>
    </div>

    <div class="card">
      <div class="img-container">
        <img class="card-img" src="../../assets/496651830.jpeg" alt="" />
        <div class="card-date">March 18, 2023–June 9, 2024</div>
      </div>
      <div class="card-title">
        <a href="#">Bosco Sodi: Origen</a>
      </div>
    </div>

    <div class="card">
      <div class="img-container">
        <img class="card-img" src="../../assets/495321462.jpeg" alt="" />
        <div class="card-date">July 1, 2022–July 6, 2025</div>
      </div>
      <div class="card-title">
        <a href="#"
          >Disrupt the View: Arlene Shechet at the Harvard Art Museums</a
        >
      </div>
    </div>

    <div class="card">
      <div class="img-container">
        <img class="card-img" src="../../assets/20380075.jpeg" alt="" />
        <div class="card-date">September 2, 2023–December 30, 2023</div>
      </div>
      <div class="card-title">
        <a href="#">Seeing in Art and Medicine</a>
      </div>
    </div>

    <div class="card">
      <div class="img-container">
        <img class="card-img" src="../../assets/17190817.jpeg" alt="" />
        <div class="card-date">September 2, 2023–December 30, 2023</div>
      </div>
      <div class="card-title">
        <a href="#">A Colloquium in the Visual Arts</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 500px;
}

.img-container {
  position: relative;
}

.card-img {
  width: 500px;
  height: 400px;
}

.card-date {
  position: absolute;
  bottom: 20px;
  left: 10px;
  color: var(--font-color-body-grey);
  background-color: #dfdfdf;
  padding: 2px 10px;
}

.card-title {
  font-family: var(--font-family-accent);
}

.cards-container {
  display: flex;
  gap: 60px;
}
</style>
