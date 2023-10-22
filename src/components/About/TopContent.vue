<template>
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
     

  
</template>

<style scoped>

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

.top-content {
  color: var(--font-color-body-black);
  padding: 40px 120px;
  font-size: 23px;
  flex: 1;
  background-color: var(--color-background-yellow);
}



</style>