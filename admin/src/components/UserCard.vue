<template>
  <div class="userCard">
    <!--     <div class="center grid">
      <vs-row>
        <vs-col v-if="user.admin" w="1">
          <h1>A</h1>
        </vs-col>
        <vs-col v-else w="1">
          <h1></h1>
        </vs-col>
        <vs-col w="2">
          <img class="icon" :src="require(`../assets/${user.image}`)" />
        </vs-col>
        <vs-col w="4">
          {{ user.email }}
        </vs-col>
        <vs-col w="4">
          {{ user.uname }}
        </vs-col>
        <vs-col w="1">
          <button>More Info</button>
        </vs-col>
      </vs-row>
    </div> -->
    <h1 v-if="user.admin">A</h1>
    <h1 v-else></h1>
    <img class="icon" :src="require(`../assets/${user.image}`)" />
    <p>{{ user.email }}</p>
    <p>{{ user.uname }}</p>
    <button>More Info</button>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";

* {
  padding: 0;
  margin: 0;
}

.userCard {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;

  background-color: $bg-secondary;
  img.icon {
    border-radius: 0.5;
    height: 3rem;
    width: 3rem;
    min-width: 80px;
    min-height: 80px;
  }
  h1 {
    width: 10%;
    min-width: 80px;
  }
  p {
    width: 20%;
    min-width: 200px;
  }
  button {
    background-color: $shadow;
    color: $sidebarTextColor;
    width: 10%;
    min-width: 100px;
    height: 2rem;
    padding: 0;
    border-radius: 0.5rem;
    border: none;
  }
  color: $bodyElementColor;
  width: calc(100% - 2rem);
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 5px 10px 10px #333333;
  margin-bottom: 1rem;
}
</style>

<script>
export default {
  props: ["user"],
};
</script>
