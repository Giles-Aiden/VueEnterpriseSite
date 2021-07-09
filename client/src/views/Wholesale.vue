<template>
  <div class="Wholesale">
    <Navbar />
    <h1>Want to sell custom water bottles at your event?</h1>
    <h2>
      Leave your information and a description of what your looking for below
      and we will get back to you!
    </h2>
    <div id="contact">
      <form
        action="mailto:sales@wfbmlaserengraving.com"
        method="POST"
        enctype="multipart/form-data"
        name="EmailForm"
      >
        <input type="text" id="name" placeholder="Name" />

        <input type="text" id="org" placeholder="Business/Organization" />

        <input type="text" placeholder="Phone Number" />

        <input type="email" id="email" placeholder="Email" />

        <textarea id="subject" cols="30" rows="10" placeholder="Message" />

        <vs-button color="#185ca3" type="submit">Send</vs-button>
      </form>
    </div>
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
  #contact {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    form {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      width: 100%;
      max-width: 1200px;
      input,
      textarea {
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
}
</style>
