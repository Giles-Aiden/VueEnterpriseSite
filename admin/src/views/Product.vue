<template>
  <div class="productPage">
    <Sidebar></Sidebar>
    <div id="product">
      <productCard productName="Hydro Flask" productImage="flask.jpg"></productCard>
      <productCard productName="Hydro Flask" productImage="flask.jpg"></productCard>
      <productCard productName="Hydro Flask" productImage="flask.jpg"></productCard>
      <productCard productName="Hydro Flask" productImage="flask.jpg"></productCard>
      <productCard productName="Hydro Flask" productImage="flask.jpg"></productCard>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";

div#product{
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
    productCard
  },
};
</script>
