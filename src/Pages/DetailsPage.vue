<template>
    <div class="container-midi dark-bg art-details">
      <router-link class="art-details__btn" to="/collections">Back </router-link>
  
      <div class="art-details-hero">
        <img class="art-details-hero__image" :src="DefaultImg" alt="" />
        <div class="art-details-hero__id">160729</div>
        <div class="art-details-hero__accession-number">1998.78.14</div>
      </div>
      <hr />
  
      <section class="art-details-identification">
        <div class="art-details-identification__section-title accent-subtitle">
          Identification and Creation
        </div>
        <div class="art-details-identification-content">
          <div class="art-details-identification-content__title">
            <p class="accent-subtitle">Title</p>
            <p class="">Baoyang Lake</p>
          </div>
          <div class="art-details-identification-content__creator">
            <p class="accent-subtitle">Creator</p>
            <p>Song Xu (Chinese, 1525-c. 1606)</p>
          </div>
          <div class="art-details-identification-content__date">
            <p class="accent-subtitle">Date</p>
            <p>1525</p>
          </div>
          <div class="art-details-identification-content__classification">
            <p class="accent-subtitle">Classification</p>
            <p>Painting</p>
          </div>
          <div class="art-details-identification-content__culture">
            <p class="accent-subtitle">Culture</p>
            <p>China, Jiaxing, 16th century</p>
          </div>
        </div>
      </section>
  
      <section class="art-details-description">
        <div class="art-details-description__section-title accent-subtitle">
          Physical Description
        </div>
        <div class="art-details-description-content">
          <div class="art-details-description-content__technique">
            <p class="accent-subtitle">Technique</p>
            <p>album; ink and color on silk</p>
          </div>
          <div class="art-details-description-content__dimensions">
            <p class="accent-subtitle">Dimensions</p>
            <p>Sheet: 26.4 x 28.4 cm (10 3/8 x 11 3/16 in.)</p>
          </div>
          <div class="art-details-description-content__full-descr">
            <p class="accent-subtitle">Description</p>
            <p>
              This album of landscape paintings depicts the famous scenic areas
              located in and around the city of Wuxing in southeastern China. The
              artist, Song Xu, was not a native of that city, but must have
              visited it when he accepted the commission, for he carefully
              depicted all eighteen views and wrote comments on each of them.
              These places were all known for their natural beauty, but in
              addition, a number were distingusihed by their links to eminent
              historical figures and events. Unlike other artists of his time,
              Song Xu favored a painting style that was technically polished and
              focused attention on specific, realistic details. Such an approach
              was well suited to projects like this one, for which the artist was
              in great demand.
            </p>
          </div>
        </div>
      </section>
  
      <section class="art-details-author">
        <div class="art-details-author__section-title accent-subtitle">
          Author Information
        </div>
        <div class="art-details-author-content">
          <div class="art-details-author-content__name">
            <p class="accent-subtitle">Name</p>
            <p>Song Xu (Chinese, 1525-c. 1606)</p>
          </div>
          <div class="art-details-author-content__role">
            <p class="accent-subtitle">Role</p>
            <p>artist</p>
          </div>
          <div class="art-details-author-content__bibliography">
            <p class="accent-subtitle">Bibliography</p>
            <p>
              Song Xu (\u5b8b\u65ed, 1525-c. 1606), was a versatile Chinese
              painter active in northern Zhejiang and Jiangsu provinces. He was
              skilled in landscapes, boundary paintings (\u754c\u756b, paintings
              of architecture), figure painting, and Buddhist painting. Although
              born a commoner, he also cultivated the literati arts of poetry and
              calligraphy. He studied Chan Buddhism and eventually became a
              Buddhist priest himself.
            </p>
          </div>
          <div class="art-details-author-content__birth-year">
            <p class="accent-subtitle">Date of Birth</p>
            <p>1524</p>
          </div>
          <div class="art-details-author-content__death-year">
            <p class="accent-subtitle">Date of Death</p>
            <p>1609</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import DefaultImg from "../assets/17816812.jpeg";
  
  export default {
    data() {
      return {
        DefaultImg,
      };
    },
  };
  </script>
  
  <style lang="scss">
  @import "../scss/_variables.scss";
  
  .art-details {
    padding-top: 100px;
    padding-bottom: 100px;
    color: $font-color-body-white;
  
    &__btn {
      color: $font-color-body-white;
    }
  
    &__btn::before {
      content: url(../assets/svg/return-arrow.svg);
      transform: translateY(5px);
      display: inline-block;
      margin-right: 5px;
    }
  
    &__btn:hover::before {
      transform: translateY(5px) translateX(-5px);
    }
  
    &-hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  
      &__image {
        width: 500px;
      }
  
      &__id {
        font-family: $font-family-accent;
        margin-top: 20px;
      }
  
      &__accession-number {
        color: $font-color-body-grey-light;
        margin-bottom: 20px;
      }
    }
  
    &-identification {
      display: flex;
      gap: 200px;
  
      &-content {
        width: 400px;
      }
  
      &__section-title {
        width: 300px;
      }
    }
  
    &-description {
      display: flex;
      gap: 200px;
      margin-top: 100px;
  
      &-content {
        width: 400px;
      }
  
      &__section-title {
        width: 300px;
      }
    }
  
    &-author {
      display: flex;
      gap: 200px;
      margin-top: 100px;
  
      &-content {
        width: 400px;
      }
  
      &__section-title {
        width: 300px;
      }
    }
  }
  
  .accent-subtitle {
    font-family: $font-family-accent;
    font-size: 22px;
    margin-top: 15px;
    color: $font-color-body-grey-light;
  }
  </style>