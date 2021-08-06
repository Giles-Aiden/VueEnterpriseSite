<template>
  <div class="PaymentSucess">
    <h1>Payment Success</h1>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: 'PaymentSuccess',
  components: {},
  methods: {},
  data() {
    return {};
  },
  async mounted() {
    let store = window.sessionStorage;
    let products = await JSON.parse(await store.getItem('cart'));
    console.log(products);
    await axios
      .post(process.env.VUE_APP_API + '/api/order', {
        checkoutId: await store.getItem('checkoutId'),
        products: products,
        customerInfo: new Object(),
      })
      .then((res) => {
        console.log(res);
        //store.setItem('cart', '');
        //store.setItem('currentItem', '');
        //store.setItem('checkoutId', '');
      })
      .catch((err) => console.error(err));

    this.$emit('shop', 100);
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: green;
}
</style>
