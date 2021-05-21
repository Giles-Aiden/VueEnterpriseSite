<template>
  <div class="center background">
    <div>
      <h1>Contact Information</h1>
      <h3>David Ray- Owner</h3>
      <h3>Phone- (480)-226-6529</h3>
      <h3>Email- Sales@WFBMlaserengraving.com</h3>
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
        <vs-button class="button-icon" icon color="twitter">
          <i class="fa fa-twitter-square"></i>
          <!--@LaserWfbm-->
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
$shadow: #113f70;
$text-color: white;

.center {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .contact {
    text-align: left;
  }
  background-size: cover;
  background-position: center;
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
