<template>
  <div id="login">
    <div class="center con-avatars">
      <vs-avatar id="loginLogo">
        <img src="@/assets/logo.png" alt="" />
      </vs-avatar>
    </div>

    <div class="center content-inputs grid" id="loginScreen">
      <vs-row justify="center">
        <vs-input label-placeholder="Username" id="username">
          <template #icon>
            <i class="bx bx-user">U</i>
          </template>
        </vs-input>
      </vs-row>
      <br />
      <vs-row justify="center">
        <vs-input type="password" label-placeholder="Password" id="password">
          <template #icon>
            <i class="bx bx-lock-open-alt">P</i>
          </template>
        </vs-input>
      </vs-row>
      <br />
      <div id="buttonPanel">
        <router-link to="/">
          <vs-button id="loginButton"> Login </vs-button>
        </router-link>
        <br />
        <h2 v-if="wrong">There was an error</h2>
      </div>
    </div>
    <div id="footer">
      <vs-button id="mainSite">Back to Main Site</vs-button>
      <p id="copyright">&copy; Copyright Info</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";

div#login {
  margin-top: 10%;
}

div#loginLogo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -20px;

  border: black 2px solid;

  width: 5rem;
  height: 5rem;
}

div#loginScreen {
  width: 20%;
  background-color: $bodyElementColor;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 5px 10px 10px #333333;
  text-align: center;
}
div#buttonPanel {
  #loginButton {
    background-color: $sidebarColor;
    width: 15%;
    margin-left: 85%;
  }
}

div#footer {
  display: flex;
  margin-top: 15rem;
  p#copyright {
    display: inline-block;
    text-align: right;
    width: 100%;
  }
  button#mainSite {
    display: inline-block;
    background-color: $sidebarColor;
    width: 10rem;
  }
}
</style>

<script>
const axios = require("axios");

export default {
  name: "Home",
  components: {},
  methods: {
    login: async function () {
      // uname: this.document.getElementById(''),
      // pass: 'stirng
      axios
        .get(
          "/api/users/login",
          {
            email: "unique@email.com",
            pass: "super secure password",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          // Returned info
          console.log(response.data);
          // Response status code
          console.log(response.status);
          // Returned message
          console.log(response.statusText);
        });
    },
  },
};
</script>
