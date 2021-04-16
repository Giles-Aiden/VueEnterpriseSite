<template>
  <div id="Sales">
    <Sidebar></Sidebar>
    <div class="center grid" id="sales">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
          <div class="salesData">
            <h2>Earnings</h2>
            <hr />
          </div>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
          <div class="salesData">
            <h2>Overview</h2>
            <hr />
          </div>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
          <div class="salesData">
            <h2>Balance</h2>
            <hr />
            <br />
            <h1 style="text-align: center">$10000</h1>
          </div>
        </vs-col>
      </vs-row>
      <br />
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <div class="salesData" style="width: 96.6%">
            <h2>Sales By The Day</h2>
            <hr />
            <div style="backgroundcolor: white; color: black; height: 20rem">
              <h1>Graph will go here</h1>
            </div>
          </div>
        </vs-col>
      </vs-row>
      <br />
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
          <div class="salesData" style="width: 93%">
            <h2>Top Selling Products</h2>
            <hr />
            <div style="backgroundcolor: white; color: black; height: 20rem">
              <h1>Data will go here</h1>
            </div>
          </div>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
          <div class="salesData" style="width: 93%">
            <h2>Reviews</h2>
            <hr />
            <div style="backgroundcolor: white; color: black; height: 20rem">
              <h1>Graphs will go here</h1>
            </div>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";

div#sales {
  text-align: center;
  margin-left: 50px;
  div.salesData {
    width: 80%;
    background-color: $bodyElementColor;
    color: $bodyElementTextColor;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: left;
    box-shadow: 5px 10px 10px #333333;
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
export default {
  name: "Home",
  components: {
    Sidebar,
  },
};
</script>
