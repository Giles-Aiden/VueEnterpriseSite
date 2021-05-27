<template>
  <tr>
    <td>
      <p>
        <span class="data">{{ user.date }}</span>
      </p>
    </td>
    <td>
      <p>
        <span class="data">{{ user.email }}</span>
      </p>
    </td>
    <td>
      <p>
        <span class="data">{{ user.firstName }} {{ user.lastName }}</span>
      </p>
    </td>
    <td>
      <p>
        <span class="data">${{ getCorrectPrice(user.cost) }}</span>
      </p>
    </td>
    <td>
      <p>
        <span class="data">{{ user.items.length }}</span>
      </p>
    </td>
    <td>
      <p class="data" v-for="item in user.items" :key="item">{{ item }}</p>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  methods: {
    getCorrectPrice(x) {
      return x / 100;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";
* {
  padding: 0;
  margin: 0;
}
tr {
  width: 100%;
  td {
    width: 16%;
    border: white 0.1rem solid;
    color: $bodyElementColor;
    text-align: center;
    vertical-align: middle;
    p {
      font-size: calc(0.7vw + 0.7vh);
    }
  }
}
</style>
