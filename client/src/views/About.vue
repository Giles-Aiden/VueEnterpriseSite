<template>
  <div class="About">
    <Navbar title="About" />

    

    <AboutCard 
    itemName="The Company"
    itemBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis eleifend."
    :img="require('@/assets/stock_photo1.jpg')"
    imgAlt=""/>
    
    <AboutCard 
    itemName="Where We Started"
    itemBody="Dolor morbi non arcu risus quis varius. Vitae auctor eu augue ut lectus arcu. Sem integer vitae justo eget magna fermentum iaculis. Rhoncus mattis rhoncus urna neque viverra justo. Sit amet risus nullam eget felis eget nunc lobortis. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Sapien faucibus et molestie ac feugiat sed lectus. "
    :img="require('@/assets/stock_photo2.jpg')"
    imgAlt=""/>

    <AboutCard 
    itemName="Our Journey"
    itemBody="Enim facilisis gravida neque convallis. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Facilisis leo vel fringilla est. Egestas sed sed risus pretium. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. "
    :img="require('@/assets/stock_photo2.jpg')"
    imgAlt=""/>

    <AboutCard 
    itemName="Idea behind the Product"
    itemBody="Sit amet tellus cras adipiscing enim. Risus nullam eget felis eget nunc lobortis mattis aliquam. Eget nunc scelerisque viverra mauris in aliquam. Malesuada proin libero nunc consequat interdum. Pulvinar mattis nunc sed blandit libero. "
    :img="require('@/assets/stock_photo2.jpg')"
    imgAlt=""/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import AboutCard from "@/components/AboutCard.vue";

export default {
  name: "About",
  components: {
    Navbar,
    AboutCard,
  },
};
</script>

<style lang="scss" scoped>
hr {
  border: solid #6cacf0 0.05em;
  border-radius: 10000000em;
  margin: 0em 2em;
  box-shadow: black 0em 0.1em 0.1em;
  margin: 2em auto;
  width: 85%;
}
.grid {
  width: 85%;
  margin: 0 auto;
  //border: solid black 2px;
  scroll-behavior: smooth;
  box-shadow: black 0em 0em 0.5em;
  border-radius: 1em;
  background-color: #6cacf0;
  vs-row {
    align-content: center;
    text-align: center;
  }
}

.card div {
  margin-inline: auto;
}
div.vs-card {
  margin-inline: auto;
  width: 350px;
  height: 250px;
}

.collage-text {
  z-index: 2;
  position: absolute;
  text-align: center;
  top: 25%;
  left: 25%;
  right: 25%;
  bottom: 25%;
  color: #061b31;
  text-shadow: #6cacf0 -0.05em 0em, #6cacf0 0.05em 0em, #6cacf0 0em 0.05em,
    #6cacf0 0em -0.05em;
}

.big-card {
  width: 95%;
  margin: 0 auto;
  padding: 1em;
  box-shadow: black 0.2em 0.2em 0.4em;
  border-radius: 1em;
  margin: 0.5em 1em;
  background-color: #185ca3;
  color: white;
  line-height: 2em;
  text-align: middle;
  text-indent: 2.5em;
  img {
    float: left;
    width: 10em;
    display: none;
  }
  p {
    display: inline;
  }
}

.section-header {
  font-family: "Lato", sans-serif;
  font-weight: bold;
}

.about-image-collage {
  z-index: -1;
  scroll-behavior: smooth;
  margin: 1em;
  box-shadow: black 0.1em 0.1em 0.3em;
  background-color: white;
  border-radius: 0.5em;
}

#responsive {
  height: auto;
  border: none;
}

.center-grid{
  display: flex;
}
</style>
