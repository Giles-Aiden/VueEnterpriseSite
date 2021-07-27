<template>
  <div class="itemViewContainer" @click.self="close">
    <div class="itemView">
      <i class="closeButton fa fa-close" @click="close"></i>
      <div class="imgContainer">
        <img :src="img" :alt="imgAlt" />
      </div>
      <div class="contentContainer">
        <h1>{{ itemName }}</h1>
        <p>{{ itemBody }}</p>
        <div class="description">
          <ul>
            <li>40oz capacity</li>
            <li>Vacuum Insulated Bottle</li>
            <li>keeps beverages cold up to 24 hours and hot up to 12 hours</li>
          </ul>
        </div>
      </div>
      <router-link :to="`/store/editor/${this.itemID}`">
        <button class="addToCart">Edit Logo</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'itemView',
  props: {
    itemName: String,
    itemBody: String,
    itemID: String,
    img: String,
    imgAlt: String,
  },
  methods: {
    close() {
      this.$emit('close');
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
