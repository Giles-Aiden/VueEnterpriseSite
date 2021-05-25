<template>
  <div class="storeItems">
    <Splitter class="shopContain">
      <SplitterPanel :size="20">
        <div class="shopOptions">
          <div v-for="(item, index) in optionCheckboxItems" :key="index">
            <vs-checkbox
              v-if="!item.title"
              :val="item.name"
              v-model="userSelections.lid"
            >
              <template #icon>
                <i class="pi pi-check button-color"></i>
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
            :descriptions="item.description"
          />
        </div>
      </SplitterPanel>
    </Splitter>
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
          name: '40oz Water Bottle',
          body: 'High quality, long-lasting, freezing cold water bottles.',
          imgSrc: require('@/assets/bottles/flask_black.png'),
          imgAlt: 'Water Bottle Image',
          description: ['40oz capacity','Vacuum Insulated Bottle','keeps beverages cold up to 24 hours and hot up to 12 hours']
        },
        {
          name: '20oz Water Bottle',
          body: 'High quality, long-lasting, freezing cold water bottles.',
          imgSrc: require('@/assets/bottles/flask_brown.png'),
          imgAlt: 'Water Bottle Image',
          description: ['40oz capacity','Vacuum Insulated Bottle','keeps beverages cold up to 24 hours and hot up to 12 hours']
        },
      ],
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
