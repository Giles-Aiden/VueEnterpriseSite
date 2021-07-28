<template>
  <div class="Store">
    <Navbar title="Store" />
    <ProgressBar :value="progress" />
    <router-view @shop="pUpdate" />
    <VFooter id="footer" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import VFooter from '@/components/VFooter.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    VFooter,
  },
  data() {
    return {
      progress: 0,
    };
  },
  methods: {
    pUpdate: function (value) {
      this.progress = value;
    },
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
.storeLink {
  display: flex;
  justify-content: center;
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
