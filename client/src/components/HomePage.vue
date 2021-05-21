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
            :active="active == 2"
            @click="active = 2"
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
            :active="active == 3"
            @click="active = 3"
            :color="buttonColor"
            type="filled"
          >
            Shop Now!
          </vs-button>
        </div>
      </div>
    </div>
    <div class="center-grid" data-aos="fade-down" data-aos-duration="1000">
      <div vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <vs-card class="shadow">
          <template #title>
            <h3>Custom</h3>
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, vel rem. Minus tempora voluptas at incidunt eveniet
              deleniti, delectus cumque, voluptates inventore soluta ipsam
              commodi sequi mollitia assumenda aliquam quidem repudiandae autem
              fugiat non dignissimos ducimus animi corporis! Reiciendis aliquam
              nihil doloremque et corrupti accusamus dolorum reprehenderit rerum
              ullam vel?
            </p>
            <vs-button class="button-color">
              <a href="store">Shop now!</a>
            </vs-button>
          </template>
        </vs-card>
      </div>
      <div class="card">
        <img
          src="@/assets/Fundraising Collage.png"
          alt="Cool Laser Engraved Bottles"
        />
      </div>
    </div>
    <div
      class="center-grid"
      vs-type="flex"
      vs-justify="center"
      vs-align="center"
      w="12"
    >
      <vs-card class="shadow"  data-aos="fade-right" data-aos-duration="1000">
        <template #title>
          <h3>More About Our Fundraisers</h3>
        </template>
        <template #text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            vel rem. Minus tempora voluptas at incidunt eveniet deleniti,
            delectus cumque, voluptates inventore soluta ipsam commodi sequi
            mollitia assumenda aliquam quidem repudiandae autem fugiat non
            dignissimos ducimus animi corporis! Reiciendis aliquam nihil
            doloremque et corrupti accusamus dolorum reprehenderit rerum ullam
            vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            quod ipsum quas harum doloribus dicta itaque sunt dolores veniam
            excepturi. Possimus magnam molestias itaque iure. Eveniet autem,
            fugit, animi illo ea error molestiae ratione expedita commodi
            voluptatum dolore ullam, ipsam maiores. Culpa, iste? Quas deleniti
            unde enim explicabo voluptatum quidem.
          </p>
          <vs-button class="button-color">
            <a href="fundraising">Tell me more!</a>
          </vs-button>
        </template>
      </vs-card>
      <template>
        <img class="imageChange" src="../assets/Fundraising Collage.png"  data-aos="fade-left" data-aos-duration="1000" />
      </template>
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
  padding-block: 3rem;
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
  width: 100%;
}
#fundraising {
  background-image: url('../assets/fundraisingHomePage.png');
  background-repeat: no-repeat;
  background-position: center;
  backdrop-filter: grayscale(1);
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}
</style>
