<template>
  <div class="shadow">
    <vue-typed-js
      :strings="changingTitle"
      :typeSpeed="50"
      :backSpeed="100"
      :loop="true"
    >
      <h1 class="typing"></h1>
    </vue-typed-js>
    <h1>Laser Engraving</h1>
  </div>
</template>

<script>
import Vue from 'vue';
import VueTypedJs from 'vue-typed-js';
Vue.use(VueTypedJs);
export default {
  name: 'titleCard',
  props: {
    titleCard: String,
  },
  data() {
    return {
      changingTitle: ['Custom', 'Professional', 'Precise'],
    };
  },
  methods: {
    pushTitle() {
      this.changingTitle.push('newTitle');
      console.log(this.changingTitle);
    },
  },
};
</script>

<style lang="scss" scoped>
$bg-main: #185ca3;
$bg-secondary: #2486f0;
$text-color: #fefefe;
.shadow {
  background: transparent;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  h1 {
    padding: 0 0.25rem;
    font-size: 2vw;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-y: scroll;
    height: 3rem;
  }
}
</style>
