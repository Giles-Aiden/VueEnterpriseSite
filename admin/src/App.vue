<template>
  <div id="app">
    <div class="hidden" id="sidebar">
      <vs-sidebar
        absolute
        hover-expand
        v-model="active"
        open
        background="primary"
        textWhite
        >
        <template class="logo" #logo>
          <img id="logoImg" src="@/assets/logo.png" width="auto" height="50rem">
        </template>
        <vs-sidebar-item id="home">
          <template #icon>
            <i class='bx bx-home'></i>
          </template>
          Products
        </vs-sidebar-item>
        <br>
        <vs-sidebar-item id="market">
          <template #icon>
            <i class='bx bx-grid-alt'></i>
          </template>
          Sales
        </vs-sidebar-item>
        <br>
        <vs-sidebar-item id="Music">
          <template #icon>
            <i class='bx bxs-music'></i>
          </template>
          Orders
        </vs-sidebar-item>
        <br>
        <vs-sidebar-item id="donate">
          <template #icon>
            <i class='bx bxs-donate-heart' ></i>
          </template>
          Users
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
</style>
