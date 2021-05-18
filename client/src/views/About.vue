<template>
  <div class="About">
    <Navbar title="About" />

    

    <AboutCard 
    itemName="About Us"
    itemBody=" Content About them "
    :img="require('@/assets/stock_photo1.jpg')"
    imgAlt=""/>
    <AboutCard 
    itemName="About Us"
    itemBody=" Content About them "
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
</style>
