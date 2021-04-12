<template>
  <div class="Fundraising">
    <Navbar title="Fundraising"/>

    <!-- Image Scrolling Section -->
    <div id="imageArea">
        <div id="imageScroll">
            <img src="" alt="Image1">
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

    <!-- Reviews/Experience Section -->
    <div id="reviewsArea">
        <div id="reviews">
            <div> 
                <h4>Review #1</h4>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
            <div> 
                <h4>Review #2</h4>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div> 
                <h4>Review #3</h4>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div> 
                <h4>Review #4</h4>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div> 
                <h4>Review #5</h4>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div> 
                <h4>Review #6</h4>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
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
    data:() => ({
    picked: 1,
    imgNum: 1,
    items: [
        'https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg',
        'https://img.buzzfeed.com/buzzfeed-static/static/2018-10/2/18/campaign_images/buzzfeed-prod-web-06/15-of-the-weirdest-and-darkest-stock-photos-that--2-21628-1538520564-0_dblbig.jpg',
        'https://static.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-59-5a3bb8d9f422e__700.jpg'
    ],
    }),

}
console.log('Hello this is a fundraiser page!')
/*const dots = document.querySelectorAll(".dots");
function imageNum() {
    console.log('function activated');
    for (var i = 0; i < dots.length; i++){
        if (dots[i].checked == true) {
            console.log(parseInt(dots[i].val));
            return parseInt(dots[i].val);
        }
    }*/





</script>

<style lang="scss" scoped>

// image scrolling stuff
ul{
    list-style: none;
}
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
#reviewsArea{
    margin: 3em;
    border: solid black 0.2em;
    padding: 1em 0em;
    background: linear-gradient(gray, white, gray);
    #reviews{
        overflow: auto;
        white-space: nowrap;

        div{
            background-color: white;
            box-shadow: 0em 0.5em 0.5em black;
            border: black solid 0.1em;
            border-radius: 0.25em;
            margin: 0em 2em;
            width: 10em;
            display: inline-block;
            text-align: center;
            padding: 14px;
            text-decoration: none;
            white-space: normal;
            font-size: 1.5em;

            p{
                white-space: wrap;
            }
        }
    }
}
#contentArea{
    margin: 3em;
    border: solid black 0.2em;
    padding: 1em 0em;
    #info{
        display: flex;
        div{
            border: solid black 0.15em;
            padding: 0.4em;

        }
    }
}
</style>
