<template>
  <div class="Wholesale">
    <Navbar />
    <div class="text">
      <p>
        If you are interested in Wholesale business, please get in contact with
        me using the form below.
      </p>
    </div>
    <div class="form">
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

        <textarea
          id="subject"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>

        <vs-button color="#185ca3" type="submit">Send</vs-button>
      </form>
    </div>
    <VFooter class="footer" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import VFooter from '@/components/VFooter.vue';

export default {
  name: 'Wholesale',
  components: {
    Navbar,
    VFooter,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
.Wholesale {
  .text {
    background: #eee;
    padding: 4rem;
    font-size: 110%;
    p {
      margin: 0;
    }
  }
  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-inline: 5rem;
      width: 1200px;
      max-width: 100vw;
      input,
      textarea {
        height: 5rem;
        font-size: 1.5rem;
        resize: none;
        outline: none;
        border: none;
        border-bottom: 2px solid $shadow;
      }
      textarea {
        padding-top: 1rem;
      }
      button {
        font-size: 1.5rem;
        display: inline-block;
        width: 5rem;
        border: none;
        outline: none;
        margin-left: auto;
      }
    }
  }
}
</style>
