<template>
  <div class="wrapper-color--accent container-midi">
    <div class="hero">
      <h3 class="hero__header">
        ONE PLACE <br />
        THREE MUSEUMS
      </h3>
      <h1 class="hero__subheader">
        the Fogg, Busch-Reisinger, and Arthur M. Sackler Museums
      </h1>
    </div>
  </div>

  <div class="wrapper-color--dark container-large ongoing-exhibitions">
    <h2 class="ongoing-exhibitions__subheader">WHAT'S ON</h2>
    <Slider />
    <router-link
      class="btn ongoing-exhibitions__btn-event-link"
      to="/collections"
      >View all events</router-link
    >
  </div>

  <div class="wrapper-color--light container-midi">
    <SearchInput />
  </div>

  <div class="wrapper-color--dark">
    <div class="museum-visit">
      <div class="museum-visit__image-wrapper">
        <img
          class="museum-visit__image"
          src="../assets//Museum-img.png"
          alt="Museum"
        />
      </div>

      <div class="museum-visit__details">
        <div class="museum-visit__scheduling">
          <h2 class="museum-visit__title">PLAN YOUR VISIT</h2>
          <p class="museum-visit__hours">
            Open Tuesday-Sunday 10am-5pm <br />
            <span class="museum-visit__notice">Closed on major holidays</span>
          </p>
          <p class="museum-visit__ticket-info">
            <span class="museum-visit__ticket-highlight">Tickets</span> <br />
            The museums are free to all visitors. Please check in at the
            Admissions desk. <br />
            <br />
            <span class="museum-visit__ticket-credits"
              >This new initiative is made possible by a generous contribution
              from the Estate of David Rockefeller and support from the Office
              of the President at Harvard University.</span
            >
          </p>
          <a class="museum-visit__link" href="#">More details</a>
        </div>

        <div class="museum-visit__location-info">
          <h2 class="museum-visit__title">LOCATION</h2>
          <div class="museum-visit__location-wrapper">
            <div class="museum-visit__icon-wrapper">
              <img src="../assets/svg/icon-museum.png" alt="Museum Icon" />
            </div>
            <div class="museum-visit__address">
              Harvard Art Museums <br />
              32 Quincy Street <br />
              Cambridge, MA 02138 <br />
              1 (617) 495-9400
            </div>
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
.hero__header {
  text-align: center;
  padding-top: 70px;
  font-size: 90px;
  line-height: 80px;
  font-family: var(--font-family-accent);
  font-weight: 400;
}

.hero__subheader {
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
}

.ongoing-exhibitions__btn-event-link {
  margin: 100px 0;
  color: var(--font-color-body-black);
  font-family: var(--font-family-accent);
  font-size: 15px;
  background-color: var(--color-background-yellow);
}

.museum-visit__image-wrapper {
  flex: 1;
}

.museum-visit {
  display: flex;
}

.museum-visit__details {
  flex: 2;
  display: flex;
  flex-direction: column;
}

.museum-visit__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.museum-visit__scheduling {
  color: var(--font-color-body-black);
  background-color: var(--color-background-yellow);
  padding: 40px 120px;
  font-size: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.museum-visit__title {
  text-align: center;
}

.museum-visit__hours {
  margin-top: 30px;
  text-align: center;
}

.museum-visit__notice {
  text-decoration: underline;
  font-weight: bold;
}

.museum-visit__ticket-highlight {
  text-decoration: underline;
}

.museum-visit__ticket-credits {
  font-size: 18px;
  color: var(--font-color-body-grey);
}

.museum-visit__location-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
}

.museum-visit__ticket-info {
  margin-top: 60px;
  text-align: center;
}

.museum-visit__ticket-info {
  color: var(--font-color-body-black);
  padding: 40px 120px;
  font-size: 23px;
  flex: 1;
  background-color: var(--color-background-yellow);
}

.museum-visit__link {
  margin-top: 50px;
  font-size: 18px;
  text-decoration: underline;
}

.museum-visit__icon {
  width: 80px;
}

.museum-visit__location-info {
  flex: 1;
  background-color: var(--color-background-black);
  color: var(--font-color-body-white);
  padding: 40px 120px;
}
</style>
