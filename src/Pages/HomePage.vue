<template>
  <div class="accent-bg container-midi">
    <div class="hero-section">
      <h3 class="hero-section__header">
        One place <br />
        three myseums
      </h3>
      <h1 class="hero-section__subheader">
        the Fogg, Busch-Reisinger, and Arthur M. Sackler Museums
      </h1>
    </div>
  </div>

  <div class="dark-bg container-large ongoing-exhibitions">
    <h2 class="ongoing-exhibitions__subheader">what's on</h2>
    <Slider />
    <router-link class="btn ongoing-exhibitions__event-link" to="/collections"
      >View all events</router-link
    >
  </div>

  <div class="light-bg container-midi">
    <SearchInput />
  </div>

  <div class="dark-bg museum-visit">
    <div class="museum-visit__image-area">
      <img
        class="museum-visit__image"
        src="../assets//Museum-img.png"
        alt="Museum"
      />
    </div>
    <div class="museum-details">
      <div class="museum-details-schedule">
        <h2 class="museum-details-schedule__title">plan your visit</h2>
        <p class="museum-details-schedule__hours">
          Open Tuesday-Sunday 10am-5pm <br />
          <span class="museum-details-schedule__notice"
            >Closed on major holidays</span
          >
        </p>
        <p class="museum-details-schedule__ticket-info">
          <span class="museum-details-schedule__ticket-highlight">Tickets</span>
          <br />
          The museums are free to all visitors. Please check in at the
          Admissions desk. <br />
          <br />
          <span class="museum-details-schedule__ticket-credits"
            >This new initiative is made possible by a generous contribution
            from the Estate of David Rockefeller and support from the Office of
            the President at Harvard University.</span
          >
        </p>
        <a class="museum-details-schedule__link" href="#">More details</a>
      </div>

      <div class="museum-location">
        <h2 class="museum-location__title">location</h2>
        <div class="museum-location__location-info">
          <img
            class="museum-location__image"
            src="../assets/svg/icon-museum.png"
            alt="Museum Icon"
          />

          <div class="museum-location__address">
            Harvard Art Museums <br />
            32 Quincy Street <br />
            Cambridge, MA 02138 <br />
            1 (617) 495-9400
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/Search/SearchInput.vue";

import Slider from "../components/Slider/Slider.vue";

export default {
  components: {
    SearchInput,
    Slider,
  },
};
</script>

<style scoped>
.hero-section__header {
  text-align: center;
  padding-top: 70px;
  font-size: 90px;
  line-height: 80px;
  font-family: var(--font-family-accent);
  font-weight: 400;
  text-transform: uppercase;
}

.hero-section__subheader {
  text-align: center;
  margin-top: 35px;
  line-height: 35px;
  font-size: 30px;
}

.ongoing-exhibitions {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--font-color-body-white);
}
.ongoing-exhibitions__subheader {
  text-align: center;
  padding-top: 100px;
  margin-bottom: 50px;
  text-transform: uppercase;
}

.ongoing-exhibitions__event-link {
  margin: 100px 0;
  color: var(--font-color-body-black);
  font-family: var(--font-family-accent);
  font-size: 15px;
  background-color: var(--color-background-yellow);
}

.museum-visit {
  display: flex;
}

.museum-visit__image-area {
  flex: 1;
}

.museum-visit__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.museum-details {
  flex: 2;
  display: flex;
  flex-direction: column;
}

.museum-details-schedule {
  color: var(--font-color-body-black);
  background-color: var(--color-background-yellow);
  padding: 40px 120px;
  font-size: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.museum-details-schedule__title,
.museum-location__title {
  text-align: center;
  text-transform: uppercase;
}

.museum-details-schedule__hours {
  margin-top: 30px;
  text-align: center;
}

.museum-details-schedule__notice {
  text-decoration: underline;
  font-weight: bold;
}

.museum-details-schedule__ticket-highlight {
  text-decoration: underline;
}

.museum-details-schedule__ticket-credits {
  font-size: 18px;
  color: var(--font-color-body-grey);
}

.museum-location__location-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
}

.museum-details-schedule__ticket-info {
  color: var(--font-color-body-black);
  padding: 40px 120px;
  font-size: 23px;
  flex: 1;
  background-color: var(--color-background-yellow);
  margin-top: 60px;
  text-align: center;
}
.museum-details-schedule__link {
  margin-top: 50px;
  font-size: 18px;
  text-decoration: underline;
}

.museum-location__image {
  width: 80px;
}

.museum-location {
  flex: 1;
  background-color: var(--color-background-black);
  color: var(--font-color-body-white);
  padding: 40px 120px;
}
</style>
