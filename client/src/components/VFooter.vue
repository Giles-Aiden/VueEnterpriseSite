<template>
  <div class="center background">
    <div class="contact item">
      <h3 class="ctitle" style="text-align: center">Contact Information</h3>
      <h5><i class="cname fa fa-user"></i> - David Ray</h5>
      <h5><i class="cphone fa fa-phone"></i> - (480)-226-6529</h5>
      <h5>
        <i class="cmail fa fa-envelope"></i> - Sales@WFBMlaserengraving.com
      </h5>
    </div>
    <div class="logo item">
      <img src="@/assets/WFBM Logo.png" alt="" />
    </div>
    <div class="icons item">
      <div class="icon">
        <vs-button class="button-icon" icon color="twitter">
          <i class="fa fa-twitter-square"></i>
          <!--@LaserWfbm-->
        </vs-button>

        <vs-button class="button-icon" icon color="linkedin">
          <i class="fa fa-linkedin-square"></i>
        </vs-button>

        <vs-button class="button-icon" icon color="linkedin">
          <i class="fa fa-linkedin-square"></i>
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VFooter',
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

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
    .ctitle {
      font-size: 1.4em;
    }
    .cname,
    .cphone,
    .cmail {
      margin-left: 2vw;
      white-space: nowrap;
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
    filter: grayscale(1) invert(1);
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
