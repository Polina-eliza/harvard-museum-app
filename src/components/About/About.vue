<template>
  <div class="home-section">
    <div class="left-content">
      <AboutImage />
    </div>

    <div class="right-content">
      <TopContent />
      <BottomContent />
    </div>
  </div>
</template>

<script>
import AboutImage from "../About/AboutImage.vue";
import TopContent from "../About/TopContent.vue";
import BottomContent from "../About/BottomContent.vue";

export default {
  components: {
    AboutImage,
    TopContent,
    BottomContent,
  },
};
</script>

<style scoped>
.left-content {
  flex: 1;
}

.home-section {
  display: flex;
}

.right-content {
  flex: 2;
  display: flex;
  flex-direction: column;
}
</style>
