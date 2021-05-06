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
.shopItem {
  margin-top: 1em;
  .itemContain {
    width: 20rem;
    height: auto;
    border: 1em solid #2486f0;
    border-radius: 2.5em;
    box-shadow: 20px 20px 30px 10px grey;
    min-width: 10px;
    max-width: 80vw;
  }
}
</style>
