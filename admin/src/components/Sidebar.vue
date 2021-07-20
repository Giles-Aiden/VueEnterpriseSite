<template>
  <div id="app">
    <div
      class="hidden"
      id="sidebar"
      @mouseenter="lengthen"
      @mouseleave="shorten"
    >
      <vs-sidebar
        sticky
        square
        hover-expand
        open
        background="#113F70"
        textWhite
      >
        <template class="logo" #logo id="logoTemplate">
          <img
            id="logoImg"
            src="@/assets/WFMB Logo.png"
            style="width: 100%; height: auto"
          />
          <!--<h1 style="margin: 0; padding: 0; text-decoration: line-through;">WFBM</h1>-->
        </template>

        <vs-sidebar-item id="sales">
          <template #icon>
            <i class="pi pi-dollar"></i>
          </template>
          <router-link to="/">
            <h1>Sales</h1>
          </router-link>
        </vs-sidebar-item>

        <br />

        <vs-sidebar-item id="products">
          <template #icon>
            <i class="pi pi-th-large"></i>
          </template>
          <router-link to="/products">
            <h1>Products</h1>
          </router-link>
        </vs-sidebar-item>

        <br />

        <vs-sidebar-item id="orders">
          <template #icon>
            <i class="pi pi-bars"></i>
          </template>
          <router-link to="/orders">
            <h1>Orders</h1>
          </router-link>
        </vs-sidebar-item>

        <br />

        <vs-sidebar-item id="users">
          <template #icon>
            <i class="pi pi-users"></i>
          </template>
          <router-link to="/users">
            <h1>Users</h1>
          </router-link>
        </vs-sidebar-item>

        <br />

        <vs-sidebar-item id="mainSite">
          <template #icon>
            <i class="pi pi-camera"></i>
          </template>
          <a :href="imgSite">
            <h1>Images</h1>
          </a>
        </vs-sidebar-item>

        <br />

        <vs-sidebar-item id="mainSite">
          <template #icon>
            <i class="pi pi-home"></i>
          </template>
          <a :href="clientSite">
            <h1>Home Site</h1>
          </a>
        </vs-sidebar-item>

        <template #footer>
          <vs-row justify="space-between">
            <table id="sidebar-footer" ref="footer">
              <tr>
                <td>
                  <h3 v-if="sidebarOpen">
                    {{ user.split(' ')[0] + ' ' + user.split(' ')[1] }}
                  </h3>
                  <h1 v-else>
                    {{
                      user.split(' ')[0].substring(0, 1) +
                      user.split(' ')[1].substring(0, 1)
                    }}
                  </h1>
                </td>
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

<style lang="scss">
@import 'src/assets/styles/_variables.scss';

body,
html {
  padding: 0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.vs-sidebar__logo {
  padding: 0;
}
#logoTemplate {
  height: 500%;
  img#logoImg {
    filter: invert(100%);
    width: 100%;
    height: 100%;
    display: block;
    padding: 0;
  }
}

div#sidebar {
  overflow: hidden;
  h1 {
    color: $sidebarTextColor;
    text-decoration: none;
  }
  table#sidebar-footer {
    width: 100%;

    td {
      width: 50%;
    }

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

<script>
export default {
  name: 'sidebar',
  data: function () {
    return {
      user: 'David Ray',
      sidebarOpen: true,
      clientSite: process.env.VUE_APP_DOMAIN,
      imgSite: process.env.VUE_APP_PIWIGO,
    };
  },
  methods: {
    lengthen: function () {
      setTimeout(() => {
        this.sidebarOpen = true;
      }, 120);
    },
    shorten: function () {
      this.sidebarOpen = false;
    },
  },
};
</script>
