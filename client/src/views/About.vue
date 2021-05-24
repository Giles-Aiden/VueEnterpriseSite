<template>
  <div class="About">
    <Navbar title="About" />
    <div class="text">
      <p>
        Thank you for visiting WFBM Laser Engraving, a family owned and operated
        business.
      </p>
    </div>
    <div class="cards">
      <AboutCard
        itemName="Who we are:"
        itemBody="In 2011 our families merged to form Casa de Ray. With five children between us, we dreamt of starting a home business to leave to our kids someday. My wife is a CTE teacher, and her students must fundraise to pay for competitions and travel. A couple years ago, one of her fundraisers was customizable hydro water bottles. Her students sold 24 oz and 40 oz laser engraved water bottles and a portion of the proceeds went to their CTSO. We became very interested in this type of business but were a little nervous to take the first step. After 25 years in the hotel industry and a little nudge from COVID, we decided to pull the trigger and give it a go."
      />
      <AboutCard
        itemName="What we sell:"
        itemBody="we sell custom laser engraved water bottles and cups. We offer hundreds of custom designed logos and even allow for the uploading of your personal images. These are perfect to grow recognition and support spirit for your cause, school, or event. We are expanding to include other new and unique customizable products."
      />
    </div>
    <div class="images">
      <div class="row">
        <div class="col">
          <img src="@/assets/aboutPageImages/snowflakes.png" alt="" />
          <img src="@/assets/aboutPageImages/tile.jpg" alt="" />
        </div>
        <div class="col">
          <img
            class="wideImg"
            style="width: 200%; height: 100%"
            src="@/assets/aboutPageImages/bottles.jpg"
            alt=""
          />
        </div>
        <div class="col"></div>
        <!--dont delete this its important-->
      </div>
      <div class="row">
        <div class="col">
          <img src="@/assets/aboutPageImages/bottles1.jpg" alt="" />
        </div>
        <div class="col">
          <img src="@/assets/aboutPageImages/bottles2.jpg" alt="" />
        </div>
        <div class="col">
          <img src="@/assets/aboutPageImages/bottles3.png" alt="" />
        </div>
      </div>
    </div>
    <VFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import AboutCard from '@/components/AboutCard.vue';
import VFooter from '@/components/VFooter.vue';

export default {
  name: 'About',
  components: {
    Navbar,
    AboutCard,
    VFooter,
  },
};
</script>

<style lang="scss" scoped>
.text {
  background: #eee;
  padding: 4rem;
  font-size: 110%;
  p {
    margin: 0;
  }
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.images {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  justify-content: center;
  max-width: 2000px;
}

/* Create four equal columns that sits next to each other */
.col {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 25%;
}

.col img {
  vertical-align: middle;
  width: 100%;
  padding: 10px;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .row {
    flex-direction: column;
  }
  .col {
    -ms-flex: 50%;
    flex: 100%;
    max-width: 100%;
    margin-inline: 5rem;
    .wideImg {
      width: 100% !important;
    }
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}
</style>
