<template>
      <div class="shadow">
        <vue-typed-js :strings="changingTitle" :typeSpeed="100" :loop="true">
            <h1 class="typing"></h1>
        </vue-typed-js>
        <h1>Laser Engraving</h1>
      </div>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)
export default {
    name: 'titleCard',
    props: {
        titleCard: String,
    },
    data() {
        return {
            changingTitle: ['Custom','Professional', 'Precise'],
        }
    },
    methods: {
        pushTitle() {
            this.changingTitle.push('newTitle');
            console.log(this.changingTitle);
        }
    }
}
</script>

<style lang="scss" scoped>
    $bg-main: #185ca3;
    $bg-secondary: #2486f0;
    $text-color: #fefefe;
    .shadow {
        /*box-shadow: 18px $bg-secondary;*/
        box-shadow: 5px 10px 18px $bg-secondary;
        background: transparent;
        border-radius: 2rem;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        h1 {
            padding: 0 .25rem;
        }
        .title {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            overflow-y: scroll;
            height: 3rem;
        }
    }

</style>