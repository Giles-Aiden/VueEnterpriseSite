<template>
  <div class="productCard">
    <Toast position="center" :group="product.key.id" />
    <Galleria :value="product.img">
      <template #item="slotProps">
        <img :src="slotProps.item" style="width: 100%" />
      </template>
    </Galleria>
    <h1>{{ productName }}</h1>
    <br />
    <div id="price">
      <h2>Price: ${{ product.key.price / 100 }}</h2>
    </div>
    <div id="colors">
      <h2>Colors:</h2>
      <div class="color" v-for="(color, index) in colors" :key="index">
        <div
          :style="{ 'background-color': color }"
          style="width: 100%; height: 100%"
        ></div>
        <div class="delete" @click="deleteColor({ index })">X</div>
      </div>
      <div class="color">
        <form v-if="this.showing" @click="colorMenu()">
          <h2 style="fontsize: 1.5em">+</h2>
        </form>
        <form v-else>
          <input
            type="color"
            :id="productName + ' Color'"
            style="background: none; width: 2rem; height: 2rem"
          />
          <br />
          <vs-button
            type="button"
            @click="
              addColor({ productName });
              colorMenu();
            "
            id="add"
          >
            Add
          </vs-button>
        </form>
      </div>
    </div>
    <ProductAttribute
      v-for="(value, title, index) in attributes"
      :key="index"
      :attrs="value"
      :name="title"
      @update="attributeUpdate($event)"
      @delete="removeAttr($event)"
    ></ProductAttribute>
    <br />
    <div id="menu" :v-if="editing">
      <vs-button class="menuButton" @click="deleteProduct">Delete</vs-button>
      <vs-button class="menuButton" @click="attrPopup">Add Attribute</vs-button>
      <OverlayPanel ref="op">
        <span class="p-float-label">
          <InputText
            id="newAttrName"
            type="text"
            v-model="newAttrName"
            @keydown.enter="createAttr"
          />
          <label for="newAttrName">Attribute Name</label>
        </span>
      </OverlayPanel>
      <vs-button class="menuButton" @click="saveProduct">Save</vs-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/_variables.scss';

* {
  padding: 0;
  margin: 0;
}

h1 {
  font-size: calc(1.5vw + 1.5vh);
}
h2 {
  font-size: calc(1vw + 1vh);
}

div.productCard {
  background-color: $bg-secondary;
  color: $bodyElementColor;
  min-width: 300px;
  width: 45%;
  margin-right: 1rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  border-radius: 0.5rem;
  display: inline-block;
  div#price {
    border: 0.1rem black groove;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    input {
      width: 30%;
      height: 2rem;
      border-radius: 12px;
      border: none;
    }
    .priceButton {
      background-color: $sidebarColor;
      width: 30%;
      font-size: calc(0.7vw + 0.7vh);
    }
  }
  div#colors {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 6rem;
    overflow-x: auto;
    border: 0.1rem black groove;
    margin: 0.5rem;
    padding: 0.25rem;
    div.color {
      width: 2rem;
      min-width: 2rem;
      height: 2rem;
      border: black 0.1rem solid;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      h2 {
        width: 100%;
        height: 100%;
      }
      form {
        width: 100%;
        input[type='color'] {
          -webkit-appearance: none;
          border: none;
          width: 2rem;
          height: 2rem;
        }
        input[type='color']::-webkit-color-swatch {
          border: none;
        }
        #add {
          position: relative;
          top: 0;
          left: 0;
          width: 100%;
          height: 1rem;
          background-color: $sidebarColor;
          color: white;
        }
      }
    }
    div.delete {
      position: relative;
      top: -2.5rem;
      left: 1.25rem;
      background-color: red;
      color: white;
      border: black 0.001rem solid;
      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;
    }
  }
  div#menu {
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-evenly;
    .menuButton {
      background-color: $shadow;
      font-size: calc(0.7vw + 0.7vh);
      &:hover {
        box-shadow: 0 0.25rem 0.5rem $shadow;
      }
    }
  }
}
</style>

<script>
const axios = require('axios');
import Galleria from 'primevue/galleria';
import ProductAttribute from '@/components/ProductAttribute.vue';
import OverlayPanel from 'primevue/overlaypanel';
import Toast from 'primevue/toast';
import InputText from 'primevue/inputtext';
export default {
  components: {
    Galleria,
    ProductAttribute,
    OverlayPanel,
    Toast,
    InputText,
  },
  props: {
    product: Object,
    editing: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      productName: this.product.name,
      productImage: this.product.img,
      attributes: this.product.attrs,
      newAttrName: '',
      colors: this.product.colors,
      showing: true,
      price: this.product.price,
      galleriaOptions: [
        {
          breakpoint: '768px',
          numVisible: 3,
        },
        {
          breakpoint: '560px',
          numVisible: 1,
        },
      ],
    };
  },
  methods: {
    deleteColor: function (i) {
      this.colors.splice(i.index, 1);
    },
    addColor: function (picker) {
      if (
        this.colors.indexOf(
          document.getElementById(picker.productName + ' Color').value,
        ) == -1
      ) {
        this.colors.push(
          document.getElementById(picker.productName + ' Color').value,
        );
      }
    },
    colorMenu: function () {
      if (this.showing) {
        this.showing = false;
      } else {
        this.showing = true;
      }
    },
    attributeUpdate: async function (updated) {
      await axios
        .post(process.env.VUE_APP_API + '/api/products/attribute', {
          id: this.product._id,
          name: updated[0],
          key: updated[1],
          cost: updated[2],
        })
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    },
    saveProduct: async function () {
      let update = {
        colors: this.colors,
        attrs: this.attributes,
      };
      await axios
        .put(process.env.VUE_APP_API + '/api/products', {
          id: this.product._id,
          update: update,
        })
        .then((res) => {
          this.$toast.add({
            severity: 'success',
            summary: `Saved Product: ${this.product.name}`,
            group: this.product.key.id,
            closable: false,
            life: 3000,
          });
          console.log(res);
        })
        .catch((err) => {
          this.$toast.add({
            severity: 'error',
            summary: 'Error saving product',
            group: this.product.key.id,
            closable: false,
            life: 3000,
          });
          console.error(err);
        });
    },
    attrPopup: function (event) {
      this.$refs.op.toggle(event);
    },
    createAttr: function () {
      console.log(this.attributes);
      if (!this.attributes) {
        console.log('new arr');
        this.attributes = new Object();
      }
      if (!this.attributes[this.newAttrName]) {
        console.log('new sub arr');
        this.attributes[this.newAttrName] = new Array();
        console.log(this.attributes[this.newAttrName]);
      } else {
        console.error(`Attribute "${this.newAttrName}" already exists`);
      }
      this.newAttrName = '';
    },
    removeAttr: function (name) {
      if (this.attributes[name]) {
        delete this.attributes[name];
        this.$forceUpdate();
      }
    },
    deleteProduct: function () {
      this.$emit('delete', this.product._id);
    },
  },
};
</script>
