<template>
  <div class="About">
    <Navbar title="About" />
    <br>
    <div class="grid">
      <vs-row>
        <vs-col w="4" style="border: solid black 2px;">
          <img src="" class="blur-collage" style="z-index:1;">
          <h1 class="collage-text" style="z-index: 2;"></h1>
        </vs-col>
        <vs-col w="8" style="border: solid black 2px;">
          <h1>Gbruh 2</h1>
        </vs-col>
      </vs-row>
      <vs-row>
        <vs-col w="12" style="border: solid black 2px;">
          <h1>Gbruh 3</h1>
        </vs-col>
      </vs-row>
      <vs-row>
        <vs-col w="8" style="border: solid black 2px;">
          <h1>Gbruh 4</h1>
        </vs-col>
        <vs-col w="4" style="border: solid black 2px;">
          <img src="" class="blur-collage" style="z-index:1;">
          <h1 style="position:relative;z-index: 2;">Future</h1>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "About",
  components: {
    Navbar,
  },
};
</script>
<style lang="scss" scoped>
.grid{
  width: 80%;
  margin: 0 auto;
  vs-row{
    align-content: center;
    text-align: center;
  }

 
}
collage-text{
  z-index: 2;
}
blur-collage{
  z-index: 1;
  filter: blur(50px);
}
</style>
