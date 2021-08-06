<template>
  <div id="orders">
    <Sidebar></Sidebar>
    <DataTable :value="orders">
      <Column field="_id" header="OrderID"></Column>
      <Column field="date" header="Date"></Column>
      <Column field="productNames" header="Products">
        <template #body="slotProps">
          <ol>
            <li v-for="(item, index) in slotProps.data.productNames" :key="index">
              {{item}}
            </li>
          </ol>
        </template>
      </Column>
      <Column field="productAttrs" header="Attributes">
        <template #body="slotProps">
          <ol>
            <li v-for="(item, index) in slotProps.data.productAttrs" :key="index">
              <div v-for="(value, key, index) in item" :key="index">
                <h3>{{key}}:</h3><h4>{{value}}</h4>
              </div>
            </li>
          </ol>
        </template>
      </Column>
      <Column field="productImgs" header="Images">
        <template #body="slotProps">
          <ol>
            <li v-for="(item, index) in slotProps.data.productImgs" :key="index">
              <img v-for="(img, index) in item" :key="index" :src="img" style="width: 70%" />
            </li>
          </ol>
        </template>
      </Column>
      <Column field="color" header="Color">
        <template #body="slotProps">
          <ol>
            <li 
              v-for="(item, index) in slotProps.data.products" 
              :key="index"
            >
              {{item.color.slice(1)}}
              <div
                :style="{ backgroundColor: item.color, 'width': '3rem', 'height': '3rem' }"
              />
            </li>
          </ol>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/_variables.scss';
* {
  padding: 0;
  margin: 0;
}
#orders {
  margin-left: 50px;
  width: calc(100% - 50px);
  height: 100vh;
  padding: 1rem;
  background-color: $bg-main;
}
.OrderCard {
  padding: 0.25rem 1rem;
  background: $bg-secondary;
  color: $bodyElementColor;
  text-align: left;
  .data {
    font-weight: bold;
  }
}
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  text-align: center;
  background-color: $bg-secondary;
  tr {
    width: 100%;
    td {
      width: 16%;
      font-size: calc(0.8vw + 0.8vh);
      border: white 0.1rem solid;
      text-align: center;
      vertical-align: middle;
      color: $bodyElementColor;
      ul {
        margin: 0;
      }
    }
  }
}
</style>

<script>
const axios = require('axios');
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
//import ColumnGroup from 'primevue/columngroup';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'Home',
  components: {
    DataTable,
    Column,
    Sidebar,
  },
  data() {
    return {
      Orders: [
        {
          ID: 1,
          firstName: 'Jeff',
          lastName: 'Smith',
          email: 'Email10@gmail.com',
          date: '5-23-21',
          cost: 1999,
          items: ['Water Bottle', 'Another Water Bottle'],
        },
        {
          ID: 2,
          firstName: 'Ethan',
          lastName: 'Roldan',
          email: 'Email20@gmail.com',
          date: '5-24-21',
          cost: 1999,
          items: ['Water Bottle', 'Another Water Bottle'],
        },
      ],
      orders: undefined,
    };
  },
  async mounted() {
    let orders = await axios.get(process.env.VUE_APP_API + '/api/order');
    this.orders = orders.data;
    console.log(this.orders);
  },
};
</script>
