<template>
  <div class="editor">
    <div id="imgDisplay">
      <div id="imgPicker">
        <div>
          <input id="search" type="search" />
          <button @click="searchLibrary()">Search</button>
        </div>
        <h3>OR</h3>
        <FileUpload
          mode="basic"
          :showCancelButton="true"
          accept="image/*"
          :fileLimit="1"
          name="demo[]"
          :auto="true"
          :customUpload="true"
          @uploader="onUpload"
        />
      </div>
      <div>
        <div v-for="image in imgLibrary.images" :key="image.id">
          <img :scr="image.element_url" />
        </div>
      </div>
    </div>
    <div id="editorContain">
      <img id="editor" ref="editor" @click="editImg" :src="uploadImg" />
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@400;700&family=Dancing+Script:wght@400;700&family=Kirang+Haerang&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
#editorContain {
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  #editor {
    width: 70%;
    height: auto;
    max-width: 1000px;
  }
}
#imgPicker {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}
</style>

<script>
import * as marker from 'markerjs2';
import FileUpload from 'primevue/fileupload';
const axios = require('axios');
export default {
  name: 'Store',
  components: {
    FileUpload,
  },
  data() {
    return {
      imgLibrary: [],
      uploadImg: undefined,
    };
  },
  methods: {
    editImg: function () {
      let editor = new marker.MarkerArea(this.$refs.editor);
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
      editor.addRenderEventListener((dataUrl) => {
        this.$refs.editor.src = dataUrl;
      });
      editor.show();
    },
    onUpload: function (event) {
      let reader = new FileReader();
      this.uploadImg = event.files;
      console.log(event);
      reader.addEventListener('load', () => {
        this.uploadImg = reader.result;
      });
      reader.readAsDataURL(event.files[0]);
      console.log(event.files[0]);
    },
    searchLibrary: function () {
      /*
      axios.get('http://69.164.194.217:8000/ws.php?format=json&method=pwg.categories.getImages&cat_id=2', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json',
        },
      })
        .catch((err) => console.error(err))
        .then((res) => console.log(res));
      */
      axios
        .get('http://localhost:8000', {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json',
          },
          params: {
            // Catalog ID
            // Number corolates to the album creation order
            cat_id: 2,
            recursive: true,
          },
        })
        .catch((err) => console.error(err))
        .then((res) => (this.imgLibrary = res));
    },
  },
};
</script>
