<template>
  <div class="user">
    <Sidebar></Sidebar>
    <div id="searchBar">
        <h1>Users</h1>
    </div>
    <!--
    <div class="userCard">
        <div class="center grid">
            <vs-row>
                <vs-col v-if="0" w="1">
                    <h1>A</h1>
                </vs-col>
                <vs-col w="2">
                    <img src="@/assets/logo.png">
                </vs-col>
                <vs-col w="4">
                    email@gmail.com
                </vs-col>
                <vs-col w="4">
                    username
                </vs-col>
                <vs-col w="1">
                    <button>More Info</button>
                </vs-col>
            </vs-row>
        </div>
    </div>
    -->
    <userCard v-bind:admin="true" image='logo.png' email="email@email.com" username="username"></userCard>
    <userCard v-bind:admin="false" image='logo.png' email="email@email.com" username="username"></userCard>
    <userCard v-bind:admin="false" image='logo.png' email="email@email.com" username="username"></userCard>
    <userCard v-bind:admin="false" image='logo.png' email="email@email.com" username="username"></userCard>
    <userCard v-bind:admin="true" image='logo.png' email="email@email.com" username="username"></userCard>
    <userCard v-bind:admin="false" image='logo.png' email="email@email.com" username="username"></userCard>
    <userCard v-bind:admin="false" image='logo.png' email="email@email.com" username="username"></userCard>
    <userCard v-bind:admin="false" image='logo.png' email="email@email.com" username="username"></userCard>
    <userCard v-bind:admin="false" image='logo.png' email="email@email.com" username="username"></userCard>
    <userCard v-bind:admin="false" image='logo.png' email="email@email.com" username="username"></userCard>
    <userCard v-bind:admin="false" image='logo.png' email="email@email.com" username="username"></userCard>
  </div>
  
</template>

<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";

body{
    margin: 0;
    padding: 0;
}

div.user{
    margin-left: 50px;
    div#searchBar{
        width: calc(100% - 50px);
        background-color: #185CA3;
        margin-bottom: 1rem;
        margin-left: -10px;
        height: 4rem;
        padding: 2rem;
        position: sticky;
        top: 0;   
        z-index: 2;
        color: $bodyElementTextColor;
        display: flex;
        justify-items: middle;
        h1{
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
};
</script>
