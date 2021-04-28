<template>
  <div class="Fundraising">
    <Navbar title="Fundraising" />

    <!-- Image Scrolling Section -->

    <div id="imageArea">
      <!--<button class="arrows" id="leftArrow"><img src="img/arrowLeft.png"></button>-->
      <div id="imageScroll">
        <!--   -->
        <carousel
          :per-page="2"
          :navigation-enabled="true"
          :navigation-next-label="arrows[1]"
          :navigation-prev-label="arrows[0]"
          :pagination-active-color="'#113F70'"
          id="carousel"
        >
          <slide
            data-index="0"
            data-name="MySlideName"
            @slideclick="handleSlideClick"
          >
            <img :src="items[0]" />
          </slide>
          <slide
            data-index="1"
            data-name="MySlideName"
            @slideclick="handleSlideClick"
          >
            <img :src="items[1]" />
          </slide>
          <slide
            data-index="2"
            data-name="MySlideName"
            @slideclick="handleSlideClick"
          >
            <img :src="items[2]" />
          </slide>
        </carousel>
      </div>
      <!--<button class="arrows"  id="rightArrow"><img src="img/arrowRight.png"></button>-->
    </div>

    <hr />
    <!-- Main Content -->
    <div id="contentArea">
      <h2>Fundraising Information</h2>
      <div id="info">
        <div>
          <h4>Filler Text</h4>
          <ul>
            <li>cool stuff</li>
            <li>amazing things</li>
            <li>awesome company</li>
          </ul>
        </div>

        <div>
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
      </div>
    </div>

    <hr />
    <!-- Reviews/Experience Section -->
    <div id="reviewsArea">
      <h2>Fundraising Experience</h2>
      <a href="Fundraising.vue#r5"></a>
      <div id="reviews">
        <!--<button class="arrows" id="leftArrow2"><img src="img/arrowLeft.png"></button>-->
        <carousel
          :per-page="2"
          :navigation-enabled="true"
          :navigation-next-label="arrows[1]"
          :navigation-prev-label="arrows[0]"
          :pagination-active-color="'#113F70'"
          id="carousel2"
        >
          <div
            v-for="item-in-reviewerInfo"
            :key="item[0]"
            id="workPLEASE"
          >
            <slide
              data-index="0"
              data-name="MySlideName"
              @slideclick="handleSlideClick"
            >
              <div id="r1" class="reviewCards">
                <h4>Review #1</h4>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </slide>
          </div>
        </carousel>
        <!--<button class="arrows" id="rightArrow2"><img src="img/arrowRight.png"></button>-->
      </div>
    </div>
  </div>
</template>

<!-- los stylos -->
<style lang="scss" scoped>
// image scrolling stuff
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
#imageArea {
  display: flex;
  flex-direction: row;
  border-radius: 1em;
  margin: 0.5em 5em;
  padding: 0.5em;

  #imageScroll {
    border: #113f70 0.5em solid;
    border-radius: 1em;
    box-shadow: black 0em 0em 0.5em inset, black 0em 0em 1em;
    padding: 0.5em;
    margin: auto;
  }
  /* -- first and last div (the arrows for the carousel) -- */
  .arrows {
    position: relative;
    padding: 3em;
    background-color: #113f70;
    transition: 0.2s;
    img {
      position: absolute;
      width: 2em;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .arrows:first-of-type {
    border: none;
    border-radius: 1em 0em 0em 1em;
    img {
      transform: translate(-50%, -50%);
    }
  }
  .arrows:last-of-type {
    border: none;
    border-radius: 0em 1em 1em 0em;
  }
}
#carousel img {
  width: 50%;
  max-width: 50em;
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
    box-shadow: black 0em 0.33em, black 0em 0.33em 0.5em;
    filter: opacity(0.95);
  }
}

/* ------ */
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
      flex: 1 1 160px;
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
    div:last-of-type {
      flex: 1.5 1 160px;
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
import Navbar from "@/components/Navbar.vue";
//import VueCarousel from 'vue-carousel';
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Fundraising",
  components: {
    Navbar,
    Carousel,
    Slide,
  },
  data() {
    return {
      picked: 1,
      imgNum: 1,
      items: [
        "img/bottleRed.JPG",
        "img/bottleBlack.JPG",
        "img/bottleGreen.JPG",
      ],
      reviewerInfo: [
        [
          "Review #1",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        [
          "Review #1",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        [
          "Review #1",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        [
          "Review #1",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        [
          "Review #1",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        [
          "Review #1",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
      ],
      arrows: [
        '<div style="background-color: "#113F70""><img src="img/arrowLeft.png" width="75" height="75"></div>',
        '<div style="background-color: "#113F70""><img src="img/arrowRight.png" width="75" height="75"></div>',
      ],
    };
  },
  /*
  data() {
    return {
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
      ],
    };
  },
  */
};
//var arrowHeight = document.getElementById("leftArrow").style.height;
</script>
