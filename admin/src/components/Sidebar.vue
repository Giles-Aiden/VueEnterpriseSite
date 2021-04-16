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
          <img
            id="logoImg"
            src="@/assets/logo.png"
            style="object-fit: cover; width: 100%; height: auto"
          />
          <!--<h1 style="margin: 0; padding: 0; text-decoration: line-through;">WFBM</h1>-->
        </template>
        <router-link to="/">
          <vs-sidebar-item id="sales">
            <template #icon>
              <h1 style="color: white">$</h1>
            </template>
            <h1>Sales</h1>
          </vs-sidebar-item>
        </router-link>
        <br />
        <router-link to="/products">
          <vs-sidebar-item id="products">
            <template #icon>
              <h1 style="color: white">P</h1>
            </template>
            <h1>Products</h1>
          </vs-sidebar-item>
        </router-link>
        <br />
        <router-link to="/orders">
          <vs-sidebar-item id="orders">
            <template #icon>
              <h1 style="color: white">O</h1>
            </template>
            <h1>Orders</h1>
          </vs-sidebar-item>
        </router-link>
        <br />
        <router-link to="/users">
          <vs-sidebar-item id="users">
            <template #icon>
              <h1 style="color: white">U</h1>
            </template>
            <h1>Users</h1>
          </vs-sidebar-item>
        </router-link>
        <br>
        <router-link to="/">
          <vs-sidebar-item id="mainSite">
            <template #icon>
              <h1 style="color: white">H</h1>
            </template>
            <h1>Home Site</h1>
          </vs-sidebar-item>
        </router-link>
        <template #footer>
          <vs-row justify="space-between">
            <table id="sidebar-footer">
              <tr>
                <td><h3>David Ray</h3></td>
                <td>
                  <router-link to="/login">
                    <button id="logout">Logout</button>
                  </router-link>
                </td>
              </tr>
            </table>
          </vs-row>
        </template>
      </vs-sidebar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  components: {},
};
</script>

<style lang="scss">
@import "src/assets/styles/_variables.scss";

body,
html {
  padding: 0;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
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

div#sidebar {
  overflow: hidden;
  table#sidebar-footer {
    width: 100%;

    button#logout {
      background-color: $sidebarElementColor;
      color: $sidebarTextColor;
      width: 100%;
      height: 2rem;
      padding: 0;
      border-radius: 1rem;
      border: none;
    }
  }
  .vs-sidebar__footer {
    overflow: hidden;
  }
}
</style>
