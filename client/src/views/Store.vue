<template>
  <div class="Store">
    <Navbar title="Store" />
    <ProgressBar :value="progress" />
    <div class="storeNav">
      <router-link
        to="/store/items"
        @click.native="progress = 10"
        class="storeLink"
        ><vs-button class="button-color">Shop for Items</vs-button></router-link
      >
      <router-link
        to="/store/editor"
        @click.native="progress = 50"
        class="storeLink"
      >
        <vs-button class="button-color">Edit Logo Image</vs-button>
      </router-link>
      <router-link
        to="/store/checkout"
        @click.native="progress = 90"
        class="storeLink"
        ><vs-button class="button-color">Purchase</vs-button></router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Store',
  components: {
    Navbar,
  },
  methods: {
    setProgress: (num) => {
      console.log('called func');
      this.progress = num;
    },
  },
  data() {
    return {
      progress: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
$bg-main: #185ca3;
$bg-secondary: #6cacf0;
$shadow: #113f70;

.button-color {
  background-color: $bg-main;
  box-shadow: $shadow;
}
.storeNav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 100%;
  margin: auto;
  .storeLink {
    width: 100%;
    text-decoration: none;
    * {
      width: 80%;
    }
  }
}
</style>
