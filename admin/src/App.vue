<template>
  <div id="app">
    <div class="hidden" id="sidebar">
      <vs-sidebar
        sticky
        square
        hover-expand
        v-model="active"
        open
        background="#113F70"
        textWhite
        >
        <template class="logo" #logo>
          <img id="logoImg" src="@/assets/logo.png" style="object-fit: cover; width: 100%; height: 500px;">
        </template>
        <vs-sidebar-item id="products">
          <template #icon>
            <h1 style="color: white">P</h1>
          </template>
          <h1>Products</h1>
        </vs-sidebar-item>
        <br>
        <vs-sidebar-item id="sales">
          <template #icon>
            <h1 style="color: white">$</h1>
          </template>
          <h1>Sales</h1>
        </vs-sidebar-item>
        <br>
        <vs-sidebar-item id="orders">
          <template #icon>
            <h1 style="color: white">O</h1>
          </template>
          <h1>Orders</h1>
        </vs-sidebar-item>
        <br>
        <vs-sidebar-item id="users">
          <template #icon>
            <h1 style="color: white">U</h1>
          </template>
          <h1>Users</h1>
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <table id="sidebar-footer">
              <tr>
                <td><h3>David Ray</h3></td>
                <td><button id="logout">Logout</button></td>
              </tr>
            </table>
          </vs-row>
        </template>
      </vs-sidebar>
    </div>

    <div class="center grid" id="sales">
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
          <div class="salesData">
            <h2>Earnings</h2>
            <hr>
          </div>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
          <div class="salesData">
            <h2>Overview</h2>
            <hr>
          </div>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
          <div class="salesData">
            <h2>Balance</h2>
            <hr>
            <br>
            <h1 style="text-align: center;">$10000</h1>
          </div>
        </vs-col>
      </vs-row>
      <br>
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
          <div class="salesData" style="width: 96.6%;">
            <h2>Sales By The Day</h2>
            <hr>
            <div style="backgroundColor: white; color: black; height: 20rem">
              <h1>Graph will go here</h1>
            </div>
          </div>
        </vs-col>
      </vs-row>
      <br>
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
          <div class="salesData" style="width: 93%;">
            <h2>Top Selling Products</h2>
            <hr>
            <div style="backgroundColor: white; color: black; height: 20rem">
              <h1>Data will go here</h1>
            </div>
          </div>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
          <div class="salesData" style="width: 93%;">
            <h2>Reviews</h2>
            <hr>
            <div style="backgroundColor: white; color: black; height: 20rem">
              <h1>Graph will go here</h1>
            </div>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
      data:() => ({
        active: 'home',
      })
})
</script>

<style lang="scss">
@import 'src/assets/styles/_variables.scss';

body, html{
  padding: 0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.vs-sidebar__logo {
  padding: 0;
}
img#logoImg {
  filter: invert(100%);
  width: 100%;
  height: 100%;
  display: block;
  padding: 0;
}

div#sidebar{
  overflow: hidden;
  table#sidebar-footer{
    width: 100%;

    button#logout{
    background-color: $sidebarElementColor;
    color: $sidebarTextColor;
    width: 100%;
    height: 2rem;
    padding: 0;
    border-radius: 1rem;
    border: none;
    }
  }
  .vs-sidebar__footer{
    overflow: hidden;
  }
}

div#sales{
  text-align: center;
  margin-left: 50px;
  div.salesData{
    width: 80%;
    background-color: $bodyElementColor;
    color: $bodyElementTextColor;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: left;
  }
}
</style>
