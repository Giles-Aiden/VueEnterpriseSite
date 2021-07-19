<template>
  <div class="storeItems">
    <div class="shopDisplay">
      <ShopItem
        v-for="item in shopItems"
        :key="item._id"
        class="shopDisplayItem"
        :itemName="item.name"
        :itemBody="item.body"
        :img="item.img"
        :imgAlt="item.imgAlt"
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
  methods: {
    load: async function () {
      try {
        let { data } = await axios.get(
          process.env.VUE_APP_API + '/api/products',
        );
        data.forEach((e, i) => {
          //this.shopItems.push(e)
          this.$set(this.shopItems, i, e);
        });
        this.$forceUpdate();
        console.log(this.shopItems);
      } catch (err) {
        console.error(err);
      }
    },
  },
  created() {
    this.load();
  },
  data() {
    return {
      shopItems: [],
      /*shopItems: [
        {
          name: '40oz Water Bottle',
          body: 'High quality, long-lasting, freezing cold water bottles.',
          img: require('@/assets/logo.png'),
          imgAlt: 'Water Bottle Image',
        },
        {
          name: '20oz Water Bottle',
          body: 'High quality, long-lasting, freezing cold water bottles.',
          img: require('@/assets/logo.png'),
          imgAlt: 'Water Bottle Image',
          description: [
            '40oz capacity',
            'Vacuum Insulated Bottle',
            'keeps beverages cold up to 24 hours and hot up to 12 hours',
          ],
        },
        {
          name: '30oz Water Bottle',
          body: 'High quality, long-lasting, freezing cold water bottles.',
          img: require('@/assets/logo.png'),
          imgAlt: 'Water Bottle Image',
        },
        {
          name: '40oz Water Bottle',
          body: 'High quality, long-lasting, freezing cold water bottles.',
          img: require('@/assets/logo.png'),
          imgAlt: 'Water Bottle Image',
        },
        {
          name: '30oz Water Bottle',
          body: 'High quality, long-lasting, freezing cold water bottles.',
          img: require('@/assets/logo.png'),
          imgAlt: 'Water Bottle Image',
        },
      ],*/
      userSelections: {
        lid: [],
      },
      optionCheckboxItems: [
        { title: 'Size' },
        { name: 'Size #1' },
        { name: 'Size #2' },
        { name: 'Size #3' },
        { title: 'Lid Type' },
        { name: 'lid #1' },
        { name: 'lid #2' },
        { name: 'lid #3' },
      ],
    };
  },
};
</script>
