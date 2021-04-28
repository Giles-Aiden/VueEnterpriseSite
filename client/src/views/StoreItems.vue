<template>
  <div class="storeItems">
    <Splitter class="shopContain">
      <SplitterPanel :size="20">
        <div class="shopOptions">
          <div v-for="(item, index) in optionCheckboxItems" :key="index">
            <vs-checkbox v-if="!item.title" :val="item.name" v-model="userSelections.lid">
              <template #icon>
                <i class="pi pi-check"></i>
              </template>
              {{ item.name }}
            </vs-checkbox>
            <h1 class="selectionHeader" v-else>{{ item.title }}</h1>
          </div>
        </div>
      </SplitterPanel>
      <SplitterPanel :size="80">
        <div class="shopDisplay">
          <ShopItem
            v-for="(item, index) in shopItems"
            class="shopDisplayItem"
            :key="item.name + index"
            :itemName="item.name"
            :itemBody="item.body"
            :img="item.imgSrc"
            :imgAlt="item.imgAlt"
          />
        </div>
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<style lang="scss" scoped>
.shopContain {
  height: 65vh;
  overflow-y: scroll;
  .shopDisplay {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    .shopDisplayItem {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
  .shopOptions {
    display: flex;
    flex-flow: nowrap column;
    padding: 2em 1rem;
    .selectionHeader {
      margin-left: 2em;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import ShopItem from '@/components/ShopItem.vue';

export default {
  name: 'Home',
  components: {
    ShopItem,
  },
  data() {
    return {
      shopItems: [
        {
          name:
            'These titles should all totally be color and not size. Oh well.',
          body: 'High quality, long-lasting, freezing cold water bottles.',
          imgSrc: require('@/assets/logo.png'),
          imgAlt: 'Water Bottle Image',
        },
        {
          name: '30oz Water Bottle',
          body: 'High quality, long-lasting, freezing cold water bottles.',
          imgSrc: require('@/assets/logo.png'),
          imgAlt: 'Water Bottle Image',
        },
        {
          name: '40oz Water Bottle',
          body: 'High quality, long-lasting, freezing cold water bottles.',
          imgSrc: require('@/assets/logo.png'),
          imgAlt: 'Water Bottle Image',
        },
        {
          name: '20oz Water Bottle',
          body: 'High quality, long-lasting, freezing cold water bottles.',
          imgSrc: require('@/assets/logo.png'),
          imgAlt: 'Water Bottle Image',
        },
        {
          name: '30oz Water Bottle',
          body: 'High quality, long-lasting, freezing cold water bottles.',
          imgSrc: require('@/assets/logo.png'),
          imgAlt: 'Water Bottle Image',
        },
        {
          name: '40oz Water Bottle',
          body: 'High quality, long-lasting, freezing cold water bottles.',
          imgSrc: require('@/assets/logo.png'),
          imgAlt: 'Water Bottle Image',
        },
        {
          name: '30oz Water Bottle',
          body: 'High quality, long-lasting, freezing cold water bottles.',
          imgSrc: require('@/assets/logo.png'),
          imgAlt: 'Water Bottle Image',
        },
      ],
      userSelections: {
        'lid': [],
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
