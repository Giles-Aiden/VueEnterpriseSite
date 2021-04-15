<template>
  <div class="About">
    <Navbar title="About" />
    <br>
    <div class="grid">
      <vs-row>
        <vs-col w="4" >
          <!--<img src="" class="blur-collage" style="z-index:1;">-->
          <h1 class="collage-text" style="z-index: 2;">Something Here</h1>
        </vs-col>
        <vs-col w="8">
          <!--<img src="" class="blur-collage" style="z-index:1;">-->
          <h1 class="collage-text" style="z-index: 2;">Where we started</h1>
        </vs-col>
      </vs-row>
      <vs-row>
        <vs-col w="12">
          <!--<img src="" class="blur-collage" style="z-index:1;">-->
          <h1 class="collage-text" style="z-index: 2;">Our Journey</h1>
        </vs-col>
      </vs-row>
      <vs-row>
        <vs-col w="8">
          <!--<img src="" class="blur-collage" style="z-index:1;">-->
          <h1>Idea Behind the Product</h1>
        </vs-col>
        <vs-col w="4">
          <!--<img src="" class="blur-collage" style="z-index:1;">-->
          <h1 style="position:relative;z-index: 2;">Looking to the Future</h1>
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
  border: solid black 2px;
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
