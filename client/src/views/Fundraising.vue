<template>
  <div class="Fundraising">
    <Navbar title="Fundraising"/>

    <!-- Image Scrolling Section -->
    
    <div id="imageArea">
        <div id="imageScroll">
          <!--<carousel :data="data"></carousel>-->
            <form id="imgSelect">
                <!--<input class="dots" type="radio" value="1" name="images" checked>
                <input class="dots" value="2" name="images">
                <input class="dots" value="3" name="images">
                <input class="dots" value="4" name="images">
                <vs-radio class="dots" v-model="picked" val="1" v-on:click="imageNum"> </vs-radio>
                <vs-radio class="dots" v-model="picked" val="2" v-on:click="imageNum"> </vs-radio>
                <vs-radio class="dots" v-model="picked" val="3" v-on:click="imageNum"> </vs-radio>
                <vs-radio class="dots" v-model="picked" val="4" v-on:click="imageNum"> </vs-radio>-->
                <carousel :per-page="1" :mouse-drag="false">
                    <slide>
                        <img :src="items[0]">
                    </slide>
                    <slide>
                        <img :src="items[1]">
                    </slide>
                    <slide>
                        <img :src="items[0]">
                    </slide>
                </carousel>
                
            </form>
        </div>
    </div>  

    <hr>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        
    </div>
    
    <hr>
    <!-- Reviews/Experience Section -->
    <div id="reviewsArea">
      <a href="Fundraising.vue#r5"></a>
        <div id="reviews">
            <div id="r1"> 
                <h4>Review #1</h4>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
            <div id="r2"> 
                <h4>Review #2</h4>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div id="r3"> 
                <h4>Review #3</h4>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div id="r4"> 
                <h4>Review #4</h4>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div id="r5"> 
                <h4>Review #5</h4>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div id="r6"> 
                <h4>Review #6</h4>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
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
.hidden{   
    opacity: 0;
}
.shown{
    opacity: 1;
}
.dots{
    display: inline-block;
    margin: 0.25em;
}
#imageScroll{
    border: black solid 0.1em;
    margin: 1em;
}
hr{
  border: solid #6CACF0 0.05em;
  border-radius: 1000000em;
  margin: 0em 2em;
}
#reviewsArea{
    margin: 3em;
    #reviews{
        overflow: auto;
        white-space: nowrap;
        background-color: #6CACF0;
        padding: 1em 35em;
        box-shadow: inset 0em 0em 0.5em;
        border-radius: 1em;
        border: solid #113F70 0.05em;

        div{
            background-color: white;
            color: #113F70;
            box-shadow: 0.1em 0.3em 0.5em 0.1em black;
            border-radius: 0.25em;
            margin: 0em 2em;
            width: 10em;
            text-align: center;
            padding: 14px;
            text-decoration: none;
            white-space: normal;
            font-size: 1.5em;
            display: inline-block;

            p{
                white-space: wrap;
            }
            hr{
              background-color: #113F70;
              border: solid #113F70 0.05em;
            }
        }
    }
}
@media (max-width: 800px) {
  #reviewsArea{
    margin: 0em;
      #reviews {
      padding: 0.5em;
    }
  }
}

#contentArea{
    margin: 3em;
    h2{
      color: #113F70;
      text-shadow: black 0.03em 0.03em 0.05em;
      font-size: 2em;
    }
    #info{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        div{
            box-shadow: black 0.1em 0.3em 0.5em 0.1em;
            border-radius: 1em;
            padding: 1em;
            margin: 0.5em 1.5em;
            flex: 1 1 160px;
            background-color: #185CA3;
            color: white;
            line-height: 2em;
            text-align: left;
            text-indent: 2.5em;
            h4{
              font-size: 1.5em;
              text-shadow: #113F70 0.05em 0.05em 0.05em;
            }
            ul{
              list-style: visible;
              text-indent: 0em;
            }
        }
    }
}
@media (max-width: 800px) {
  #contentArea{
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
import Navbar from '@/components/Navbar.vue';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Fundraising',
  components: {
    Navbar,
    Carousel,
    Slide
  },
    /*data:() => ({
    picked: 1,
    imgNum: 1,
    items: [
        'https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg',
        'https://img.buzzfeed.com/buzzfeed-static/static/2018-10/2/18/campaign_images/buzzfeed-prod-web-06/15-of-the-weirdest-and-darkest-stock-photos-that--2-21628-1538520564-0_dblbig.jpg',
        'https://static.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-59-5a3bb8d9f422e__700.jpg'
    ],
    }),*/
    data() {
    return {
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
      ],
    };
  },

}
console.log('Hello this is a fundraiser page!')
console.log("logging the query selector: "+document.querySelector('#reviews > div'));
console.log(document.querySelector('#reviews > div'));
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

const card1 = document.querySelector('#reviews > div:nth-of-type(1)');
//new HoverButton(card1);

const card2 = document.querySelector('#reviews > div:nth-of-type(2)');
//new HoverButton(card2);

const card3 = document.querySelector('#reviews > div:nth-of-type(3)');
//new HoverButton(card3);
</script>

