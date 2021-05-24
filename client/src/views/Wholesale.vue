<template>
  <div class="Wholesale">
    <Navbar/>
    <form action="mailto:sales@wfbmlaserengraving.com"
      method="POST"
      enctype="multipart/form-data"
      name="EmailForm">

        <input type="text" id="name" placeholder="Name">
        
        <input type="text" id="org" placeholder="Business/Organization">
        
        <input type="text" placeholder="Phone Number">
        
        <input type="email" id="email" placeholder="Email">
        
        <textarea id="subject" cols="30" rows="10" placeholder="Message"></textarea>

        <vs-button color="#185ca3" type="submit">Send</vs-button>
    </form> 
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Wholesale',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
  .Wholesale {
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      max-width: 1200px;
      input, textarea {
        height: 5rem;
        font-size: 1.5rem;
        resize: none;
        outline: none;
        border: none;
        border-bottom: 2px solid $shadow;
      }
      button {
        font-size: 1.5rem;
        display: inline-block;
        width: 5rem;
        border: none;
        outline: none;
      }
    }
  }
</style>