<template>
  <div class="card">
    <div class="img-container">
      <img class="card-img" :src="imageSrc" :alt="imageAlt" />
      <div class="card-date">{{ date }}</div>
    </div>
    <div class="card-title">
      <a :href="linkHref">{{ title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    linkHref: {
      type: String,
      default: "#",
    },
  },
};
</script>

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
</style>
