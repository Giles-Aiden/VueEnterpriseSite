<template>
  <div class="PaymentFail">
    <h1>Payment Failure</h1>
  </div>
</template>

<script>
export default {
  name: 'PaymentFail',
  components: {},
  methods: {},
  data() {
    return {};
  },
  mounted() {
    this.$emit('shop', 0);
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
