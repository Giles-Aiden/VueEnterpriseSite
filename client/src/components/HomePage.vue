<template>
  <div>
    <div class="center-grid">
      <TitleCard :titleCard="titleCard" />
    </div>
    <div class="center-grid">
      <div vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <vs-card class="shadow" @mouseover="titleCard = 'Custom'">
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
      <div vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <vs-card class="shadow" @mouseover="titleCard = 'Professional'">
          <template #title>
            <h3>Professional</h3>
          </template>
          <!-- <template #img>
            <img src="/foto5.png" alt="" />
          </template> -->
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
              <a href="about">Check it out!</a>
            </vs-button>
          </template>
        </vs-card>
      </div>
      <div vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <vs-card class="shadow" @mouseover="titleCard = 'Precise'">
          <template #title>
            <h3>Precise</h3>
          </template>
          <!-- <template #img>
            <img src="/foto5.png" alt="" />
          </template> -->
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
              <a href="fundraising">Tell me more!</a>
            </vs-button>
          </template>
        </vs-card>
      </div>
    </div>
    <div class="center-grid" id="fundraising">
      <div class="titleCard">
        <div vs-type="flex" vs-justify="center" style="align-items: center">
          <h1 class="title">{{ title }}</h1>
        </div>
      </div>
    </div>
    <div
      class="center-grid"
      vs-type="flex"
      vs-justify="center"
      vs-align="center"
      w="12"
    >
      <vs-card class="shadow">
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
        <img class="imageChange" src="../assets/Fundraising Collage.png" />
      </template>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import TitleCard from '@/components/titleCard.vue';
export default Vue.extend({
  components: {
    TitleCard,
  },
  props: {
    title: String,
  },
  data: () => ({
    active: 0,
    titleCard: 'Professional',
  }),
});

// var switchWord = document.getElementById('precise').innerHTML;
// var switchWord2 = document.getElementById('custom').innerHTML;
// var switchWord3 = document.getElementById('professional').innerHTML;

// function rotate() {

// };
</script>

<style lang="scss" scoped>
$bg-main: #185ca3;
$bg-secondary: #2486f0;
$text-color: #fefefe;

.shadow {
  /*box-shadow: 18px $bg-secondary;*/
  box-shadow: 5px 10px 18px $bg-secondary;
  background: transparent;
  border-radius: 2rem;
}

.button-color {
  background-color: $bg-main;
}

.card-color {
  background-color: $bg-secondary;
}

[class*='vs-'] {
  padding-bottom: 0;
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
  flex-direction: row;
  margin: 0;
}

.title {
  z-index: 0;
  margin: calc((25vh + 5px) / 2);
  font-size: 250%;
  color: $text-color;
}
.vs-card__text {
  padding: 0;
}
/*
.center-grid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto auto;
}*/
.center-grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: 1rem;
  grid-gap: 1rem;
  & > div {
    padding: 0;
  }
}
.titleCard {
  padding: 1rem !important;
}

.rowOne {
  grid-row: 1/1;
  grid-column: 1/4;
}

a {
  text-decoration: none;
  color: $text-color;
  // background-color: $bg-main;
}

.imageChange {
  max-height: 20rem;
}
</style>
