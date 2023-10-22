<template>
  <div class="currently">
    <h2 class="subheader-currently">WHAT'S ON</h2>

    <button class="btn btn-view"><a href="#">View all events</a></button>
  </div>
</template>

<script></script>

<style scoped>
.currently {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.subheader-currently {
  text-align: center;
  padding-top: 100px;
}

.btn {
  padding: 15px 25px;
  background-color: black;
  text-align: center;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  margin-top: 20px;
}
.btn a {
  color: #fce373;
  font-family: var(--font-family-accent);
  font-size: 15px;
}
</style>
