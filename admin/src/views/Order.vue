<template>
  <div id="orders">
    <Sidebar></Sidebar>
    <OrderComp :totalCost="1999" :items="['Water Bottle', 'Another Water Bottle']" :user="User" :orderID="1"/>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";
import OrderComp from "@/components/OrderComp.vue";

export default {
  name: "Home",
  components: {
    Sidebar,
    OrderComp,
  },
  data() {
    return {
      User: {
        name: "Jeff",
        lastName: "Smith",
        email: "Email10@gmail.com",
      }
    }
  }
};
</script>
