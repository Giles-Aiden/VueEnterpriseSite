<template>
  <div class="Fundraising">
    <Navbar title="Fundraising" />
    <!-- Main Content -->
    <!-- Will cover the fundraising campaign and all of its necessary details -->
    <div id="contentArea">
      <h2>Fundraising Information</h2>
      <div id="info">
        <div>
          <h4>How does it work?</h4>
          <hr />
          <p>
            Your organization can earn money while selling a great product that
            is popular, customizable, and environmentally friendly.
          </p>
        </div>

        <div>
          <h4>How do I benefit?</h4>
          <hr />
          <p>
            By participating in a WFBM laser engraving fundraiser, your
            organization can earn money in a fun and effective way. Based on our
            recommended sales pricing of $25 for the 24 oz and $40 for the 40
            oz, your organization will earn $5 or $10 respectively per bottle.
          </p>
        </div>

        <div>
          <h4>Why your organization should participate</h4>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div>
          <h4>Sales &#38; Delivery</h4>
          <hr />
          <p>
            A 2-3 week sales window is recommended for your fundraiser but you
            are free to set a longer or shorter time frame.
          </p>
        </div>
      </div>
    </div>

    <hr />

    <div id="reviewsArea">
      <h1>Fundraising Experience</h1>
      <div id="reviews">
        <div>
          
        </div>
      </div>
    </div>
    <!-- Reviews/Experience Section -->
    <!-- <div id="reviewsArea">
      <h2>Fundraising Experience</h2>
      <a href="Fundraising.vue#r5"></a>
      <div id="reviews">
        <carousel
          :per-page="2"
          :navigation-enabled="true"
          :pagination-active-color="'#113F70'"
          id="carousel2"
        >
          <slide
            v-for="item in reviewerInfo"
            :key="item[0]"
            data-index="0"
            data-name="MySlideName"
            @slideclick="handleSlideClick"
          >
            <div id="r1" class="reviewCards">
              <h4>{{ item[0] }}</h4>
              <hr />
              <p>{{ item[1] }}</p>
            </div>
          </slide>
        </carousel>
      </div>
    </div> -->
  </div>
</template>

<!-- The style rules for the page -->
<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
.example-slide {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 10rem;
}

/* ------ */
.hidden {
  opacity: 0;
}
.shown {
  opacity: 1;
}
hr {
  border: solid #6cacf0 0.05em;
  border-radius: 1000000em;
  margin: 0em 2em;
  box-shadow: black 0em 0.1em 0.1em;
}
/* -- CAROUSEL STYLES -- */
.VueCarousel-slide {
  visibility: visible;
  flex-basis: 50%;
  width: 100%;
}
#imageArea {
  display: flex;
  flex-direction: row;
  border-radius: 1em;
  margin: 0.5em 5em;
  padding: 0.5em;

  #imageScroll {
    border: $bg-main 0.5em solid;
    border-radius: 1em;
    box-shadow: $shadow 0em 0em 0.5em inset, $shadow 0em 0em 1em;
    padding: 0.5em;
    margin: auto;
  }
}
#carousel img {
  width: 50%;
  max-width: 50em;
  border: solid black 1px;
  z-index: -1;
}
@media (max-width: 800px) {
  #imageArea {
    margin: 0.5em 5em;
    padding: 0.5em;
    #imageScroll {
      border: gray 0.05em solid;
      box-shadow: black 0em 0em 0.5em inset;
      padding: 0.5em;
    }
    .arrows {
      padding: 1.5em;
    }
  }
  #carousel img {
    width: 100%;
  }
}
@media (min-width: 800px) {
  .arrows:hover {
    transition: 0.2s;
    transform: translateY(-0.33em);
    box-shadow: black 0em 0.33em;
    filter: opacity(0.95);
  }
}

/* Review carousel styles */
#reviewsArea {
  margin: 0.5em 5em;
  #reviews {
    padding: 0.5em;
    margin: auto;
    max-width: 200em;
    #carousel2 {
      background-color: #6cacf0;
      padding: 1em 0em;
      box-shadow: inset 0em 0em 0.5em;
      border: solid #113f70 0.5em;
      border-radius: 1em;
        .reviewCards {
          background-color: white;
          color: #113f70;
          box-shadow: 0.1em 0.3em 0.5em 0.1em black;
          border-radius: 0.25em;
          text-align: center;
          padding: 1em;
          text-decoration: none;
          font-size: 1.5em;
          display: inline-block;
          width: 75%;
          max-width: 40em;
            p {
              white-space: wrap;
            }
        hr {
          background-color: #113f70;
          border: solid #113f70 0.05em;
        }
      }
    }
  }
  h2 {
    color: #113f70;
    text-shadow: black 0.03em 0.03em 0.05em;
    font-size: 2em;
  }
}

@media (max-width: 800px) {
  #reviewsArea {
    margin: 0em 1em;
    #reviews {
      width: 85%;
      #carousel2 {
        margin: 0.25em;
        padding: 0em;
        .reviewCards {
          margin: 0em;
        }
      }
    }
  }
}

#contentArea {
  margin: 3em;
  h2 {
    color: #113f70;
    text-shadow: black 0.03em 0.03em 0.05em;
    font-size: 2em;
  }
  #info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    div {
      box-shadow: black 0.1em 0.3em 0.5em 0.1em;
      border-radius: 1em;
      padding: 1em;
      margin: 0.5em 1em;
      flex: 1 1 30em;
      background-color: #185ca3;
      color: white;
      line-height: 2em;
      text-align: left;
      text-indent: 2.5em;
      max-width: 50em;
      h4 {
        font-size: 1.5em;
        text-shadow: #113f70 0.05em 0.05em 0.05em;
      }
      ul {
        list-style: visible;
        text-indent: 0em;
      }
    }
  }
}
@media (max-width: 800px) {
  #contentArea {
    margin: 0em;
    padding: 1em 0em;
    #info {
      flex-direction: column;
      padding: 0em;
    }
  }
}
</style>

<!-- functiony things -->
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import { slider, slideritem } from 'vue-concise-slider'
//import MyCarousel from "@/components/MyCarousel.vue";

export default {
  name: 'Fundraising',
  components: {
    Navbar,
    //MyCarousel
  },
  data() {
    return {
      picked: 1,
      imgNum: 1,
      items: [
        'img/bottleRed.JPG',
        'img/bottleBlack.JPG',
        'img/bottleGreen.JPG',
      ],
            // This is the info that gets passed into the v-for elements for the 2nd carousel
      reviewerInfo: [
        [
          'Jack F.',
          '"Fantastic, I\'m totally blown away by Testimonial Generator."',
        ],
        [
          'Israel L.',
          '" I am so pleased with this product. The service was excellent."',
        ],
        [
          'Tonnie O.',
          '"I\'m good to go. You guys rock! The service was excellent."',
        ],
        [
          'Jefferson H.',
          '"I can\'t say enough about Laser Engraved Water Bottles."',
        ],
        [
          'Berrie A.',
          '"WFBM Laser Engraving is exactly what I\'ve been looking for."',
        ],
        [
          'Malory J.',
          '"Best. Product. Ever! The customization aspect really wonderful."',
        ],
      ],
      // arrows: [
      //   '<div style="background-color: "#113F70""><i class="fas fa-arrow-right" width="75" height="75"><i/></div>',
      //   '<div style="background-color: "#113F70""><i class="fas fa-arrow-right" width="75" height="75"><i/></div>',
      // ],
    };
  },
};

var resizeEvent = window.document.createEvent('UIEvents');
resizeEvent.initUIEvent('resize', true, false, window, 0);
window.dispatchEvent(resizeEvent);
</script>
