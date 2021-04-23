<template>
  <div class="Fundraising">
    <Navbar title="Fundraising" />

    <!-- Image Scrolling Section -->

    <div id="imageArea">
      <div class="arrows">&lt;</div>
      <div id="imageScroll">
        <carousel :per-page="2" id="carousel">
          <slide
              data-index="0"
              data-name="MySlideName"
              @slideclick="handleSlideClick">
            <img :src="items[0]" />
          </slide>
          <slide
              data-index="1"
              data-name="MySlideName"
              @slideclick="handleSlideClick">
            <img :src="items[1]" />
          </slide>
          <slide
              data-index="2"
              data-name="MySlideName"
              @slideclick="handleSlideClick">
            <img :src="items[2]" />
          </slide>
        </carousel>
      </div>
      <div class="arrows">&gt;</div>
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
        <carousel :per-page="2" id="carousel2">
          <slide
              data-index="0"
              data-name="MySlideName"
              @slideclick="handleSlideClick">
              <div id="r1" class="reviewCards">
                <h4>Review #1</h4>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
          </slide>
          <slide
              data-index="1"
              data-name="MySlideName"
              @slideclick="handleSlideClick">
              <div id="r2" class="reviewCards">
                <h4>Review #2</h4>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
          </slide>
          <slide
              data-index="2"
              data-name="MySlideName"
              @slideclick="handleSlideClick">
              <div id="r3" class="reviewCards">
                <h4>Review #3</h4>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
          </slide>
          <slide
              data-index="3"
              data-name="MySlideName"
              @slideclick="handleSlideClick">
              <div id="r4" class="reviewCards">
                <h4>Review #4</h4>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
          </slide>
          <slide
              data-index="4"
              data-name="MySlideName"
              @slideclick="handleSlideClick">
              <div id="r5" class="reviewCards">
                <h4>Review #5</h4>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
          </slide>
          <slide
              data-index="5"
              data-name="MySlideName"
              @slideclick="handleSlideClick">
              <div id="r6" class="reviewCards">
                <h4>Review #6</h4>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
          </slide>
        </carousel>
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
#imageArea{
  display: flex;
  flex-direction: row;
  border-radius: 1em;
  border: gray 0.05em solid;
  box-shadow: black 0em 0em 0.5em inset;
  margin: 0.5em 5em;
  padding: 0.5em;
  /* -- first and last div (the arrows for the carousel) -- */
  .arrows{
    padding: 1em;
  }
  .arrows:first-of-type{
    border: none;
    border-right: rgba(0, 0, 0, 0.2) solid 0.1em;
  }
  .arrows:last-of-type{
    border: none;
    border-left: rgba(0, 0, 0, 0.2) solid 0.1em;
  }
}
#carousel img{
  width: 50%;
}
@media (max-width: 800px) {
  #carousel{
    border-radius: 1em;
    border: gray 0.05em solid;
    box-shadow: black 0em 0em 0.5em inset;
    margin: 0.5em 2.5em;
    padding: 0.5em;
  }
  #carousel img{
    width: 100%;
  }
}

/* ------ */
#reviewsArea {
  margin: 3em;
  h2 {
    color: #113f70;
    text-shadow: black 0.03em 0.03em 0.05em;
    font-size: 2em;
  }
  #carousel2 {
    overflow: auto;
    white-space: nowrap;
    background-color: #6cacf0;
    padding: 1em 10em;
    box-shadow: inset 0em 0em 0.5em;
    border-radius: 1em;
    border: solid #113f70 0.05em;

    .reviewCards {
      background-color: white;
      color: #113f70;
      box-shadow: 0.1em 0.3em 0.5em 0.1em black;
      border-radius: 0.25em;
      margin: 0em 2em;
      text-align: center;
      padding: 14px;
      text-decoration: none;
      white-space: normal;
      font-size: 1.5em;
      display: inline-block;
      width: 75%;

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
@media (max-width: 800px) {
  #reviewsArea {
    margin: 0em 1em;
    #carousel2 {
      margin: 0.25em;
      padding: 1em;
      .reviewCards
      {
        margin: 0em;
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
<script>
//gsap for special styling
import gsap from "gsap";
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import VueCarousel from 'vue-carousel';
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Fundraising",
  components: {
    Navbar,
    Carousel,
    Slide,
  },
  data:() => ({
    picked: 1,
    imgNum: 1,
    items: [
        'img/bottleRed.JPG',
        'img/bottleBlack.JPG',
        'img/bottleGreen.JPG'
    ],
  }),
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
console.log("Hello this is a fundraiser page!");
console.log(
  "logging the query selector: " + document.querySelector("#reviews > div")
);
console.log(document.querySelector("#reviews > div"));
// Special css styling
/*class HoverButton {
  constructor(el) {
    this.el = el;
    console.log("logging the el variable in the class constructor: "+el);
    this.hover = false;
    this.calculatePosition();
    this.attachEventsListener();
  }
  
  attachEventsListener() {
    window.addEventListener('mousemove', e => this.onMouseMove(e));
    window.addEventListener('resize', e => this.calculatePosition(e));
  }
  
  calculatePosition() {
    gsap.set(this.el, {
      x: 0,
      y: 0,
      scale: 1
    });
    const box = this.el.getBoundingClientRect();
    this.x = box.left + (box.width * 0.5);
    this.y = box.top + (box.height * 0.5);
    this.width = box.width;
    this.height = box.height;
  }
  
  onMouseMove(e) {
    let hover = false;
    let hoverArea = (this.hover ? 0.7 : 0.5);
    let x = e.clientX - this.x;
    let y = e.clientY - this.y;
    let distance = Math.sqrt( x*x + y*y );
    if (distance < (this.width * hoverArea)) {
       hover = true;
        if (!this.hover) {
          this.hover = true;
        }
        this.onHover(e.clientX, e.clientY);
    }
    
    if(!hover && this.hover) {
      this.onLeave();
      this.hover = false;
    }
  }
  
  onHover(x, y) {
    gsap.to(this.el,  {
      x: (x - this.x) * 0.4,
      y: (y - this.y) * 0.4,
      scale: 1.15,
      ease: 'power2.out',
      duration: 0.4
    });
    this.el.style.zIndex = 10;
  }
  onLeave() {
    gsap.to(this.el, {
      x: 0,
      y: 0,
      scale: 1,
      ease: 'elastic.out(1.2, 0.4)',
      duration: 0.7
    });
    this.el.style.zIndex = 1;
  }
}*/

const card1 = document.querySelector("#reviews > div:nth-of-type(1)");
//new HoverButton(card1);

const card2 = document.querySelector("#reviews > div:nth-of-type(2)");
//new HoverButton(card2);

const card3 = document.querySelector("#reviews > div:nth-of-type(3)");
//new HoverButton(card3);
</script>
