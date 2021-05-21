<template>
  <div class="center background">
    <div class="contact item">
      <h3>David Ray- Owner</h3>
      <h3>Phone- (480)-226-6529</h3>
      <h3>Email- Sales@WFBMlaserengraving.com</h3>
    </div>
    <div class="logo item">
      <img src="@/assets/WFBM Logo.png" alt="">
    </div>
    <div class="icons item">
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
</template>

<style lang="scss" scoped>
$shadow: grey;
$text-color: white;
ul {
  background: red;
}

.center {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .background {
    background-image: url('../assets/navBackgroundBottles.png');
    opacity: 20%;

  }
  background-size: cover;
  background-position: center;
}
.item {
  flex: 1 1 0px;
  justify-content: center;
  align-items: center;
  margin-inline: 1rem;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-block: 1rem;
    max-width: 100%;
    min-width: 250px;
    max-height: 100px;
  }
}
.icons {
  display: flex;
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
