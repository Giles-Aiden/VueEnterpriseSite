<template>
  <div>
<<<<<<< HEAD
    <div class="center-grid">
      <TitleCard :titleCard="titleCard" />
    </div>
    <div class="center-grid">
      <div class="card">
        <h2>Custom</h2>
        <p class="cardText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          suscipit exercitationem voluptatibus atque similique sunt beatae hic
          aut aperiam tenetur.Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nesciunt suscipit exercitationem voluptatibus atque
          similique sunt beatae hic aut aperiam tenetur.
        </p>
        <!--<button class="cardButton">Shop Now!</button>-->
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
        <p class="cardText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          suscipit exercitationem voluptatibus atque similique sunt beatae hic
          aut aperiam tenetur.Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nesciunt suscipit exercitationem voluptatibus atque
          similique sunt beatae hic aut aperiam tenetur.
        </p>
        <!-- <button class="cardButton">Check it out!</button> -->
        <vs-button
          :active="active == 1"
          @click="active = 1"
          :color="buttonColor"
          type="filled"
        >
          Check it out!
        </vs-button>
      </div>
      <div class="card">
        <h2>Precise</h2>
        <p class="cardText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          suscipit exercitationem voluptatibus atque similique sunt beatae hic
          aut aperiam tenetur.Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nesciunt suscipit exercitationem voluptatibus atque
          similique sunt beatae hic aut aperiam tenetur. Lorem ipsum dolor sit
          amet.
        </p>
        <!-- <button class="cardButton">Tell me more!</button> -->
        <vs-button
          :active="active == 1"
          @click="active = 1"
          :color="buttonColor"
          type="filled"
        >
          Tell me more!
        </vs-button>
      </div>
    </div>

    <div class="subtitleCard">
      <h1>Fundraising</h1>
    </div>

    <div class="center-grid">
      <div class="card">
        <h2>More About Our Fundraisers</h2>
        <p class="cardText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          suscipit exercitationem voluptatibus atque similique sunt beatae hic
          aut aperiam tenetur.Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nesciunt suscipit exercitationem voluptatibus atque
          similique sunt beatae hic aut aperiam tenetur.
        </p>
        <!-- <button class="cardButton">Check it out!</button> -->
        <vs-button
          :active="active == 1"
          @click="active = 1"
          :color="buttonColor"
          type="filled"
        >
          Check it out!
        </vs-button>
      </div>
      <div class="card imgCard">
        <img src="@/assets/Fundraising Collage.png" alt="" />
      </div>
    </div>
=======
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
>>>>>>> 7d9eabc (Merge of blackman branch)
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
<<<<<<< HEAD
$bg-main: #185ca3;
$bg-secondary: #2486f0;
$text-color: #fefefe;
$card-background: #fff;
.card {
  padding: 1rem;
  width: 25rem;
  position: relative;

  box-shadow: 0.5rem 1rem 20px $bg-secondary;
  background: $card-background;
  border-radius: 2rem;

  transition: transform 100ms ease-in-out, box-shadow 100ms ease-in-out;
  .cardText {
    padding-inline: 1rem;
    margin-bottom: 4rem;
    text-align: left;
    &::first-letter {
      margin-left: 2rem;
    }
  }
  .cardButton {
    background: $bg-main;
    padding: 0.5rem 1rem;
    border-radius: 100rem;
    color: $text-color;
    outline: none;
    border: none;
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 1.25rem;
    &:active {
      transform: scale(1.05);
      box-shadow: 0.25rem 0.2rem 10px $bg-secondary;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0.5rem 1.25rem 20px $bg-secondary;
  }
}
.imgCard {
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  &:hover {
    transform: none;
    box-shadow: none;
  }
=======
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
>>>>>>> 7d9eabc (Merge of blackman branch)
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
<<<<<<< HEAD

.title {
  z-index: 0;
  margin: calc((25vh + 5px) / 2);
  font-size: 250%;
  color: $text-color;
}
.subtitleCard {
  background-image: url('../assets/fundraisingHomePage.png');
  background-repeat: no-repeat;
  background-position: center center;
  backdrop-filter: blur(100px);
  background-size: cover;
  color: white;
  font-size: 1.5em;
  height: calc(20rem + 5px);
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    margin-block: auto;
  }
}
.center-grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: 1rem;
  grid-gap: 1rem;
}
=======
>>>>>>> 7d9eabc (Merge of blackman branch)
</style>
