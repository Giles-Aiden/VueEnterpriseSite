<template>
  <div class="user">
    <Sidebar></Sidebar>
    <div id="searchBar">
      <h1>Users</h1>
      <vs-button v-if="addingUser" class="registerBtn" @click="addUser">Add User</vs-button>
      <div id="addUser" v-else>
        <input type="text" placeholder="Email" id="email" />
        <input type="text" placeholder="Username" id="uname" />
        <input type="text" placeholder="Password" id="pass" />
        <label for="admin">Admin?</label>
        <input type="checkbox" id="admin">
        <vs-button class="registerBtn" @click="createUser(); addUser()">Register</vs-button>
      </div>
    </div>
    <userCard
      v-for="(user, index) in users"
      :key="index"
      :user="users[index]"
    ></userCard>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";

body {
  margin: 0;
  padding: 0;
}

div.user {
  margin-left: 50px;
  background: $bg-main;
  height: 100vh;
  div#searchBar {
    width: 100%;
    background-color: $bg-secondary;
    color: $bodyElementColor;
    margin-bottom: 1rem;
    height: 4rem;
    padding: 2rem;
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    #addUser{
      display: flex;
      justify-content: center;
      width: 50%;
    }
    input,
    .registerBtn {
      height: 1.5rem;
    }
    .registerBtn{
      background-color: $shadow;
    }
    #admin{
      height: 1rem;
      width: 1rem;
    }
    h1 {
      padding: 0;
      margin: 0;
    }
  }
}
</style>

<script>
// @ is an alias to /src

import Sidebar from "@/components/Sidebar.vue";
import UserCard from "@/components/UserCard.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
    UserCard,
  },
  data: function () {
    return {
      users: [
        {
          email: "email@email.com",
          image: "logo.png",
          admin: true,
          uname: "username",
          pass: "password",
        },
      ],
      addingUser: true,
    };
  },
  methods: {
    addUser: function() {
      if(this.addingUser){
        this.addingUser = false;
      }else{
        this.addingUser = true;
      }
    },
    createUser: function () {
      let user = {
        email: document.getElementById("email").value,
        uname: document.getElementById("uname").value,
        pass: document.getElementById("pass").value,
        admin: document.getElementById("admin").checked,
        image: "logo.png", //placeholder
      };
      this.users.push(user);

      document.getElementById("email").value = "";
      document.getElementById("uname").value = "";
      document.getElementById("pass").value = "";
    },
  },
};
</script>
