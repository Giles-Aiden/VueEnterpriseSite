<template>
  <div class="about">
    <Sidebar></Sidebar>
    <h1>This is an about page</h1>
  </div>
</template>
<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";

</style>

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
