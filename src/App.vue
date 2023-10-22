<template>
  <div class="wrapper-color__accent">
    <div class="container-mini">
      <Header />
    </div>
    <div class="container-midi">
      <Hero />
    </div>
  </div>

  <div class="wrapper-color__dark">
    <div class="container-large">
      <WhatsOn />
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
        <img
          class="main-img"
          src="./assets//Screenshot 2023-10-22 at 18.36.34.png"
          alt=""
        />
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
              <img src="./assets//svg/icons8-museum-80 (1).png" alt="" />
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
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import WhatsOn from "./components/layout/WhatsOn.vue";
import SearchInput from "./components/Search/SearchInput.vue";
import Footer from "./components/Footer.vue"

export default {
  components: {
    Header,
    Hero,
    WhatsOn,
    SearchInput,
    Footer
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
}

.subheader {
  text-align: center;
}

.work-time {
  margin-top: 30px;
  text-align: center;
}

.tickets-info {
  margin-top: 60px;
  text-align: center;
}

.museum-icon {
  width: 80px;
}

.home-section {
  display: flex;
}

.left-content {
  flex: 1;
}





.right-content {
  flex: 2;
  display: flex;
  flex-direction: column;
}

.top-content {
  flex: 1;
  background-color: var(--color-background-yellow);
}

.bottom-content {
  flex: 1;
  background-color: var(--color-background-black);
  color: var(--font-color-body-white);
  padding: 40px 120px;
}

.left-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
