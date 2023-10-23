<template>
  <div class="wrapper-color__accent">
    <div class="container-mini">
      <Header />
    </div>
    <div class="container-midi">
      <div class="hero">
        <h1 class="header">
          ONE PLACE <br />
          THREE MUSEUMS
        </h1>
        <h3 class="subheader">
          the Fogg, Busch-Reisinger, and Arthur M. Sackler Museums
        </h3>
      </div>
    </div>
  </div>

  <div class="wrapper-color__dark">
    <div class="container-large">
      <div class="currently">
        <h2 class="subheader-currently">WHAT'S ON</h2>
        <Slider />

        <button class="btn btn-view"><a href="#">View all events</a></button>
      </div>
    </div>
  </div>
  <div class="wrapper-color__light">
    <div class="container-midi">
      <SearchInput />
    </div>
  </div>

  <div class="wrapper-color__dark">
    <div class="home-section">
      <div class="left-content">
        <img class="main-img" src="../assets//Museum-img.png" alt="museum" />
      </div>

      <div class="right-content">
        <div class="top-content">
          <h2 class="subheader">PLAN YOUR VISIT</h2>
          <p class="work-time">
            Open Tuesday-Sunday 10am-5pm <br />
            <span class="work-time__highlights">Closed on major holidays</span>
          </p>
          <p class="tickets-info">
            <span class="tickets-info__highlights">Tickets</span> <br />
            The museums are free to all visitors. Please check in at the
            Admissions desk. <br />
            <br />
            <span class="ticket-info__small"
              >This new initiative is made possible by a generous contribution
              from the Estate of David Rockefeller and support from the Office
              of the President at Harvard University.</span
            >
          </p>
          <a class="more-details" href="#">More details</a>
        </div>

        <div class="bottom-content">
          <h2 class="subheader">LOCATION</h2>
          <div class="location-container">
            <div class="museum-icon">
              <img src="../assets/svg/icon-museum.png" alt="Museum Icon" />
            </div>
            <div class="museum-address">
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

  <div class="wrapper-color__white">
    <div class="container-midi">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/layout/Header.vue";

import SearchInput from "../components/Search/SearchInput.vue";
import Footer from "../components/layout/Footer.vue";
import Slider from "../components/Slider/Slider.vue";

export default {
  components: {
    Header,

    SearchInput,
    Footer,

    Slider,
  },
};
</script>

<style scoped>
.wrapper-color__accent {
  background-color: var(--color-background-yellow);
  padding-bottom: 2px;
}

.wrapper-color__dark {
  background-color: var(--color-background-black);
  padding-bottom: 6px;
}

.wrapper-color__light {
  background-color: var(--color-background-white);
  padding-bottom: 6px;
}

.header {
  text-align: center;
  margin-top: 70px;
}

.subheader {
  text-align: center;
  margin-top: 35px;
  line-height: 35px;
}

.currently {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--font-color-body-white);
}
.subheader-currently {
  text-align: center;
  padding-top: 100px;
  margin-bottom: 50px;
}

.btn {
  padding: 15px 25px;
  background-color: var(--color-background-yellow);
  text-align: center;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}
.btn a {
  color: var(--font-color-body-black);
  font-family: var(--font-family-accent);
  font-size: 15px;
}

.btn-view {
  margin: 100px 0;
}

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

.main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.work-time__highlights {
  text-decoration: underline;
  font-weight: bold;
}

.tickets-info__highlights {
  text-decoration: underline;
}

.ticket-info__small {
  font-size: 18px;
  color: var(--font-color-body-grey);
}

.location-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
}

.top-content {
  color: var(--font-color-body-black);
  padding: 40px 120px;
  font-size: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.work-time {
  margin-top: 30px;
  text-align: center;
}

.tickets-info {
  margin-top: 60px;
  text-align: center;
}

.top-content {
  color: var(--font-color-body-black);
  padding: 40px 120px;
  font-size: 23px;
  flex: 1;
  background-color: var(--color-background-yellow);
}

.more-details {
  margin-top: 50px;
  font-size: 18px;
  text-decoration: underline;
}

.museum-icon {
  width: 80px;
}

.subheader {
  text-align: center;
}
.location-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
}

.bottom-content {
  flex: 1;
  background-color: var(--color-background-black);
  color: var(--font-color-body-white);
  padding: 40px 120px;
}
</style>
