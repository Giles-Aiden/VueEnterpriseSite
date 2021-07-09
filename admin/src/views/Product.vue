<template>
  <div class="productPage">
    <Sidebar />
    <Menubar :model="menu" />
    <br />
    <div class="newItem" v-show="creating">
      <FileUpload
        mode="basic"
        name="demo[]"
        :auto="true"
        :customUpload="true"
        @uploader="onUpload"
      />
      <span class="p-float-label">
        <InputText id="name" type="text" v-model="newProduct.name" />
        <label for="username">Username</label>
      </span>
    </div>
    <div id="product">
      <productCard
        v-for="(product, index) in products"
        :key="index"
        :product="products[index]"
        :editing="edit"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";
.newItem {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.productPage {
  background: $bg-main;
  margin: 0;
  min-height: 100vh;
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
const axios = require("axios");
// @ is an alias to /src
import Menubar from "primevue/menubar";
import Sidebar from "@/components/Sidebar.vue";
import productCard from "@/components/productCard.vue";
import InputText from "primevue/inputtext";
import FileUpload from "primevue/fileupload";
export default {
  name: "Home",
  components: {
    Menubar,
    Sidebar,
    productCard,
    InputText,
    FileUpload,
  },
  methods: {
    loadProducts: function () {
      axios
        .get(process.env.VUE_APP_API + "/api/products")
        .then((res) => (this.products = res.data))
        .catch((err) => console.error(err));
    },
    onUpload: function (event) {
      let reader = new FileReader();
      this.uploadImg = event.files;
      console.log(event);
      reader.addEventListener("load", () => (this.uploadImg = reader.result));
      reader.readAsDataURL(event.files[0]);
      console.log(event.files[0]);
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
      menu: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          command: () => (this.creating = !this.creating),
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          command: () => (this.edit = !this.edit),
        },
        {
          label: "Quit",
          icon: "pi pi-fw pi-power-off",
          command: () => {
            this.creating = false;
            this.edit = false;
          },
        },
      ],
      productTemplate: {
        name: "",
        img: "",
        colors: [
          "#FF0000",
          "#FF4000",
          "#FFC800",
          "#333F35",
          "#3DA8BC",
          "#20283A",
          "#000000",
          "#372727",
          "#FFFFFF",
          "#B6458A",
          "#3B236D",
        ],
        price: 10,
        attrs: [
          {
            attr: "lids",
            items: ["lid1", "lid2", "lid3"],
          },
          {
            attr: "sizes",
            items: ["20oz", "40oz"],
          },
        ],
      },
      newProduct: undefined,
      products: [],
    };
  },
};
</script>
