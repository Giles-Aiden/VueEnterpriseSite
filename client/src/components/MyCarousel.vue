<template>
  <div>
    <div id="imageArea">
      <div id="imageScroll">
        <!-- The navigation labels are set to an index of an array with images that are arrows -->
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
            data-name="imageSlide"
            class="imgSlides"
            @slideclick="handleSlideClick"
          >
            <img :src="items[0]" />
          </slide>
          <slide
            data-index="1"
            data-name="imageSlide"
            class="imgSlides"
            @slideclick="handleSlideClick"
          >
            <img :src="items[1]" />
          </slide>
          <slide
            data-index="2"
            data-name="imageSlide"
            class="imgSlides"
            @slideclick="handleSlideClick"
          >
            <img :src="items[2]" />
          </slide>
        </carousel>
      </div>
    </div>
    <MyCarousel />
  </div>
</template>

<!-- functiony things -->
<script>
//import VueCarousel from 'vue-carousel';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Fundraising',
  components: {
    Carousel,
    Slide,
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
    };
  },
};

var resizeEvent = window.document.createEvent('UIEvents');
resizeEvent.initUIEvent('resize', true, false, window, 0);
window.dispatchEvent(resizeEvent);
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
// image scrolling styles
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
