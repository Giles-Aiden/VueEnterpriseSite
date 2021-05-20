<template>
  <div class="card">
    <img :src="img" :alt="imgAlt" />
    <div class="info">
      <h1 class="title">{{ itemName }}</h1>
      <p>{{ itemBody }}</p>
      <button>Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopItem',
  props: {
    itemName: String,
    itemBody: String,
    img: String,
    imgAlt: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
<<<<<<< HEAD
* {
  box-sizing: border-box;
}

.card {
  width: 280px;
  height: 360px;
  border-radius: 15px;
  margin-block: 0.5rem;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
}
.card:hover:before {
  opacity: 1;
}
.card:hover .info {
  opacity: 1;
  transform: translateY(0px);
  p {
    opacity: 1;
=======
$bg-main: #185CA3;
$bg-secondary: #6CACF0;
$shadow: #113F70;

.button-color {
  background-color: $bg-main;
  box-shadow: $shadow;
}
.shopItem {
  margin-top: 1em;
  .itemContain {
    width: 20rem;
    height: auto;
    border-radius: 2.5em;
    box-shadow: 20px 20px 30px 10px grey;
>>>>>>> 01c1417 (Update Store.vue)
  }
  button {
    opacity: 1;
  }
}
.card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  transition: 0.5s;
  opacity: 0;
}
.card img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
}
.card .info {
  position: relative;
  z-index: 3;
  color: white;
  transform: translateY(30px);
  transition: 0.5s;
  .title {
    opacity: 1 !important;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  p {
    opacity: 0;
    transition: 0.5s;
  }
  button {
    opacity: 0;
  }
}
.card .info h1 {
  margin: 0px;
}
.card .info p {
  letter-spacing: 1px;
  font-size: 15px;
  margin-top: 8px;
}
.card .info button {
  padding: 0.6rem;
  outline: none;
  border: none;
  border-radius: 3px;
  background: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s ease;
}
.card .info button:hover {
  background: dodgerblue;
  color: white;
}
</style>
