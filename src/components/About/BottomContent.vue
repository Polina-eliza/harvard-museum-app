<template>
         <div class="bottom-content">
          <h2 class="subheader">LOCATION</h2>
          <div class="location-container">
            <div class="museum-icon">
                <img src="../../assets/svg/icon-museum.png" alt="Museum Icon" />
            </div>
            <div class="museum-address">
              Harvard Art Museums <br />
              32 Quincy Street <br />
              Cambridge, MA 02138 <br />
              1 (617) 495-9400
            </div>
          </div>
        </div>

</template>

<style scoped>

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