<template>
  <div>
    <div class="header">
      <TitleCard :titleCard="titleCard" />
      <div class="container">
        <div class="card">
          <h2>Custom</h2>
          <p>
            Laser engraving allows for a quick and precise customization of an endless amount of  products, with the ability to engrave materials including...
          </p>
          <p>
            <ul>
              <li>Wood</li>
              <li>Extruded or Cast Acrylic</li>
              <li>Fabric</li>
              <li>Glass</li>
              <li>Stone, Marble, and Granite</li>
              <li>Leather</li>
              <li>Anodized Aluminum</li>
              <li>Paper and Cardboard</li>
              <li>Stamp Rubber</li>
              <li>And Many More!</li>
            </ul>
          </p>
          <p>
            Custom logos, name, quotes and pictures can be engraved too!
          </p>
          <router-link to="/store/items">
            <vs-button
              :active="active == 1"
              @click="active = 1"
              :color="buttonColor"
              type="filled"
            >
              Shop Now!
            </vs-button>
          </router-link>
        </div>
        <div class="card">
          <h2>Professional</h2>
          <p>
            Lasers allow for a high degree of precision. With a high resolution of 1200DPI we are able to engrave with precision unmatched by traditional engraving processes.  Laser machines are capable of cutting and engraving very complex and intricate designs on paper, acrylic, wood or MDF, and more. You can cut custom greeting cards, parts for 3D models and prototypes, rubber stamps, wooden inlays, (intarsia), and much more. With our laser machine, the only limit is your imagination.
          </p>

          <router-link to="/store/items">
            <vs-button
              :active="active == 1"
              @click="active = 1"
              :color="buttonColor"
              type="filled"
            >
              Shop Now!
            </vs-button>
          </router-link>
        </div>
        <div class="card">
          <h2>Precise</h2>
          <p>
            With over 25 year in the hospitality industry we are professional and will always work with the customer to make sure they are always satisfied with the end product.  We are here to make creative and lasting products that you will cherish for years to come.
          </p>

          <router-link to="/store/items">
            <vs-button
              :active="active == 1"
              @click="active = 1"
              :color="buttonColor"
              type="filled"
            >
              Shop Now!
            </vs-button>
          </router-link>
        </div>
      </div>
    </div>
    <div id="fundraising">
      <h1>Fundraising</h1>
      <div class="container">
        <div class="card">
          <h2>Our Fundraisers</h2>
          <p>
            Running a fundraiser through WFBM Laser Engraving is a win-win! Help your organization in a fun and environmentally friendly way! Reduce plastic waste and raise money by buying wholesale for your fundraisers! Interested? Have questions? Click the button below to get in touch!
          </p>

          <router-link to="/fundraising">
            <vs-button
              :active="active == 1"
              @click="active = 1"
              :color="buttonColor"
              type="filled"
            >
              Learn More!
            </vs-button>
          </router-link>
        </div>
        <div class="card">
          <img
            src="@/assets/Fundraising Collage.png"
            alt="Cool Laser Engraved Bottles"
          />
        </div>
      </div>
    </div>

    <VFooter />
  </div>
</template>

<script>
import Vue from 'vue';
import TitleCard from '@/components/titleCard.vue';
import VFooter from '@/components/VFooter.vue';
export default Vue.extend({
  components: {
    TitleCard,
    VFooter,
  },
  props: {
    title: String,
  },
  data: () => ({
    active: 0,
    titleCard: 'Professional',
    buttonColor: '#185ca3',
  }),
  methods: {
    showCustom() {
      this.Cardtitle = 'Custom';
    },
    showProfessional() {
      this.Cardtitle = 'Professional';
    },
    showPrecise() {
      this.Cardtitle = 'Precise';
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
.header {
  background: #eee;
  display: flex;
  flex-direction: column;
}
.card {
  width: 30rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px $shadow;
  border-radius: 1rem;
  margin-block: 3rem;
  padding-bottom: 3rem;
  overflow: hidden;
  background: white;
  color: black;
  p {
    text-align: left;
    padding-inline: 2.5rem;
    &::first-letter {
      padding-left: 2rem;
    }
  }
  img {
    max-width: 100%;
  }
  button {
    color: $text-color;
    padding: 0.25em 0.5em;
    margin: 1.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
#fundraising {
  background-image: url('../assets/navBackgroundBottles.png');
  background-repeat: no-repeat;
  background-position: center;
  backdrop-filter: blur(100px);
  background-size: cover;
  /*background-color: #999;*/
  font-size: 2vh;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0;
}
</style>
