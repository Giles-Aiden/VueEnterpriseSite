<template>
  <div class="itemViewContainer" @click.self="close">
    <div class="itemView">
      <i class="closeButton fa fa-close" @click="close"></i>
      <div class="imgContainer">
        <img :src="item.img" :alt="item.name" />
      </div>
      <div class="contentContainer">
        <h1>{{ item.name }}</h1>
        <p>{{ item.body }}</p>
        <div class="description">
          <div v-for="(attr, key, index) in item.attrs" :key="index">
            <h3>{{ capitalize(key) }}</h3>
            <div v-for="(item, i) in attr" :key="i">
              <RadioButton :value="item.name" v-model="attributes[key]" />
              {{ item.name }} (+${{ item.upcharge }})
            </div>
          </div>
        </div>
      </div>
      <button class="addToCart" @click="saveInfo">Edit Logo</button>
    </div>
  </div>
</template>

<script>
import RadioButton from 'primevue/radiobutton';

export default {
  name: 'itemView',
  components: {
    RadioButton,
  },
  props: {
    item: Object,
  },
  data() {
    return {
      attributes: {},
    };
  },
  created() {
    let store = window.sessionStorage;
    if (store.getItem('currentItem'))
      store.setItem('currentItem', JSON.stringify({}));
  },
  methods: {
    close() {
      this.$emit('close');
    },
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    saveInfo() {
      let store = window.sessionStorage;
      store.setItem(
        'currentItem',
        JSON.stringify({
          item: this.item,
          attrs: this.attributes,
        }),
      );
      this.$router.push('/store/editor');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
.itemViewContainer {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.7);
  .itemView {
    background: white;
    position: relative;
    height: 100%;
    border-radius: 2rem;
    display: flex;
    .contentContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 50%;
    }
    .description {
      text-align: left;
    }
    .imgContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 50%;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .addToCart {
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 1.5em;
      border: none;
      outline: none;
      background: $bg-main;
      color: white;
      padding: 1em 1.5em;
      border-radius: 1em;
    }
  }
  .closeButton {
    font-size: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    margin: 1.5rem;
    cursor: pointer;
  }
}
</style>
