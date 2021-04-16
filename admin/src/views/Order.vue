<template>
  <div id="orders">
    <Sidebar></Sidebar>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Home",
  components: {
    Sidebar,
  },
};
</script>
