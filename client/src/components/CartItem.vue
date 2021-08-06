<template>
  <div class="CartItem">
    <div>
      <h1>{{ info.item.name }}</h1>
      <img :src="info.item.img[0]" width="200" />
    </div>
    <div>
      <h1>Logo</h1>
      <img :src="info.img" width="200" />
    </div>
    <div class="attributes">
      <div class="attr-item">
        <span class="attr-title">Color: </span>
        <div
          :style="`
                  width: 20px;
                  height: 20px;
                  background-color: ${info.color};
                  `"
        />
      </div>
      <div
        class="attr-item"
        v-for="(attr, key, index) in info.attrs"
        :key="index"
      >
        <p>
          <span class="attr-title">{{ key }}: </span>
          <span class="attr-value">{{ attr }}</span>
        </p>
      </div>
    </div>
    <div>
      <h2>${{ (info.item.key.price * info.quantity) / 100 }}</h2>
      <!--InputNumber :value="1" :ref="info.item.key.id+index" @input="quantity($event, index, info.item.key.id+index)" :min="1" :max="20" showButtons buttonLayout="stacked" /-->
      <div class="quantityInp">
        <InputNumber
          v-model="quantity"
          @input="calc($event)"
          :min="1"
          :max="20"
          showButtons
          buttonLayout="stacked"
        />
        <Button
          @click="deleteItem()"
          class="p-button-danger"
          icon="pi pi-times"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
export default {
  name: 'CartItem',
  components: {
    Button,
    InputNumber,
  },
  props: {
    info: Object,
    itemNum: Number,
  },
  data() {
    return {
      quantity: 1,
    };
  },
  mounted() {
    if (this.info.quantity) this.quantity = this.info.quantity;
    else this.info.quantity = 1;
    console.log(this.info);
  },
  computed: {
    cart: function () {
      let x = JSON.parse(window.sessionStorage.getItem('cart'));
      return x;
    },
  },
  methods: {
    calc: function (event) {
      this.info.quantity = event;
      this.quantity = event;
      this.$emit('quantityUpdate', event);
    },
    deleteItem: function () {
      let newCart = this.cart.filter((item, index) => {
        return index !== this.itemNum;
      });
      this.$emit('cartRefresh');
      window.sessionStorage.setItem('cart', JSON.stringify(newCart));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
.CartItem {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  margin: 1em;
  background-color: $bg-main;
  border-radius: 1em;
  box-shadow: 1em 0.5em 0.7em 0.2em black;
  color: white;
  .attributes {
    display: flex;
    flex-flow: column nowrap;
    .attr-item {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      .attr-title {
        text-transform: capitalize;
        font-size: 2rem;
      }
      .attr-value {
        text-transform: capitalize;
        font-size: 1.3rem;
      }
    }
  }
}
</style>
