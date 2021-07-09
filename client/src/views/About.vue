<template>
  <div class="About">
    <Navbar title="About" />
    <hr />

    <div class="card-contain">
      <div class="big-card" data-aos="fade-up" data-aos-duration="1000">
        <h1 id="something" class="section-header">Something Here</h1>
        <p class="big-card-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>

      <br /><br /><br />
      <div class="big-card" data-aos="fade-up" data-aos-duration="1000">
        <h1 id="start" class="section-header">Where We Started</h1>
        <p class="big-card-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
      <br /><br /><br />
      <div class="big-card" data-aos="fade-up" data-aos-duration="1000">
        <h1 id="journey" class="section-header">Our Journey</h1>
        <p class="big-card-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
      <br /><br /><br />
      <div class="big-card" data-aos="fade-up" data-aos-duration="1000">
        <h1 id="idea" class="section-header">Idea Behind the Product</h1>
        <p class="big-card-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
      <br /><br /><br />
      <div class="big-card" data-aos="fade-up" data-aos-duration="1000">
        <h1 id="future" class="section-header">Looking to the Future</h1>
        <p class="big-card-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'About',
  components: {
    Navbar,
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
.card-contain {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
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
  width: 30%;
  min-width: 400px;
  max-width: 1500px;
  margin: 1em auto;
  padding: 1em;
  box-shadow: black 0.2em 0.2em 0.4em;
  border-radius: 1em;
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
  font-family: 'Lato', sans-serif;
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

.center-grid {
  display: flex;
}
</style>
