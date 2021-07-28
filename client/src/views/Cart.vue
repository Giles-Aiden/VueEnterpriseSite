<template>
  <div class="Cart">
    <div class="item" v-for="(item, index) in cart" :key="index">
      <div>
        <h1>{{item.item.name}}</h1>
        <img :src="item.item.img" width="200"/>
      </div> 
      <img :src="item.img" width="200" />
      <div class="attributes">
        <div class="attr-item" v-for="(attr, key, index) in item.attrs" :key="index">
          <p>
            <span class="attr-title">{{key}}: </span>
            <span class="attr-value">{{attr}}</span>
          </p>
        </div>
      </div>
      <Button @click="deleteItem(index)"><i class="pi pi-times"></i></Button>
    </div>
  </div>
</template>

<style>
.item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  .attributes {
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    .attr-item {
      display: flex;
      flex-flow: row nowrap;
    }
  }
}
</style>

<script>
export default {
  name: 'Cart',
  components: {},
  data() {
    return {
      recompute: false
    }
  },
  computed: {
    cart: function () {
      this.recompute;
      let x = JSON.parse(window.sessionStorage.getItem('cart'));
      console.log(x);
      return x
    },
    currentItem: function () {
      return JSON.parse(window.sessionStorage.getItem('currentItem'));
    },
  },
  methods: {
    deleteItem: function(i) {
      let newCart = this.cart.filter((item, index) => {
        return index !== i;
      });
      window.sessionStorage.setItem('cart', JSON.stringify(newCart));
      this.recompute = !this.recompute;
    },
  }
};
</script>
