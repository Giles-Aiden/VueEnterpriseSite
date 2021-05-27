<template>
  <div class="productPage">
    <Sidebar></Sidebar>
    <div id="product">
      <productCard
        v-for="(product, index) in products"
        :key="index"
        :product="products[index]"
      ></productCard>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";
.productPage {
  background: $bg-main;
  margin: 0;
  min-height: 100vh;
}
div#product {
  margin-left: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>

<script>
// @ is an alias to /src

import Sidebar from "@/components/Sidebar.vue";
import productCard from "@/components/productCard.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
    productCard,
  },
  data: function () {
    return {
      products: [
        {
          name: "Hydro Flask",
          image: "flask.jpg",
          colors: [
            "#FF0000",
            "#FF4000",
            "#FFC800",
            "#333F35",
            "#3DA8BC",
            "#20283A",
            "#000000",
            "#372727",
            "#FFFFFF",
            "#B6458A",
            "#3B236D",
          ],
          price: 20,
          attributes: [
            {
              attr: "lids",
              items: [
                {
                  attribute: "lid1",
                  priceUp: "0",
                },
                {
                  attribute: "lid2",
                  priceUp: "0",
                },
                {
                  attribute: "lid3",
                  priceUp: "3",
                },
              ],
            },
            {
              attr: "sizes",
              /* items: ["20oz", "40oz"], */
              items: [
                {
                  attribute: "20oz",
                  priceUp: 0,
                },
                {
                  attribute: "40oz",
                  priceUp: 10,
                },
              ],
            },
          ],
        },
        {
          name: "Phone Case",
          image: "case.jpg",
          colors: ["#231709", "#3c280d", "#9a7b4f"],
          price: 15,
          attributes: [
            {
              attr: "types",
              /* items: ["iPhone8", "iPhone8s", "iPhoneX"], */
              items: [
                {
                  attribute: "iPhone8",
                  priceUp: 0,
                },
                {
                  attribute: "iPhone8s",
                  priceUp: 0,
                },
                {
                  attribute: "iPhoneX",
                  priceUp: 2,
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
