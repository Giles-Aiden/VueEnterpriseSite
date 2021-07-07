<template>
  <nav>
    <ul class="navbar">
      <router-link to="/" class="link" tag="li"><p>Home</p></router-link>
      <router-link to="/about" class="link" tag="li"><p>About</p></router-link>
      <router-link to="/store" class="link" tag="li"><p>Store</p></router-link>
      <router-link to="/fundraising" class="link" tag="li"
        ><p>Fundraising Opportunities</p></router-link
      >
      <router-link to="/wholesale" class="link" tag="li"
        ><p>Marketing and Business</p></router-link
      >
    </ul>
    <input type="checkbox" id="checkbox_id" />
    <div class="icons">
      <label for="checkbox_id"><i class="fa fa-bars fa-2x bars"></i></label>
      <label for="checkbox_id"><i class="fa fa-close fa-2x close"></i></label>
    </div>
    <img class="logo" src="../assets/WFBM Logo.png" alt="" />
    <ul class="dropdown">
      <router-link to="/" class="link" tag="li"><p>Home</p></router-link>
      <router-link to="/about" class="link" tag="li"><p>About</p></router-link>
      <router-link to="/store" class="link" tag="li"><p>Store</p></router-link>
      <router-link to="/fundraising" class="link" tag="li"
        ><p>Fundraising Opportunities</p></router-link
      >
      <router-link to="/wholesale" class="link" tag="li"
        ><p>Marketing and Business</p></router-link
      >
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
nav {
  height: 24rem;
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='408' height='49' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222222' stroke-width='12.7' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
  color: $navTextColor;
  .logo {
    filter: grayscale(1) invert(1);
    max-height: calc(100% - 5rem);
    max-width: 100%;
    margin-inline: auto;
  }
  .navbar {
    z-index: 100;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    li {
      width: 100%;
      display: grid;
      place-items: center;
      cursor: pointer;
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
  .dropdown {
    display: none;

    position: absolute;
    top: 4rem;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    background: rgba(0, 0, 0, 0.9);

    transition: 250ms transform 250ms ease-in;
    transform-origin: top;

    transform: scaleY(0);
    li {
      height: 4rem;
      display: grid;
      place-items: center;
      cursor: pointer;

      transition: opacity 200ms linear;
      opacity: 0;
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
      p {
        margin: 0;
        width: 100%;
      }
    }
  }
  .icons {
    display: none;
  }
  //Hide default browser checkbox
  input[type='checkbox'] {
    display: none;
    & ~ .icons {
      .fa {
        position: absolute;
        top: 0;
        left: 0;
        height: 4rem;
        width: 4rem;
        font-size: 2.5rem;
        display: grid;
        place-items: center;
      }
      .bars {
        transition: opacity 500ms linear;
      }
      .close {
        opacity: 0;
        transition: opacity 0ms linear;
      }
    }
    &:checked ~ .icons {
      .bars {
        opacity: 0;
        transition: opacity 0ms linear;
      }
      .close {
        opacity: 1;
        transition: opacity 500ms linear;
      }
    }
  }

  input[type='checkbox']:checked ~ .dropdown {
    transition: transform 250ms ease-in;
    transform: scaleY(1);
    li {
      transition: 250ms opacity 200ms linear;
      opacity: 1;
    }
  }
}
@media screen and (max-width: 955px) {
  .navbar {
    display: none;
    visibility: hidden;
  }
  nav .dropdown {
    display: block;
  }
  nav .icons {
    display: block;
  }
}
</style>
