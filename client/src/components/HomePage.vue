<template>
  <div>
    <div class="center-grid">
      <div vs-type="flex" vs-justify="center" vs-align="center">
        <vs-card>
          <template #title>
              <h3 id="custom">Custom</h3>
              <h4>Laser Engraving</h4>
            </template>
        </vs-card>
      </div>
        <div vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <vs-card>
            <template #title>
              <h3>Custom</h3>
            </template>
            <template #img>
              <img src="/foto5.png" alt="" />
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, vel rem. Minus tempora voluptas at incidunt eveniet
                deleniti, delectus cumque, voluptates inventore soluta ipsam
                commodi sequi mollitia assumenda aliquam quidem repudiandae
                autem fugiat non dignissimos ducimus animi corporis! Reiciendis
                aliquam nihil doloremque et corrupti accusamus dolorum
                reprehenderit rerum ullam vel?
              </p>
              <vs-button
                :active="active == 0"
                @click="active = 0"
              >                
              <a href="Store.vue">Shop now!</a>
              </vs-button>
            </template>
          </vs-card>
        </div>
        <div vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <vs-card>
            <template #title>
              <h3>Professional</h3>
            </template>
            <template #img>
              <img src="/foto5.png" alt="" />
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, vel rem. Minus tempora voluptas at incidunt eveniet
                deleniti, delectus cumque, voluptates inventore soluta ipsam
                commodi sequi mollitia assumenda aliquam quidem repudiandae
                autem fugiat non dignissimos ducimus animi corporis! Reiciendis
                aliquam nihil doloremque et corrupti accusamus dolorum
                reprehenderit rerum ullam vel?
              </p>
              <vs-button>
                <a href="About.vue">Check it out!</a>
              </vs-button>
            </template>
          </vs-card>
        </div>
        <div vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <vs-card>
            <template #title>
              <h3>Precise</h3>
            </template>
            <template #img>
              <img src="/foto5.png" alt="" />
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, vel rem. Minus tempora voluptas at incidunt eveniet
                deleniti, delectus cumque, voluptates inventore soluta ipsam
                commodi sequi mollitia assumenda aliquam quidem repudiandae
                autem fugiat non dignissimos ducimus animi corporis! Reiciendis
                aliquam nihil doloremque et corrupti accusamus dolorum
                reprehenderit rerum ullam vel?
              </p>
              <vs-button
                :active="active == 0"
                @click="active = 0"
              >
                <a href="Fundraising.vue">Tell me more!</a>
              </vs-button>
            </template>
          </vs-card>
        </div>
    </div>
    <div class="center-grid" id="fundraising">
      <div>
        <div vs-type="flex" vs-justify="center" style="align-items: center">
          <h1 class="title">{{ title }}</h1>
        </div>
      </div>
    </div>
    <!-- <div class="center-grid">
      <div><p>item</p></div>
      <div><p>item</p></div>
      <div><p>item</p></div>
      <div><p>item</p></div>
      <div><p>item</p></div>
    </div> -->
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
  },
  data: () => ({
    active: 0
  })
});

</script>

<style lang="scss" scoped>
$bg-main: #185ca3;
$bg-secondary: #2486f0;
$text-color: #fefefe;
.button-color {
  background-color: $bg-main;
}
.card-color {
  background-color: $bg-secondary;
}
#fundraising {
  background-image: url("../assets/fundraisingHomePage.png");
  background-repeat: no-repeat;
  background-position: center center;
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
  margin: .5rem;
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
</style>
