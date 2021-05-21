<template>
  <div class="home">
    <Navbar title="Custom Laser Engraving and Cutting" />
    <HomePage title="Fundraising" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import HomePage from '@/components/HomePage.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    HomePage,
  },
};
</script>
