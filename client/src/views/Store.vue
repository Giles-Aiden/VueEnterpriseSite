<template>
  <div class="Store">
    <Navbar title="Store" />
    <ProgressBar :value="progress" />
    <div class="storeNav">
      <router-link
        to="/store/items"
        @click.native="progress = 10"
        class="storeLink"
        ><vs-button>Shop for Items</vs-button></router-link
      >
      <router-link
        to="/store/editor"
        @click.native="progress = 50"
        class="storeLink"
        ><vs-button>Edit Logo Image</vs-button></router-link
      >
      <router-link
        to="/store/checkout"
        @click.native="progress = 90"
        class="storeLink"
        ><vs-button>Purchase</vs-button></router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.storeNav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 100%;
  margin: auto;
  .storeLink {
    width: 100%;
    * {
      width: 80%;
    }
  }
}
</style>

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
