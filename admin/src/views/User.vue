<template>
  <div class="user">
    <Sidebar></Sidebar>
    <h1>Users</h1>
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
    <userCard image='<img src="@/assets/logo.png">' email="email@email.com" username="username"></userCard>
    <userCard></userCard>
  </div>
  
</template>

<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";

div.user{
    margin-left: 50px;
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
