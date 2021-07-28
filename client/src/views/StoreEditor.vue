<template>
  <div class="logos">
    <div id="imgDisplay">
      <h1>Pick Your Logo!</h1>
      <div id="imgPicker">
        <div id="customPicker">
          <FileUpload 
            name="demo[]"
            mode="basic"
            :auto="true"
            :customUpload="true"
            @uploader="onUpload($event)"
            ref="upload"
          />
          <Button 
            icon="pi pi-times"
            @click="clearUpload"
            class="p-button-danger"
          />
        </div>
        <h3>OR</h3>
        <div id="searchBox">
          <input
            id="search"
            type="search"
            v-model="searchTerm"
            @keydown.enter="searchLibrary"
          />
          <vs-button @click="searchLibrary">Search</vs-button>
        </div>
      </div>
    </div>
    <div class="imgList">
      <div v-for="(item, index) in imgLibrary.images" :key="index">
        <vs-card type="4" @click="selectImage(item)">
          <template #title>
            <h3>Pot with a plant</h3>
          </template>
          <template #img>
            <VueLoadImage>
              <img
                slot="image"
                class="logoImg"
                :src="'https' + item.derivatives.small.url.slice(4)"
              />
              <img slot="preloader" src="@/assets/beer-loader.gif" />
              <div slot="error">
                There seems to be a problem loading this image
              </div>
            </VueLoadImage>
          </template>
        </vs-card>
      </div>
    </div>
    <div v-if="paginatorEnabled">
      <vs-pagination v-model="imgPage" :length="imgPages()" />
    </div>
    <div id="editorContain">
      <img
        id="editor"
        corossorigin="anonymous"
        ref="editor"
        @click="editImg"
        :src="uploadImg"
      />
      <Toast position="center" />
      <br />
      <div v-if="uploadImg">
        <vs-button @click="addToCart('/store/cart')">Checkout</vs-button>
        <!--router-link @click="addToCart" to="/store/items">
          <vs-button>Shop More</vs-button>
        </router-link>
        <router-link @click="addToCart" to="/store/cart">
          <vs-button>Checkout</vs-button>
        </router-link-->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@400;700&family=Dancing+Script:wght@400;700&family=Kirang+Haerang&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
#editorContain {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  justify-content: center;
  align-content: center;
  #editor {
    max-height: 1000px;
    width: auto;
    margin: 3em auto 2em auto;
  }
  div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
}
#imgDisplay {
  h1 {
    margin: 3em auto 2em auto;
  }
  #imgPicker {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    flex-basis: 30vw;
    margin-bottom: 4em;
    margin: auto;
    #customPicker {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
    }
  }
}

#searchBox {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.imgList {
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: space-around;
}
</style>

<script>
import * as marker from 'markerjs2';
import FileUpload from 'primevue/fileupload';
import Toast from 'primevue/toast';
import Button from 'primevue/button';
import VueLoadImage from 'vue-load-image';
const axios = require('axios');
export default {
  name: 'Store',
  components: {
    FileUpload,
    Toast,
    Button,
    VueLoadImage,
  },
  data() {
    return {
      imgLibrary: {},
      imgPage: 1,
      paginatorEnabled: false,
      uploadImg: undefined,
      searchTerm: new String(),
    };
  },
  watch: {
    imgPage: function () {
      this.searchLibrary();
    },
  },
  mounted() {
    this.$emit('shop', 20);
    let cur = JSON.parse(window.sessionStorage.getItem('currentItem'));
    if (cur.img) this.uploadImg = cur.img;
  },
  methods: {
    addToCart: function (redirect) {
      let store = window.sessionStorage;
      let cart = [];
      if (!store.getItem('cart')) store.setItem('cart', JSON.stringify([]));
      else cart = JSON.parse(store.getItem('cart'));
      cart.push(JSON.parse(store.getItem('currentItem')));
      store.setItem('cart', JSON.stringify(cart));
      this.$router.push(redirect);
    },
    editImg: function () {
      let editor = new marker.MarkerArea(this.$refs.editor);
      editor.crossOrigin = 'Anonymous';
      editor.availableMarkerTypes = editor.ALL_MARKER_TYPES;
      editor.settings.defaultFontFamilies = [
        '"Times New Roman", Times, serif',
        'Arial, Helvetica, sans-serif',
        '"Lucida Console", "Courier New", monospace',
        '"Big Shoulders Stencil Display", cursive',
        '"Dancing Script", cursive',
        '"Kirang Haerang", cursive',
        '"Noto Serif", serif',
      ];
      editor.settings.defaultColorSet = ['black', 'white'];
      editor.settings.defaultColor = 'white';
      editor.settings.defaultFillColor = 'white';
      editor.settings.defaultHighlightColor = 'white';
      let store = window.sessionStorage;
      let cur = JSON.parse(store.getItem('currentItem'));
      editor.addRenderEventListener((imgURL, state) => {
        cur.img = imgURL;
        this.uploadImg = imgURL;
        cur.editorState = state;
        store.setItem('currentItem', JSON.stringify(cur));
      });
      editor.show();
      if(cur.editorState) editor.restoreState(cur.editorState);
      console.log(editor);
    },
    onUpload: async function (event) {
      let reader = new FileReader();
      this.uploadImg = event.files;
      this.$toast.add({
        severity: 'success',
        summary: 'Edit your image by clicking!',
        life: '2500',
      });
      await reader.addEventListener(
        'load',
        async () => {
          this.uploadImg = await this.grayscaleImg(reader.result);
          let store = window.sessionStorage;
          let cur = JSON.parse(store.getItem('currentItem'));
          cur.img = this.uploadImg;
          store.setItem('currentItem', JSON.stringify(cur));
        },
      );
      await reader.readAsDataURL(event.files[0]);
      this.$emit('shop', 40);
    },
    clearUpload: function () {
      this.$refs.upload.clear();
      this.uploadImg = '';
      let cur = JSON.parse(window.sessionStorage.getItem('currentItem'));
      if(cur.img) delete cur.img;
      if(cur.ediorState) delete cur.editorState;
      window.sessionStorage.setItem('currentItem', JSON.stringify(cur));
    },
    //grayscales each individual pixel in the image by calculating average (slow)
    grayscaleImg: async function (imgData) {
      let img = new Image();
      img.src = imgData;
      var canvas = document.createElement('canvas');
      var canvasContext = canvas.getContext('2d');

      var imgW = img.width;
      var imgH = img.height;
      canvas.width = imgW;
      canvas.height = imgH;

      canvasContext.drawImage(img, 0, 0);
      var imgPixels = canvasContext.getImageData(0, 0, imgW, imgH);
      for (var y = 0; y < imgPixels.height; y++) {
        for (var x = 0; x < imgPixels.width; x++) {
          var i = y * 4 * imgPixels.width + x * 4;
          var avg =
            (imgPixels.data[i] +
              imgPixels.data[i + 1] +
              imgPixels.data[i + 2]) /
            3;
          imgPixels.data[i] = avg;
          imgPixels.data[i + 1] = avg;
          imgPixels.data[i + 2] = avg;
        }
      }
      await canvasContext.putImageData(
        imgPixels,
        0,
        0,
        0,
        0,
        imgPixels.width,
        imgPixels.height,
      );
      return await canvas.toDataURL();
    },
    searchLibrary: async function () {
      let res = await axios.get(
        `${process.env.VUE_APP_PIWIGO}/ws.php
?format=json
&method=pwg.images.search
&query=${this.searchTerm}
&per_page=10
&page=${this.imgPage - 1}`,
      );
      this.imgLibrary = res.data.result;
      this.paginatorEnabled = true;
      this.$emit('shop', 30);
    },
    imgPages: function () {
      if (this.imgLibrary == {}) return 1;
      else {
        return Math.ceil(
          this.imgLibrary.paging.total_count / this.imgLibrary.paging.per_page,
        );
      }
    },
    selectImage: async function (img) {
      let selected = await this.base64Img('https' + img.element_url.slice(4));
      this.uploadImg = selected;
      document.getElementById('editor').scrollIntoView();
      this.$toast.add({
        severity: 'success',
        summary: 'Edit your image by clicking on it!',
        life: '2500',
      });
      this.$emit('shop', 40);
      let cur = JSON.parse(window.sessionStorage.getItem('currentItem'));
      cur.img = this.uploadImg;
      window.sessionStorage.setItem('currentItem', JSON.stringify(cur));
    },
    base64Img: async function (url) {
      var promise = await new Promise(function (resolve) {
        let img = new Image();
        img.crossOrigin = 'Anonymous';
        img.alt = img.name;
        img.onload = function () {
          var canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          var dataURL = canvas.toDataURL('image/png');
          resolve(dataURL); //.replace(/^data:image\/(png|jpg|jpeg|pdf);base64,/, ""));
        };
        img.src = url;
      });
      return promise;
    },
  },
};
</script>
