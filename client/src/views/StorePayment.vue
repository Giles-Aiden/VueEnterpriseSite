<template>
  <div class="Payment">
    <stripe-checkout
      ref="checkout"
      mode="payment"
      :pk="stripePK"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="(v) => (loading = v)"
    />
    <vs-button @click="submit">Pay!</vs-button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  name: 'Payment',
  components: {
    StripeCheckout,
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkout.redirectToCheckout();
    },
  },
  data() {
    this.stripePK = process.env.VUE_APP_STRIPE_PK;
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1IuhWZAoLvRfzUcy4ifJ1Ds3', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: `${process.env.VUE_APP_DOMAIN}/payment-success`,
      cancelURL: `${process.env.VUE_APP_DOMAIN}/payment-failure`,
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
</style>
