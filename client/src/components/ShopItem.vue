<template>
  <div class="shopItem">
    <img class="" :src="img" :alt="imgAlt" srcset="">
    <h4>{{itemName}}</h4>
    <p>{{itemBody}}</p>
  </div>
</template>

<script>
export default {
  name: 'ShopItem',
  props: {
    itemName: String,
    itemBody: String,
    img: String,
    imgAlt: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shopItem {
  background: lightblue;
  width: 15rem;
  height: 15rem;
  margin: .5rem;
  position: relative;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

}
</style>
