<template>
  <div>
    <div class="header">
      <TitleCard :titleCard="titleCard" />
      <div class="container">
        <div class="card">
          <h2>Custom</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint
            placeat amet aliquid repudiandae iure modi libero eveniet
            reprehenderit. Quo. Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Impedit, nemo!
          </p>

          <vs-button
            :active="active == 1"
            @click="active = 1"
            :color="buttonColor"
            type="filled"
          >
            <router-link to="/store/items" class="link" tag="li"
              >Shop Now!
            </router-link>
          </vs-button>
        </div>
        <div class="card">
          <h2>Professional</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint
            placeat amet aliquid repudiandae iure modi libero eveniet
            reprehenderit. Quo. Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Impedit, nemo!
          </p>

          <vs-button
            :active="active == 2"
            @click="active = 2"
            :color="buttonColor"
            type="filled"
          >
            <router-link to="/about" class="link" tag="li"
              >About Us
            </router-link>
          </vs-button>
        </div>
        <div class="card">
          <h2>Precise</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint
            placeat amet aliquid repudiandae iure modi libero eveniet
            reprehenderit. Quo. Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Impedit, nemo!
          </p>

          <vs-button
            :active="active == 3"
            @click="active = 3"
            :color="buttonColor"
            type="filled"
          >
            <router-link to="/wholesale" class="link" tag="li"
              >Learn More!
            </router-link>
          </vs-button>
        </div>
      </div>
    </div>
    <div id="fundraising">
      <h1>Fundraising</h1>
      <div class="container">
        <div class="card">
          <h2>Professional</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint
            placeat amet aliquid repudiandae iure modi libero eveniet
            reprehenderit. Quo. Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Impedit, nemo!
          </p>

          <vs-button
            :active="active == 1"
            @click="active = 1"
            :color="buttonColor"
            type="filled"
          >
            <router-link to="/fundraising" class="link" tag="li"
              >Tell me more!
            </router-link>
          </vs-button>
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
  overflow: hidden;
  background: white;
  color: black;
  p {
    text-align: left;
    padding-inline: 2.5rem;
    margin-bottom: 6rem;
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
