<template>
  <div class="PaymentFail">
    <Navbar title=""/>
    <h1>Payment Failure</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'PaymentFail',
  components: {
    Navbar,
  },
  methods: {
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
