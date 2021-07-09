<template>
  <div class="WholesaleClient">
    <Navbar :title="'user' + $route.params.id" />
    <div class="split">
      <div id="left">
        <img
          src="@/assets/CreativeCommons-TempLogo.png"
          v-if="!flip"
          data-aos="fade-right"
          data-aos-duration="2000"
        />
      </div>
      <div class="itemDisplay">
        <h1>{{ clientData.title }}</h1>
        <hooper
          id="hooperDisplay"
          group="group"
          :vertical="true"
          :itemsToShow="1"
          :infiniteScroll="true"
        >
          <slide
            class="slide"
            v-for="(slide, index) in clientData.items"
            :key="index"
          >
            <img :src="slide.img" />
          </slide>
        </hooper>
        <p>{{ clientData.body }}</p>
        <vs-button id="goto" href="#purchaseGoto">Get Yours!</vs-button>
      </div>
      <div id="right">
        <img
          src="@/assets/CreativeCommons-TempLogo.png"
          v-if="flip"
          data-aos="fade-left"
          data-aos-duration="2000"
        />
      </div>
    </div>
    <div id="hooperContain">
      <hooper
        group="group"
        class="hooper"
        :itemsToShow="3"
        :centerMode="true"
        :infiniteScroll="true"
        :autoPlay="true"
        :playSpeed="5000"
      >
        <slide
          class="slide"
          v-for="(slide, index) in clientData.items"
          :key="index"
        >
          <img :src="slide.img" />
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </div>
    <div class="purchase" id="purchaseGoto">
      <div
        class="purchaseItem"
        v-for="(item, index) in clientData.items"
        :key="index"
      >
        <img :src="item.img" />
        <div class="purchaseInfo">
          <h1>{{ item.title }}</h1>
          <InputSwitch v-model="item.purchased" />
          <div
            v-for="(option, key, index) in clientData.options"
            :key="index"
            v-show="item.purchased"
          >
            <div
              v-for="(subOption, subOptionKey, index) in option"
              :key="index"
            >
              <p>{{ subOptionKey }}</p>
              <div class="optionContain">
                <div
                  class="itemOptions"
                  v-for="(optionItem, key, index) in subOption"
                  :key="index"
                >
                  <p>{{ key }}</p>
                  <!--RadioButton
                    :name="item.title"
                    :value="key"
                    :v-model="item.options[subOptionKey]"
                  /-->
                  <InputNumber
                    v-if="item.purchased"
                    mode="decimal"
                    showButtons
                    buttonLayout="vertical"
                    :min="0"
                    :max="10"
                  />
                  <img :src="optionItem" />
                </div>
              </div>
            </div>
          </div>
          <InputNumber
            v-model="item.amount"
            v-if="item.purchased"
            mode="decimal"
            showButtons
            buttonLayout="vertical"
            :min="0"
            :max="10"
            :value="0"
          />
        </div>
      </div>
      <h2>Subtotal:</h2>
    </div>
    <canvas id="qrcode" />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
html {
  scroll-behavior: smooth;
  color: $text-color;
}
.WholesaleClient {
  overflow-x: hidden;
  #qrcode {
    border: 5px solid black;
  }
  .split {
    width: 100%;
    display: flex;
    justify-content: space-between;
    img {
      height: auto;
      width: 60%;
      margin: auto;
    }
    #goto {
      margin: auto;
    }
    .itemDisplay {
      margin: auto 1em;
    }
    #left,
    #right {
      display: flex;
      flex-flow: row nowrap;
      align-content: center;
    }
    #left {
      background: linear-gradient(
        to right,
        rgba($bg-main, 1) 0%,
        rgba($bg-main, 1) 90%,
        rgba($bg-main, 0) 100%
      );
    }
    #right {
      background: linear-gradient(
        to left,
        rgba($bg-main, 1) 0%,
        rgba($bg-main, 1) 90%,
        rgba($bg-main, 0) 100%
      );
    }
    @media (max-width: 700px) {
      flex-flow: column wrap;
      justify-content: space-between;
    }
    @media (min-width: 501) {
      flex-flow: row wrap;
    }
  }
}
#hooperContain {
  width: 100%;
  .hooper {
    height: 300%;
  }
  .slide {
    margin: 1em 0;
    width: 80%;
    img {
      width: 90%;
      height: auto;
    }
  }
}
#hooperDisplay {
  display: flex;
  width: 100%;
  margin: auto;
  height: auto;
  justify-content: center;
  .slide {
    img {
      height: 100%;
      width: auto;
    }
  }
}
.purchase {
  background-color: $bg-main;
  border-radius: 1em;
  width: 65%;
  margin: auto;
  .purchaseItem {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: space-between;
    .optionContain {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      .itemOptions {
        margin: 1em;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        background-color: $bg-secondary;
        //}
        img {
          width: auto;
          height: 8vh;
          margin: 0.5em;
        }
      }
    }
    img {
      width: auto;
      height: 15rem;
      margin: auto 1em;
      padding: 1em;
    }
    .purchaseInfo {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
const axios = require('axios');
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from 'hooper';
import 'hooper/dist/hooper.css';
import InputSwitch from 'primevue/inputswitch';
import InputNumber from 'primevue/inputnumber';
//import RadioButton from 'primevue/radiobutton';
const QRCode = require('qrcode');

export default {
  name: 'WholesaleClient',
  components: {
    Navbar,
    Hooper,
    Slide,
    InputSwitch,
    InputNumber,
    //RadioButton,
    HooperPagination,
    HooperNavigation,
  },
  data() {
    return {
      flip: false,
      //slides: async () => {return await axios.get(process.env.VUE_APP_API + 'wholesale/samplesite')},
      clientData: this.load(process.env.VUE_APP_API + this.$route.path),
      purchaseInfo: [],
    };
  },
  mounted() {
    this.flip = Math.random() < 0.5;
    QRCode.toCanvas(
      document.getElementById('qrcode'),
      process.env.VUE_APP_DOMAIN + this.$route.path,
      {
        errorCorrectionLevel: 'H',
        scale: '6',
        margin: '1',
      },
      (err) => {
        if (err) console.error('QR Error: ' + err);
      },
    );
  },
  methods: {
    load: async function (url) {
      await axios
        .get(url)
        .then((res) => {
          this.clientData = res.data;
          this.clientData.items.forEach((e) => {
            let options = new Map();
            for (let item of this.clientData.options) {
              for (let o in item) {
                console.log(`Test:${o}`);
                //console.log(`${key}: ${value}`);
              }
            }
            if (!e.options) e.options = options;
          });
          console.log(res.data);
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>
