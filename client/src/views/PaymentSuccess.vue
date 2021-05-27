<template>
  <div class="PaymentSucess">
    <Navbar title="" />
    <h1>Payment Success</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'PaymentSuccess',
  components: {
    Navbar,
  },
  methods: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: green;
}
</style>
