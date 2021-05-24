<template>
  <div class="userCard">
    <div class="center grid">
      <vs-row>
        <vs-col v-if="admin" w="1">
          <h1>A</h1>
        </vs-col>
        <vs-col v-else w="1">
          <h1></h1>
        </vs-col>
        <vs-col w="2">
          <img class="icon" :src="require(`../assets/${image}`)" />
        </vs-col>
        <vs-col w="4">
          {{ email }}
        </vs-col>
        <vs-col w="4">
          {{ username }}
        </vs-col>
        <vs-col w="1">
          <button>More Info</button>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";

* {
  padding: 0;
  margin: 0;
}

.userCard {
  background-color: $bg-secondary;
  img.icon {
    border-radius: 0.5;
    height: 3rem;
    width: 3rem;
  }
  button {
    background-color: $sidebarElementColor;
    color: $sidebarTextColor;
    width: 100%;
    height: 2rem;
    padding: 0;
    border-radius: 0.5rem;
    border: none;
  }
  background-color: $bodyElementColor;
  color: $bodyElementTextColor;
  width: 100%;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 5px 10px 10px #333333;
  margin-bottom: 1rem;
}
</style>

<script>
export default {
  props: ["admin", "image", "email", "username"],
};
</script>
