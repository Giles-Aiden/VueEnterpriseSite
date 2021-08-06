<template>
  <div class="productPage">
    <Sidebar />
    <Menubar :model="menu" />
    <br />
    <div class="newItem" v-show="creating">
      <FileUpload
        name="demo[]"
        :customUpload="true"
        :multiple="true"
        accept="image/*"
        @uploader="onUpload"
        class="fileUpload"
      />
      <div class="newItemAttrContainer">
        <div class="newItemAttr">
          <span class="p-float-label">
            <InputText id="name" type="text" v-model="newProduct.name" />
            <label for="productName">Product Name</label>
          </span>
        </div>
        <div class="newItemAttr">
          <span class="p-float-label">
            <InputText id="body" type="textarea" v-model="newProduct.body" />
            <label for="productBody">Body</label>
          </span>
        </div>
        <div class="newItemAttr">
          <span class="p-float-label">
            <InputText id="cost" type="number" v-model="newProduct.cost" />
            <label for="productPrice">Cost</label>
          </span>
        </div>
      </div>
    </div>
    <div id="product">
      <productCard
        v-for="(product, index) in products"
        :key="index"
        @delete="deleteProduct($event)"
        :product="products[index]"
        :editing="edit"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import 'src/assets/styles/_variables.scss';
.newItem {
  display: flex;
  width: 70%;
  flex-flow: column wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  .newItemAttrContainer {
    display: flex;
    justify-content: space-around;
  }
}
.productPage {
  background: $bg-main;
  margin: 0;
  min-height: 100vh;
}
.fileUpload {
  margin-bottom: 1.5em;
}
div#product {
  margin-left: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.p-menubar {
  display: flex;
  justify-content: center;
  margin: 0 0 1em 0;
}
</style>

<script>
const axios = require('axios');
// @ is an alias to /src
//import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import Sidebar from '@/components/Sidebar.vue';
import productCard from '@/components/productCard.vue';
import InputText from 'primevue/inputtext';
import FileUpload from 'primevue/fileupload';
export default {
  name: 'Home',
  components: {
    //Button,
    Menubar,
    Sidebar,
    productCard,
    InputText,
    FileUpload,
  },
  methods: {
    loadProducts: async function () {
      await axios
        .get(process.env.VUE_APP_API + '/api/products')
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => console.error(err));
    },
    onUpload: function (event) {
      this.uploadImg = event.files;
      let imgs = new Array();
      for (let index = 0; index < event.files.length; index++) {
        let reader = new FileReader();
        if (index !== event.files.length - 1)
          reader.addEventListener('load', () => imgs.push(reader.result));
        // Last item
        else
          reader.addEventListener('load', () => {
            imgs.push(reader.result);
            this.uploadImg = imgs;
            this.newProduct.img = this.uploadImg;
            this.createProduct();
          });
        reader.readAsDataURL(event.files[index]);
      }
    },
    createProduct: async function () {
      console.log(this.newProduct.img);
      await axios
        .post(process.env.VUE_APP_API + '/api/products', this.newProduct)
        .then(async (res) => {
          console.log(res);
          await this.loadProducts();
        })
        .catch((err) => console.error(err));
    },
    deleteProduct: async function (id) {
      console.log(id);
      await axios
        .delete(process.env.VUE_APP_API + '/api/products', {
          data: {
            id: id,
          },
        })
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
      await this.loadProducts();
    },
  },
  mounted() {
    this.loadProducts();
    this.newProduct = this.productTemplate;
  },
  data() {
    return {
      edit: false,
      creating: false,
      recompute: false,
      menu: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          command: () => (this.creating = !this.creating),
        },
        /*{
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          command: () => (this.edit = !this.edit),
        },*/
        {
          label: 'Quit',
          icon: 'pi pi-fw pi-power-off',
          command: () => {
            this.creating = false;
            this.edit = false;
          },
        },
      ],
      productTemplate: {
        name: '',
        img: '',
        colors: [
          '#FF0000',
          '#FF4000',
          '#FFC800',
          '#333F35',
          '#3DA8BC',
          '#20283A',
          '#000000',
          '#372727',
          '#FFFFFF',
          '#B6458A',
          '#3B236D',
        ],
        cost: 1000,
        attrs: {
          lids: [
            { name: 'lid1', upcharge: '0' },
            { name: 'lid2', upcharge: '0' },
            { name: 'lid3', upcharge: '0' },
          ],
          sizes: [
            { name: '10oz', upcharge: '0' },
            { name: '20oz', upcharge: '0' },
          ],
        },
      },
      newProduct: {},
      products: [],
    };
  },
};
</script>
