<template>
  <div class="Cart">
    <div v-if="cart == [] || cart == undefined" id="emptyCart">
      <h1>Your cart seems to be empty!</h1>
      <p>
        Fill with with some amazing products from the store
        <router-link to="/store/items">here!</router-link>
      </p>
    </div>
    <div
      v-else
      v-for="(item, index) in cart"
      :key="index"
      class="cartItemContainer"
    >
      <CartItem
        :info="item"
        :itemNum="index"
        @quantityUpdate="updateItem($event, index)"
        @cartRefresh="recompute = !recompute"
        data-aos="fade-left"
        class="cartItem"
      />
    </div>
    <div id="closing">
      <router-link to="/store/items"
        ><Button label="Add Product"
      /></router-link>
      <h1>Subtotal: ${{ subtotal }}</h1>
      <span v-if="subtotal !== 0"
        ><Button label="Checkout" @click="checkout"
      /></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
#closing {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}
#emptyCart {
  margin: 20% auto;
}
.cartItemContainer {
  display: flex;
  justify-content: center;
  .cartItem {
    width: 80%;
  }
}
</style>

<script>
import Button from 'primevue/button';
import CartItem from '@/components/CartItem.vue';
const axios = require('axios');
export default {
  name: 'Cart',
  components: {
    Button,
    CartItem,
  },
  data() {
    return {
      recompute: false,
      quantities: [],
    };
  },
  created() {
    let x = [];
    for (let i = 0; i < this.cart.length; i++)
      if (this.cart[i].quantity) x.push(this.cart[i].quantity);
      else x.push(1);
    this.quantities = x;
    this.$emit('shop', 100);
  },
  computed: {
    cart: function () {
      this.recompute;
      let x = JSON.parse(window.sessionStorage.getItem('cart'));
      return x;
    },
    currentItem: function () {
      return JSON.parse(window.sessionStorage.getItem('currentItem'));
    },
    subtotal: function () {
      this.recompute;
      let sub = 0;
      this.cart.forEach((item) => (sub += item.item.key.price * item.quantity));
      return sub / 100;
    },
  },
  methods: {
    updateItem: function (val, index) {
      let x = this.cart;
      x[index].quantity = val;
      window.sessionStorage.setItem('cart', JSON.stringify(x));
      this.recompute = !this.recompute;
    },
    checkout: async function () {
      let items = [];
      this.cart.forEach((i) => {
        items.push({
          price: i.item.key.id,
          quantity: i.quantity,
        });
      });
      let res = await axios.post(process.env.VUE_APP_API + '/api/checkout', {
        cart: items,
      });
      window.sessionStorage.setItem('checkoutId', res.data[1]);
      window.location.href = res.data[0];
    },
  },
};
</script>
