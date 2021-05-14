<template>
  <div class="productPage">
    <Sidebar></Sidebar>
    <div id="product">
      <productCard
        productName="Hydro Flask"
        productImage="flask.jpg"
        :productColors="[
          '#FF0000',
          '#FF4000',
          '#FFC800',
          '#333F35',
          '#3DA8BC',
          '#20283A',
          '#000000',
          '#372727',
          '#FFFFFF',
          '#B6458A',
          '#3B236D',
        ]"
      ></productCard>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";

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
};
</script>
