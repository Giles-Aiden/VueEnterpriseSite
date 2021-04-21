<template>
  <div class="About">
    <Navbar title="About" />
    <br />
    <div class="grid">
      <vs-row>
        <vs-col w="4" style="background-color: blue">
          <a href="#something">
            <div class="blur-collage">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-a7kQyZYShhLi8sDzorOrUxwJBZIkjB6Xrw&usqp=CAU"
                id="responsive"
              />
            </div>
            <!--<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3RJxbcTiQMQD4SblEcz4_wGCAc4TDL-M7w&usqp=CAU" class="blur-collage" style="z-index:1;">-->
            <h1 class="collage-text">Something Here</h1>
          </a>
        </vs-col>
        <vs-col w="8" style="background-color: skyblue">
          <a href="#start">
            <div class="blur-collage">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-a7kQyZYShhLi8sDzorOrUxwJBZIkjB6Xrw&usqp=CAU"
                id="responsive"
              />
            </div>
          </a>
          <!--<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3RJxbcTiQMQD4SblEcz4_wGCAc4TDL-M7w&usqp=CAU" class="blur-collage" style="z-index:1;">-->
          <h1 class="collage-text">Where we started</h1>
        </vs-col>
      </vs-row>

      <vs-row>
        <vs-col w="12" style="background-color: green">
          <a href="#journey">
            <div class="blur-collage">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-a7kQyZYShhLi8sDzorOrUxwJBZIkjB6Xrw&usqp=CAU"
                id="responsive"
              />
            </div>
            <!--<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3RJxbcTiQMQD4SblEcz4_wGCAc4TDL-M7w&usqp=CAU" class="blur-collage" style="z-index:1;">-->
            <h1 class="collage-text" style="filter: blur(0px); z-index: 2">
              Our Journey
            </h1>
          </a>
        </vs-col>
      </vs-row>
      <vs-row>
        <vs-col w="8" style="background-color: purple">
          <a href="#idea">
            <div class="blur-collage">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-a7kQyZYShhLi8sDzorOrUxwJBZIkjB6Xrw&usqp=CAU"
                id="responsive"
              />
              
            </div>
            <!--<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3RJxbcTiQMQD4SblEcz4_wGCAc4TDL-M7w&usqp=CAU" class="blur-collage" style="z-index:1;">-->
            <h1 class="collage-text" style="filter: blur(0px)">
              Idea Behind the Product
            </h1>
          </a>
        </vs-col>
        <vs-col w="4" style="background-color: skyblue">
          <a href="#future">
            <div class="blur-collage">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-a7kQyZYShhLi8sDzorOrUxwJBZIkjB6Xrw&usqp=CAU"
                id="responsive"
              />
            </div>
            <!--<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY3RJxbcTiQMQD4SblEcz4_wGCAc4TDL-M7w&usqp=CAU" class="blur-collage" style="z-index:1;">-->
            <h1 class="collage-text">Looking to the Future</h1>
          </a>
        </vs-col>
      </vs-row>
    </div>
    <br><br><br>


 <!--   <div >
    <div class="big-card" >
      <h1 id="something" class="section-header">Something</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    </div>-->


  <vs-card type="4" style="background-color: blue;">>
    <template class="section-header" #title>
      <h1 id="something">Pot with a plant</h1>
    </template>
    <template #img>
      <img >
    </template>
    <template #text>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </template>
  </vs-card>








    <br><br><br>
    <div class="big-card" style="background-color: skyblue;opacity: 0.6;">
      <h1 id="start" class="section-header">Where We Started</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <br><br><br>
    <div class="big-card" style="background-color: green;opacity: 0.6;">
      <h1 id="journey" class="section-header">Our Journey</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <br><br><br>
    <div class="big-card" style="background-color: purple;opacity: 0.6;">
      <h1 id="idea" class="section-header">Idea Behind the Product</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <br><br><br>
    <div class="big-card" style="background-color: skyblue;opacity: 0.6;">
      <h1 id="future" class="section-header">Looking to the Future</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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

.grid {
  width: 80%;
  margin: 0 auto;
  border: solid black 2px;
  vs-row {
    align-content: center;
    text-align: center;
  }
}
.collage-text {
  z-index: 2;
  position: absolute;
  text-align: center;
  top: 25%;
  left: 25%;
  right: 25%;
  bottom: 25%;
  color: black;
}

.big-card{
  width: 80%;
  margin: 0 auto;
  border: solid black 2px;
}


.section-header{
  font-family: 'Lato', sans-serif;
  font-weight: bold;
}

.blur-collage {
  z-index: -1;
  filter: blur(1px);
}

#responsive {
  max-width: 100%;
  height: auto;
}
</style>
