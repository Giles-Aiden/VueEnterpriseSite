<template>
  <div class="storeItems">
    <div class="shopDisplay">
      <ShopItem
        v-for="item in shopItems"
        :key="item._id"
        class="shopDisplayItem"
        :item="item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$bg-main: #185ca3;
$bg-secondary: #6cacf0;
$shadow: #113f70;

.button-color {
  background-color: $bg-main;
  box-shadow: $shadow;
}
.shopDisplay {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  .shopDisplayItem {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>

<script>
const axios = require('axios');
// @ is an alias to /src
import ShopItem from '@/components/ShopItem.vue';

export default {
  name: 'Home',
  components: {
    ShopItem,
  },
  async created() {
    try {
      let { data } = await axios.get(process.env.VUE_APP_API + '/api/products');
      data.forEach((e, i) => {
        this.$set(this.shopItems, i, e);
      });
    } catch (err) {
      console.error(err);
    }
  },
  mounted() {
    this.$emit('shop', 0);
  },
  data() {
    return {
      shopItems: [],
    };
  },
};
</script>
