<template>
  <div class="shopItem">
    <vs-card class="itemContain" type="4">
      <template #title>
        <h3>{{ itemName }}</h3>
      </template>
      <template #img>
        <img :src="img" :alt="imgAlt" />
      </template>
      <template #text>
        <p>{{ itemBody }}</p>
      </template>
    </vs-card>
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
$bg-main: #185CA3;
$bg-secondary: #6CACF0;
$shadow: #113F70;

.button-color {
  background-color: $bg-main;
  box-shadow: $shadow;
}
.shopItem {
  margin-top: 1em;
  .itemContain {
    width: 20rem;
    height: auto;
    border-radius: 2.5em;
    box-shadow: 20px 20px 30px 10px grey;
  }
}
</style>
