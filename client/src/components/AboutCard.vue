<template>
  <div class="card">
    <h1 class="title">{{ itemName }}</h1>
    <p class="body">{{ itemBody }}</p>
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
@import '@/assets/styles/_variables.scss';
  .card {
    box-shadow: 5px 5px 10px $shadow;
    border-radius: 1rem;
    margin: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    max-width: 1200px;
    .title {
      /* border: 2px solid $shadow; */
      display: inline-block;
      padding: .5rem;
      border-radius: .5rem;
      margin: 0;
      /* box-shadow: 5px 5px 10px $shadow; */
    }
    .body {
      text-align: left;
      &::first-letter {
        margin-left: 2rem;
      }
    }
  }
</style>
