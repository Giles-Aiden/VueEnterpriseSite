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
          <h4>Sales &#38; Delivery</h4>
          <hr />
          <p>
            A 2-3 week sales window is recommended for your fundraiser but you
            are free to set a longer or shorter time frame.
          </p>
          <h4>Why your organization should participate</h4>
          <hr />
          <p>
            By participating in a WFBM laser engraving fundraiser, your
            organization can earn money in a fun and effective way. Based on our
            recommended sales pricing of $25 for the 24 oz and $40 for the 40
            oz, your organization will earn $5 or $10 respectively per bottle.
          </p>
        </div>
      </div>
    </div>

    <hr />
    <div class="reviewsArea">
      <h2>Fundraising Reviews</h2>
      <div id="info">
        <div>
          <vs-avatar class="avatar-img">
            <img src="..\assets\Customer(1).jpeg" />
          </vs-avatar>
          <h4>Sallie H.</h4>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <hr />
          <p>
            "I love the customizable aspect of this business! It allows creative
            freedom!"
          </p>
        </div>
        <div>
          <vs-avatar class="avatar-img">
            <img src="..\assets\Customer(2).jpeg" />
          </vs-avatar>
          <h4>Penelope J.</h4>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <hr />
          <p>"Quality service and product!"</p>
        </div>
        <div>
          <vs-avatar class="avatar-img">
            <img src="..\assets\Customer(3).jpeg" />
          </vs-avatar>
          <h4>Marie R.</h4>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <hr />
          <p>
            "Great product! I love the options that I am given! This is such a
            great fundraising opportunity"
          </p>
        </div>
        <div>
          <vs-avatar class="avatar-img">
            <img src="..\assets\Customer(4).jpeg" />
          </vs-avatar>
          <h4>Liz K.</h4>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <hr />
          <p>
            "An awesome fundraising idea! Fantastic service and product!"
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- The style rules for the page -->
<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.reviewFundraising {
  display: flex;
  float: right;
}

.avatar-img {
  padding: 0 !important;
  min-width: 3rem;
  min-height: 3rem;
}

.mySlides {
  max-width: 25rem;
  max-height: 45rem;
}
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

.reviewsArea {
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
  .reviewsArea {
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

export default {
  name: 'Fundraising',
  components: {
    Navbar,
    //MyCarousel
  },
  methods: {
    plusDivs(n) {
      this.showDivs((this.slideIndex += n));
    },

    showDivs(n) {
      var i;
      var x = document.getElementsByClassName('mySlides');
      if (n > x.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = x.length;
      }
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      x[this.slideIndex - 1].style.display = 'block';
    },
  },
  data() {
    return {
      slideIndex: 1,
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
          'Review #1',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        [
          'Review #1',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        [
          'Review #1',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        [
          'Review #1',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        [
          'Review #1',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        [
          'Review #1',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
      ],
    };
  },
};

var resizeEvent = window.document.createEvent('UIEvents');
resizeEvent.initUIEvent('resize', true, false, window, 0);
window.dispatchEvent(resizeEvent);
</script>
