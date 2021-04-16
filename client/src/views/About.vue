<template>
  <div class="About">
    <Navbar title="About" />
    <br>
    <div class="grid">
      <vs-row>
        <vs-col w="4">
          <div class="blur-collage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-a7kQyZYShhLi8sDzorOrUxwJBZIkjB6Xrw&usqp=CAU" id="responsive">
          </div>
          <!--<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3RJxbcTiQMQD4SblEcz4_wGCAc4TDL-M7w&usqp=CAU" class="blur-collage" style="z-index:1;">-->
          <h1 class="collage-text">Something Here</h1>
          
        </vs-col>
        <vs-col w="8">
          <div class="blur-collage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-a7kQyZYShhLi8sDzorOrUxwJBZIkjB6Xrw&usqp=CAU" id="responsive">
          </div>
            <!--<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3RJxbcTiQMQD4SblEcz4_wGCAc4TDL-M7w&usqp=CAU" class="blur-collage" style="z-index:1;">-->
          <h1 class="collage-text">Where we started</h1>
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col w="12">
          <div class="blur-collage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-a7kQyZYShhLi8sDzorOrUxwJBZIkjB6Xrw&usqp=CAU" id="responsive">
          </div>
            <!--<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3RJxbcTiQMQD4SblEcz4_wGCAc4TDL-M7w&usqp=CAU" class="blur-collage" style="z-index:1;">-->
          <h1 class="collage-text" style="filter: blur(0px);z-index: 2;">Our Journey</h1>
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col w="8">
          <div class="blur-collage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-a7kQyZYShhLi8sDzorOrUxwJBZIkjB6Xrw&usqp=CAU" id="responsive">
          </div>
            <!--<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3RJxbcTiQMQD4SblEcz4_wGCAc4TDL-M7w&usqp=CAU" class="blur-collage" style="z-index:1;">-->
          <h1 class="collage-text" style="filter: blur(0px);z-index: 2;">Idea Behind the Product</h1>
        </vs-col>
        <vs-col w="4">
          <div class="blur-collage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-a7kQyZYShhLi8sDzorOrUxwJBZIkjB6Xrw&usqp=CAU" id="responsive">
          </div>
           <!--<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3RJxbcTiQMQD4SblEcz4_wGCAc4TDL-M7w&usqp=CAU" class="blur-collage" style="z-index:1;">-->
          <h1 class="collage-text">Looking to the Future</h1>
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
.collage-text{
  z-index: 2;
  position: absolute;
  text-align: center;
  top: 25%;
  left: 25%;
  right: 25%;
  bottom: 25%;
}

.blur-collage{
  z-index: -1;
  filter: blur(2.5px);
}

#responsive {
  max-width: 100%; 
  height: auto;
}


</style>
