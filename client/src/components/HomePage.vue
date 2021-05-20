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
            Shop Now!
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
            :active="active == 1"
            @click="active = 1"
            :color="buttonColor"
            type="filled"
          >
            Shop Now!
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
            :active="active == 1"
            @click="active = 1"
            :color="buttonColor"
            type="filled"
          >
            Shop Now!
          </vs-button>
        </div>
      </div>
    </div>
    <div id="fundraising">
      <h1>Fundraising</h1>
    </div>
    <div class="container">
      <div class="card">
        <h2>Professional</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sint
          placeat amet aliquid repudiandae iure modi libero eveniet
          reprehenderit. Quo. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Impedit, nemo!
        </p>

        <vs-button
          :active="active == 1"
          @click="active = 1"
          :color="buttonColor"
          type="filled"
        >
          Shop Now!
        </vs-button>
      </div>
      <div class="card">
        <img
          src="@/assets/Fundraising Collage.png"
          alt="Cool Laser Engraved Bottles"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue';
import TitleCard from '@/components/titleCard.vue';
import Footer from '@/components/Footer.vue';
export default Vue.extend({
  components: {
    TitleCard,
    Footer,
  },
  props: {
    title: String,
  },
  data: () => ({
    active: 0,
    titleCard: 'Professional',
    buttonColor: '#185ca3',
  }),
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
.header {
  background: #eee;
  display: flex;
  flex-direction: column;
  padding-block: 3rem;
}
.card {
  width: 30rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    margin: 1rem;
  }
  button {
    background: $bg-secondary;
    color: $text-color;
    border: none;
    outline: none;
    font-size: 1em;
    padding: 0.25em 0.5em;
    margin: 1.5rem;
    border-radius: 1em;
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
}
#fundraising {
  background-image: url('../assets/fundraisingHomePage.png');
  background-repeat: no-repeat;
  background-position: center;
  backdrop-filter: blur(100px);
  background-size: 100%;
  font-size: 2vh;
  height: calc(30vh + 5px);
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: row;
  margin: 0;
}
</style>
