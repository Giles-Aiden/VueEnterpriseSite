<template>
  <div class="productCard">
    <img height="300rem" :src="require(`../assets/${productImage}`)" />
    <h1>{{ productName }}</h1>
    <br />
    <div id="price">
      <h2>Price: ${{ price }}</h2>
      <input type="number" :id="productName">
      <vs-button @click="changePrice({ productName })" class="priceButton">Change Price</vs-button>
    </div>
    <div id="colors">
      <h2>Colors:</h2>
      <div class="color" v-for="(color, index) in colors" :key="color">
        <div
          :style="{ 'background-color': color }"
          style="width: 100%; height: 100%"
        ></div>
        <div class="delete" @click="deleteColor({ index })">X</div>
      </div>
      <div class="color">
        <form v-if="this.showing" @click="colorMenu()">
          <h2>+</h2>
        </form>
        <form v-else>
          <input type="color" :id="productName" />
          <br />
          <vs-button
            type="button"
            @click="
              addColor({ productName });
              colorMenu();
            "
            id="add"
            >Add</vs-button
          >
        </form>
      </div>
    </div>
    <ProductAttribute
      productAttr="lids"
      :productAttrItems="['lid1', 'lid2', 'lid3']"
    ></ProductAttribute>
    <ProductAttribute
      productAttr="sizes"
      :productAttrItems="['20oz', '40oz']"
    ></ProductAttribute>
    <br />
    <div id="menu">
      <vs-button class="menuButton">Delete</vs-button>
      <vs-button class="menuButton">Save</vs-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";

* {
  padding: 0;
  margin: 0;
}

div.productCard {
  background-color: $bodyElementColor;
  color: $bodyElementTextColor;
  min-width: 45%;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  text-align: center;
  border-radius: 0.5rem;
  display: inline-block;
  div#price{
    border: 0.1rem black groove;
    display: flex;
    justify-content: space-evenly;
    .priceButton{
      background-color: $sidebarColor;
    }
  }
  div#colors {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 6rem;
    overflow-x: auto;
    border: 0.1rem black groove;
    margin: 0.5rem;
    padding: 0.25rem;
    div.color {
      width: 2rem;
      min-width: 2rem;
      height: 2rem;
      border: black 0.1rem solid;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      h2 {
        width: 100%;
        height: 100%;
      }
      form {
        width: 100%;
        input[type="color"] {
          -webkit-appearance: none;
          border: none;
          width: 2rem;
          height: 2rem;
        }
        input[type="color"]::-webkit-color-swatch {
          border: none;
        }
        #add {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: 1rem;
          background-color: $sidebarColor;
          color: white;
        }
      }
    }
    div.delete{
        position: relative;
        top: -2.5rem;
        left: 1.25rem;
        background-color: red;
        color: white;
        border: black 0.001rem solid;
        border-radius: 50%;
        width: 1.25rem;
        height: 1.25rem;
    }
   
    div#menu{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        .menuButton{
            background-color: $bg-secondary;
            &:hover {
                box-shadow: 0 .25rem .5rem $shadow;
            }
        }
    }
  }
}
</style>

<script>
import ProductAttribute from "@/components/ProductAttribute.vue";

export default {
  components: { ProductAttribute },
  props: ["productName", "productImage", "productColors", "productPrice"],
  data: function () {
    return {
      colors: this.productColors,
      showing: true,
      price: this.productPrice,
    };
  },
  methods: {
    deleteColor: function (i) {
      console.log(this.colors);
      this.colors.splice(i.index, 1);
    },
    addColor: function (picker) {
      if (
        this.colors.indexOf(
          document.getElementById(picker.productName).value
        ) == -1
      ) {
        this.colors.push(document.getElementById(picker.productName).value);
      }
    },
    colorMenu: function () {
      if (this.showing) {
        this.showing = false;
      } else {
        this.showing = true;
      }
    },
    changePrice: function (product) {
      this.price = document.getElementById(product.productName).value;
    }
  },
};
</script>
