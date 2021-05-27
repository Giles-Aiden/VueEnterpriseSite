<template>
  <div class="center background">
    <div class="contact item">
      <h3><i class="fa fa-user-circle"></i>- David Ray</h3>
      <h3><i class="fa fa-phone-square"></i>- (123)-456-7890</h3>
      <h3><i class="fa fa-envelope"></i>- sales@WFBMlaserengraving.com</h3>
    </div>
    <div class="logo item">
      <img src="@/assets/WFBM Logo.png" alt="" />
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
        <vs-button
          class="button-icon"
          icon
          color="facebook"
          href="http://business.facebook.com/WFBM-Laser-Engraving-102699948274177/"
        >
          <i class="fa fa-facebook-square"></i>
        </vs-button>

        <vs-button class="button-icon" icon color="twitter">
          <i class="fa fa-twitter-square"></i>
          <!--@LaserWfbm-->
        </vs-button>
      </div>

      <div class="icon">
        <vs-button class="button-icon" icon color="twitter">
          <i class="fa fa-twitter-square"></i>
          <!--@LaserWfbm-->
        </vs-button>
      </div>

      <div class="icon">
        <vs-button class="button-icon" icon color="instagram">
          <i class="fa fa-instagram"></i>
          <!--@wfbmlaserengraving-->
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
};
</script>

<style lang="scss" scoped>
$shadow: grey;
$text-color: white;

.center {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .contact {
    text-align: left;
    display: flex;
    flex-direction: column;
    * {
      margin-block: 0.25rem;
    }
  }
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
  align-items: center;
  flex-direction: column;
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
