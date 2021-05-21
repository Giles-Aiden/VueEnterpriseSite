<template>
  <div class="center background">
    <div>
      <h1>Contact Information</h1>
      <h3>David Ray- Owner</h3>
      <h3>Phone- (480)-226-6529</h3>
      <h3>Email- Sales@WFBMlaserengraving.com</h3>
    </div>
    <div></div>
    <div>
      <div>
        <h1>Social Media</h1>
      </div>

      <div class="icons">
        <vs-button
          class="button-icon"
          icon
          color="facebook"
          href="http://business.facebook.com/WFBM-Laser-Engraving-102699948274177/"
        >
          <i class="fa fa-facebook-square"></i>
        </vs-button>

        <div class="icon">
          <vs-button class="button-icon" icon color="twitter">
            <i class="fa fa-twitter-square"></i>
            <!--@LaserWfbm-->
          </vs-button>
        </div>

        <vs-button class="button-icon" icon color="linkedin">
          <i class="fa fa-linkedin-square"></i>
        </vs-button>

        <div class="icon">
          <vs-button class="button-icon" icon color="instagram">
            <i class="fa fa-instagram"></i>
            <!--@wfbmlaserengraving-->
          </vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_variables.scss';
ul {
  background: red;
}

.center {
  display: flex;
  justify-content: space-around;
  .background {
    background-image: url('../assets/navBackgroundBottles.png');
    opacity: 20%;
  }
  background-size: cover;
  background-position: center;
}

.icons {
  display: flex;
  float: right;
  flex-wrap: wrap;
  .icon {
    display: flex;
  }
}

.fa {
  padding: 0.5rem;
}

.button-icon {
  max-height: 2rem;
}

.center {
  background-color: $shadow;
  color: $text-color;
}
</style>
