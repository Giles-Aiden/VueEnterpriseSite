<template>
  <div class="Fundraising">
    <Navbar />
    <!-- Main Content -->
    <!-- Will cover the fundraising campaign and all of its necessary details -->
    <div id="contentArea">
      <h2>Fundraising Information</h2>
      <div id="info">
        <div>
          <h4>How does it work?</h4>
          <hr />
          <p>
            Your organization can earn money while selling a great product that
            is popular, customizable, and environmentally friendly.
          </p>
          <h4>Sales &#38; Delivery</h4>
          <hr />
          <p>
            A 2-3 week sales window is recommended for your fundraiser but you
            are free to set a longer or shorter time frame.
          </p>
          <h4>Why your organization should participate</h4>
          <hr />
          <p>
            By participating in a WFBM laser engraving fundraiser, your
            organization can earn money in a fun and effective way. Based on our
            recommended sales pricing of $25 for the 24 oz and $40 for the 40
            oz, your organization will earn $5 or $10 respectively per bottle.
          </p>
        </div>
      </div>
    </div>

    <div id="fundraising" data-aos="fade-up" data-aos-duration="1000">
      <div class="container">
        <div class="card">
          <h2>Our Fundraisers</h2>
          <p>
            Running a fundraiser through WFBM Laser Engraving is a win-win! Help
            your organization in a fun and environmentally friendly way! Reduce
            plastic waste and raise money by buying wholesale for your
            fundraisers! Interested? Have questions? Fill out the form below to
            get in touch!
          </p>
        </div>
        <div class="card">
          <img :src="require('@/assets/plasticWaterBottles.jpg')" />
        </div>
      </div>
    </div>

    <div class="reviewsArea" data-aos="fade-up" data-aos-duration="1000">
      <h2>Fundraising Reviews</h2>
      <div id="info">
        <div>
          <vs-avatar class="avatar-img">
            <img :src="require('@/assets/Customer(1).jpeg')" />
          </vs-avatar>
          <h4>Sallie H.</h4>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <hr />
          <p>
            "I love the customizable aspect of this business! It allows creative
            freedom!"
          </p>
        </div>
        <div>
          <vs-avatar class="avatar-img">
            <img :src="require('@/assets/Customer(2).jpeg')" />
          </vs-avatar>
          <h4>Penelope J.</h4>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <hr />
          <p>"Quality service and product!"</p>
        </div>
        <div>
          <vs-avatar class="avatar-img">
            <img :src="require('@/assets/Customer(3).jpeg')" />
          </vs-avatar>
          <h4>Marie R.</h4>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <hr />
          <p>
            "Great product! I love the options that I am given! This is such a
            great fundraising opportunity"
          </p>
        </div>
        <div>
          <vs-avatar class="avatar-img">
            <img :src="require('../assets/Customer(4).jpeg')" />
          </vs-avatar>
          <h4>Emma T.</h4>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <hr />
          <p>"An awesome fundraising idea! Fantastic service and product!"</p>
        </div>
      </div>
    </div>
    <h1>Want to sell custom water bottles at your event?</h1>
    <h2>
      Leave your information and a description of what your looking for below
      and we will get back to you!
    </h2>
    <div id="contact">
      <form :action="formAction"
        method="POST"
        enctype="multipart/form-data"
        name="EmailForm"
      >
        <input type="text" id="name" placeholder="Name" v-model="formName" />

        <input
          type="text"
          id="org"
          placeholder="Business/Organization"
          v-model="formOrg"
        />

        <input type="text" placeholder="Phone Number" v-model="formNumber" />

        <input
          type="email"
          id="email"
          placeholder="Email"
          v-model="formEmail"
        />

        <textarea
          id="subject"
          cols="30"
          rows="10"
          placeholder="Message"
          v-model="formBody"
        ></textarea>

        <vs-button color="#185ca3" type="submit">Send</vs-button>
      </form>
    </div>
  </div>
</template>

<!-- functiony things -->
<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Fundraising',
  components: {
    Navbar,
  },
  data() {
    return {
      //slideIndex: 1,
      //picked: 1,
      //imgNum: 1,
      formName: '',
      formOrg: '',
      formNumber: '',
      formEmail: '',
      formBody: '',
    };
  },
  computed: {
    formAction: function () {
      return `mailto:sales@wfbmlaserengraving.com
        ?subject=WFBM user ${this.formName} requeted help from your website!
        &body=
        Name: ${this.formName}
        %0D%0A
        Company/Buisness: ${this.formOrg}
        %0D%0A
        Phone Number: ${this.formNumber}
        %0D%0A
        Email: ${this.formEmail}
        %0D%0A
        ${this.formBody}
        `
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

#contact {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 80%;
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
.card {
  width: 30rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px $shadow;
  border-radius: 1rem;
  margin-block: 3rem;
  overflow: hidden;
  background: white;
  color: black;
  p {
    text-align: left;
    padding-inline: 2.5rem;
    margin-bottom: 6rem;
    &::first-letter {
      padding-left: 2rem;
    }
  }
  img {
    max-width: 100%;
  }
  button {
    color: $text-color;
    padding: 0.25em 0.5em;
    margin: 1.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
#fundraising {
  background-image: url('../assets/navBackgroundBottles.png');
  background-repeat: no-repeat;
  background-position: center;
  backdrop-filter: blur(100px);
  background-size: cover;
  /*background-color: #999;*/
  font-size: 2vh;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0;
}

.reviewFundraising {
  display: flex;
  float: right;
}

.avatar-img {
  padding: 0 !important;
  min-width: 3rem;
  min-height: 3rem;
}

hr {
  border: solid #6cacf0 0.05em;
  border-radius: 1000000em;
  margin: 0em 2em;
  box-shadow: black 0em 0.1em 0.1em;
}

#imageArea {
  display: flex;
  flex-direction: row;
  border-radius: 1em;
  margin: 0.5em 5em;
  padding: 0.5em;
}
#carousel img {
  width: 50%;
  max-width: 50em;
  border: solid black 1px;
  z-index: -1;
}
@media (max-width: 800px) {
  #imageArea {
    margin: 0.5em 5em;
    padding: 0.5em;
    .arrows {
      padding: 1.5em;
    }
  }
  #carousel img {
    width: 100%;
  }
}
@media (min-width: 800px) {
  .arrows:hover {
    transition: 0.2s;
    transform: translateY(-0.33em);
    box-shadow: black 0em 0.33em;
    filter: opacity(0.95);
  }
}

#contentArea {
  margin: 3em;
  h2 {
    color: #113f70;
    text-shadow: black 0.03em 0.03em 0.05em;
    font-size: 2em;
  }
  #info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    div {
      box-shadow: black 0.1em 0.3em 0.5em 0.1em;
      border-radius: 1em;
      padding: 1em;
      margin: 0.5em 1em;
      flex: 1 1 30em;
      background-color: #185ca3;
      color: white;
      line-height: 2em;
      text-align: left;
      text-indent: 2.5em;
      max-width: 50em;
      h4 {
        font-size: 1.5em;
        text-shadow: #113f70 0.05em 0.05em 0.05em;
      }
      ul {
        list-style: visible;
        text-indent: 0em;
      }
    }
  }
}

@media (max-width: 800px) {
  #contentArea {
    margin: 0em;
    padding: 1em 0em;
    #info {
      flex-direction: column;
      padding: 0em;
    }
  }
}

.reviewsArea {
  margin: 3em;

  h2 {
    color: #113f70;
    text-shadow: black 0.03em 0.03em 0.05em;
    font-size: 2em;
  }
  #info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    div {
      box-shadow: black 0.1em 0.3em 0.5em 0.1em;
      border-radius: 1em;
      padding: 1em;
      margin: 0.5em 1em;
      flex: 1 1 30em;
      background-color: #185ca3;
      color: white;
      line-height: 2em;
      text-align: left;
      text-indent: 2.5em;
      max-width: 50em;
      h4 {
        font-size: 1.5em;
        text-shadow: #113f70 0.05em 0.05em 0.05em;
      }
      ul {
        list-style: visible;
        text-indent: 0em;
      }
    }
  }
}

@media (max-width: 800px) {
  .reviewsArea {
    margin: 0em;
    padding: 1em 0em;
    #info {
      flex-direction: column;
      padding: 0em;
    }
  }
}
</style>
