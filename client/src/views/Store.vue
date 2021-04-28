<template>
  <div class="Store">
    <Navbar title="Store" />
    <ProgressBar :value="progress" />
    <div class="storeNav">
      <router-link to='/store/items' @click="setProgress(10)" class='storeLink'><vs-button>go</vs-button></router-link>
      <router-link to='/store/editor' @click="this.progress=60" class='storeLink'><vs-button>go</vs-button></router-link>
      <router-link to='/store/checkout' @click="this.preogess=90" class='storeLink'><vs-button>go</vs-button></router-link>
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
    setProgress: (num) => this.progress = num,
  },
  data() {
    return {
      progress: 40,
    }
  }
};
</script>
