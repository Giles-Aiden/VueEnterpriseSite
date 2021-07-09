<template>
  <div class="productCard">
    <img height="200vh" :src="productImage" />
    <h1>{{ productName }}</h1>
    <br />
    <div id="price">
      <h2>Price: ${{ price }}</h2>
      <input type="number" :id="productName + ' Price'" />
      <vs-button @click="changePrice({ productName })" class="priceButton"
        >Change Price</vs-button
      >
    </div>
    <div id="colors">
      <h2>Colors:</h2>
      <div class="color" v-for="(color, index) in colors" :key="index">
        <div
          :style="{ 'background-color': color }"
          style="width: 100%; height: 100%"
        ></div>
        <div class="delete" @click="deleteColor({ index })">X</div>
      </div>
      <div class="color">
        <form v-if="this.showing" @click="colorMenu()">
          <h2 style="fontsize: 1.5em">+</h2>
        </form>
        <form v-else>
          <input
            type="color"
            :id="productName + ' Color'"
            style="background: none; width: 2rem; height: 2rem"
          />
          <br />
          <vs-button
            type="button"
            @click="
              addColor({ productName });
              colorMenu();
            "
            id="add"
          >
            Add
          </vs-button>
        </form>
      </div>
    </div>
    <ProductAttribute
      v-for="(value, title, index) in attributes"
      v-on:update="attributeUpdate"
      :key="index"
      :attrs="value"
      :name="title"
    ></ProductAttribute>
    <br />
    <div id="menu" :v-if="editing">
      <vs-button class="menuButton" @click="deleteProduct">Delete</vs-button>
      <vs-button class="menuButton" @click="saveProduct">Save</vs-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";

* {
  padding: 0;
  margin: 0;
}

h1 {
  font-size: calc(1.5vw + 1.5vh);
}
h2 {
  font-size: calc(1vw + 1vh);
}

div.productCard {
  background-color: $bg-secondary;
  color: $bodyElementColor;
  min-width: 300px;
  width: 45%;
  margin-right: 1rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  border-radius: 0.5rem;
  display: inline-block;
  div#price {
    border: 0.1rem black groove;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    input {
      width: 30%;
      height: 2rem;
      border-radius: 12px;
      border: none;
    }
    .priceButton {
      background-color: $sidebarColor;
      width: 30%;
      font-size: calc(0.7vw + 0.7vh);
    }
  }
  div#colors {
    display: flex;
    justify-content: flex-start;
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
    div.delete {
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
  }
  div#menu {
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-evenly;
    .menuButton {
      background-color: $shadow;
      font-size: calc(0.7vw + 0.7vh);
      &:hover {
        box-shadow: 0 0.25rem 0.5rem $shadow;
      }
    }
  }
}
</style>

<script>
const axios = require("axios");
import ProductAttribute from "@/components/ProductAttribute.vue";

export default {
  components: { ProductAttribute },
  props: {
    product: Object,
    editing: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      productName: this.product.name,
      productImage: this.product.img,
      attributes: undefined,
      colors: undefined,
      showing: true,
      price: this.product.price,
    };
  },
  mounted() {
    var store = this.product.attrs;
    this.colors = store.colors;
    delete store.colors;
    this.attributes = store;
  },
  methods: {
    deleteColor: function (i) {
      this.colors.splice(i.index, 1);
    },
    addColor: function (picker) {
      if (
        this.colors.indexOf(
          document.getElementById(picker.productName + " Color").value
        ) == -1
      ) {
        this.colors.push(
          document.getElementById(picker.productName + " Color").value
        );
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
      this.price = document.getElementById(
        product.productName + " Price"
      ).value;
      document.getElementById(product.productName + " Price").value = "";
    },
    attributeUpdate: function (updated) {
      try {
        this.attributes[updated[0]] = updated[1];
      } catch (err) {
        console.error(err);
      }
    },
    saveProduct: function () {
      console.log("saved " + this.product);
      axios.put("/api/products", {
        data: {
          id: this.product,
        },
      });
    },
    deleteProduct: function () {},
  },
};
</script>
