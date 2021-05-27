<template>
  <div id="Sales">
    <Sidebar></Sidebar>
    <div class="center grid" id="sales">
      <!--       <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
          <div class="salesData">
            <h2>Earnings</h2>
            <hr />
            <br />
            <h1 v-if="earnings >= 0">${{ earnings }}</h1>
            <h1 v-else>-${{ Math.abs(earnings) }}</h1>
          </div>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
          <div class="salesData">
            <h2>Overview</h2>
            <hr />
            <br />
            <h1 v-if="earnings > 0">You are profitting</h1>
            <h1 v-else-if="earnings == 0">You are breaking even</h1>
            <h1 v-else>You are losing money</h1>
          </div>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
          <div class="salesData">
            <h2>Balance</h2>
            <hr />
            <br />
            <h1>${{ balance }}</h1>
          </div>
        </vs-col>
      </vs-row> -->
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <div id="statistics">
            <div class="salesData">
              <h2>Earnings</h2>
              <hr />
              <br />
              <h1 v-if="earnings >= 0">${{ earnings }}</h1>
              <h1 v-else>-${{ Math.abs(earnings) }}</h1>
            </div>
            <div class="salesData">
              <h2>Overview</h2>
              <hr />
              <br />
              <h1 v-if="earnings > 0">You are profitting</h1>
              <h1 v-else-if="earnings == 0">You are breaking even</h1>
              <h1 v-else>You are losing money</h1>
            </div>
            <div class="salesData">
              <h2>Balance</h2>
              <hr />
              <br />
              <h1>${{ balance }}</h1>
            </div>
          </div>
        </vs-col>
      </vs-row>
      <br />
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <div class="salesData" style="width: calc(100% - 2rem)">
            <h2>Sales By The Day</h2>
            <hr />
            <div style="backgroundcolor: white; color: black; height: 50vh">
              <SalesChart
                :dates="['5/8', '5/9', '5/10', '5/11', '5/12', '5/13', '5/14']"
                :sales="[65, 59, 80, 81, 56, 55, 40]"
              ></SalesChart>
            </div>
          </div>
        </vs-col>
      </vs-row>
      <br />
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <div class="salesData" style="width: calc(100% - 2rem)">
            <h2>Top Selling Products</h2>
            <hr />
            <div style="color: white; height: 50vh">
              <ol>
                <h1
                  class="topSeller"
                  v-for="(products, index) in topSellers"
                  :key="index"
                >
                  <li>{{ topSellers[index] }}</li>
                </h1>
                <!--                 <h1 class="topSeller"><li>Product #1</li></h1>
                <h1 class="topSeller"><li>Product #2</li></h1>
                <h1 class="topSeller"><li>Product #3</li></h1> -->
              </ol>
            </div>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";

h1 {
  font-size: calc(1.5vw + 1.5vh);
}
h2 {
  font-size: calc(1vw + 1vh);
}

div#sales {
  text-align: center;
  margin-left: 50px;
  background-color: $bg-main;
  #statistics {
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
  }
  div.salesData {
    width: 31%;
    background-color: $bg-secondary;
    margin: 1rem;
    color: $bodyElementColor;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: left;
    box-shadow: 5px 10px 10px #333333;
    h1 {
      text-align: center;
    }
    h1.topSeller {
      text-align: left;
      padding-left: 10%;
    }
  }
  @media screen and (max-width: 600px) {
    div.salesData {
      width: 100%;
    }
  }
}
@media screen and (max-width: 1015px) {
  vs-row {
    background: red;
  }
}
</style>

<script>
// @ is an alias to /src

import Sidebar from "@/components/Sidebar.vue";
import SalesChart from "@/components/SalesChart.vue";

export default {
  name: "Home",
  components: {
    Sidebar,
    SalesChart,
  },
  data: function () {
    return {
      earnings: 0,
      balance: 10000,
      topSellers: ["Product #1", "Product #2", "Product #3"],
    };
  },
};
</script>
