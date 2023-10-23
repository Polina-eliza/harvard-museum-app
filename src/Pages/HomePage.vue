<template>
  <div class="wrapper-color--accent">
    <div class="container-mini">
      <Header />
    </div>
    <div class="container-midi">
      <div class="hero">
        <h1 class="hero__header">
          ONE PLACE <br />
          THREE MUSEUMS
        </h1>
        <h3 class="hero__subheader">
          the Fogg, Busch-Reisinger, and Arthur M. Sackler Museums
        </h3>
      </div>
    </div>
  </div>

  <div class="wrapper-color--dark">
    <div class="container-large">
      <div class="currently">
        <h2 class="currently__subheader">WHAT'S ON</h2>
        <Slider />

        <a class="btn btn-event-link" href="#">View all events</a>
      </div>
    </div>
  </div>
  <div class="wrapper-color--light">
    <div class="container-midi">
      <SearchInput />
    </div>
  </div>

  <div class="wrapper-color--dark">
    <div class="home-section">
      <div class="home-content__left-content">
        <img class="home-section__main-img" src="../assets//Museum-img.png" alt="Museum" />
      </div>

      <div class="home-section__right-content">
        <div class="home-section__top-content">
          <h2 class="home-section__subheader">PLAN YOUR VISIT</h2>
          <p class="home-section__work-time">
            Open Tuesday-Sunday 10am-5pm <br />
            <span class="work-time__highlights">Closed on major holidays</span>
          </p>
          <p class="home-section__tickets-info">
            <span class="home-section__tickets-info--highlights">Tickets</span> <br />
            The museums are free to all visitors. Please check in at the
            Admissions desk. <br />
            <br />
            <span class="home-section__ticket-info--small"
              >This new initiative is made possible by a generous contribution
              from the Estate of David Rockefeller and support from the Office
              of the President at Harvard University.</span
            >
          </p>
          <a class="home-section__more-details" href="#">More details</a>
        </div>

        <div class="home-section__bottom-content">
          <h2 class="home-section__subheader">LOCATION</h2>
          <div class="home-section__location-container">
            <div class="home-section__museum-icon">
              <img src="../assets/svg/icon-museum.png" alt="Museum Icon" />
            </div>
            <div class="home-section__museum-address">
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

  <div class="wrapper-color--white">
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
.wrapper-color--accent {
  background-color: var(--color-background-yellow);
  padding-bottom: 2px;
}

.wrapper-color--dark {
  background-color: var(--color-background-black);
  padding-bottom: 6px;
}

.wrapper-color--light {
  background-color: var(--color-background-white);
  padding-bottom: 6px;
}

.hero__header {
  text-align: center;
  margin-top: 70px;
}

.hero__subheader {
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
.currently__subheader{
  text-align: center;
  padding-top: 100px;
  margin-bottom: 50px;
}

.btn-event-link {
  margin: 100px 0;
  color: var(--font-color-body-black);
  font-family: var(--font-family-accent);
  font-size: 15px;
  background-color: var(--color-background-yellow);
}

.home-content__left-content {
  flex: 1;
}

.home-section {
  display: flex;
}

.home-section__right-content {
  flex: 2;
  display: flex;
  flex-direction: column;
}

.home-section__main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-section__work-time--highlights {
  text-decoration: underline;
  font-weight: bold;
}

.home-section__tickets-info--highlights {
  text-decoration: underline;
}

.home-section__ticket-info--small {
  font-size: 18px;
  color: var(--font-color-body-grey);
}

.home-section__location-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
}

.home-section__top-content {
  color: var(--font-color-body-black);
  padding: 40px 120px;
  font-size: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-section__work-time {
  margin-top: 30px;
  text-align: center;
}

.home-section__tickets-info {
  margin-top: 60px;
  text-align: center;
}

.home-section__top-content {
  color: var(--font-color-body-black);
  padding: 40px 120px;
  font-size: 23px;
  flex: 1;
  background-color: var(--color-background-yellow);
}

.home-section__more-details {
  margin-top: 50px;
  font-size: 18px;
  text-decoration: underline;
}

.home-section__museum-icon {
  width: 80px;
}

.home-section__subheader {
  text-align: center;
}
.home-section__location-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
}

.home-section__bottom-content {
  flex: 1;
  background-color: var(--color-background-black);
  color: var(--font-color-body-white);
  padding: 40px 120px;
}
</style>
