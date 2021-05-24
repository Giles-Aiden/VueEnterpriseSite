<template>
  <div class="Cart">
    <Navbar title="Cart" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Cart',
  components: {
    Navbar,
  },
};
</script>
