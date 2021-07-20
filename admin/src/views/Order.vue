<template>
  <div id="orders">
    <Sidebar></Sidebar>
    <table>
      <tr>
        <td>Date</td>
        <td>Email</td>
        <td>Name</td>
        <td>Amount</td>
        <td>Number of Items Purchased</td>
        <td>Items Purchased</td>
      </tr>
      <OrderComp
        v-for="(order, index) in Orders"
        :key="index"
        :user="Orders[index]"
      />
    </table>
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
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue';
import OrderComp from '@/components/OrderComp.vue';

export default {
  name: 'Home',
  components: {
    Sidebar,
    OrderComp,
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
    };
  },
};
</script>
