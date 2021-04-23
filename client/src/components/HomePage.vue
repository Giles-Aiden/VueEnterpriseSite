<template>
  <div>
    <div class="center-grid">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
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
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class="bx bx-heart"></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span"> Shop Here </span>
              </vs-button>
            </template>
          </vs-card>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
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
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class="bx bx-heart"></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class="bx bx-chat"></i>
                <span class="span"> 54 </span>
              </vs-button>
            </template>
          </vs-card>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
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
            </template>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
    <div class="center-grid" id="fundraising">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" style="align-items: center;">
            <h1 class="title">{{ title }}</h1>
        </vs-col>
      </vs-row>
    </div>
    <div class="center-grid"></div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
  },
});</script>

<style lang="scss" scoped>
$bg-main: #185ca3;
$bg-secondary: #2486f0;
$text-color: #fefefe;
vs-button {
  background-color: $bg-main;
}
vs-card {
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
}

.title {
    z-index: 0;
    margin: calc((25vh + 5px) / 2);
    font-size: 250%;
    color: $text-color;
}
</style>
