<template>
    <nav>
        <input type="checkbox">
        <ul class="navBar">
            <router-link to="/" class="link" tag="li"><li><p>Home</p></li></router-link>
            <router-link to="/about" class="link" tag="li"><li><p>About</p></li></router-link>
            <router-link to="/store" class="link" tag="li"><li><p>Store</p></li></router-link>
            <router-link to="/fundraising" class="link" tag="li"><li><p>Fundraising Opportunities</p></li></router-link>
            <router-link to="/wholesale" class="link" tag="li"><li><p>Marketing and Business</p></li></router-link>
            <router-link to="/cart" class="link" tag="li"><i class="fa fa-shopping-cart fa-2x"></i></router-link>
        </ul>
        <h1 class="title">{{ title }}</h1>
        <div class="icons">
            <i class="fa fa-bars fa-2x bars hidden"></i>
            <i class="fa fa-close fa-2x close hidden"></i>
            <i class="cartIcon fa fa-shopping-cart fa-2x hidden"></i>
        </div>
        <ul class="dropdownNav">
            <router-link to="/" class="link" tag="li"><li><p>Home</p></li></router-link>
            <router-link to="/about" class="link" tag="li"><li><p>About</p></li></router-link>
            <router-link to="/store" class="link" tag="li"><li><p>Store</p></li></router-link>
            <router-link to="/fundraising" class="link" tag="li"><li><p>Fundraising Opportunities</p></li></router-link>
            <router-link to="/wholesale" class="link" tag="li"><li><p>Marketing and Business</p></li></router-link>
        </ul>

    </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        title: String,
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';
    nav {
        background-image: url("../assets/navBackgroundBottles.png");
        background-repeat: no-repeat;
        background-position: center center;
        backdrop-filter: blur(100px);
        background-size: 100%;
        color: $navTextColor;
        font-size: 2vh;
        height: calc(30vh + 5px);
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        .title {
            z-index: 0;
            margin: auto 5rem;
            font-size: 250%;
        }
        .navBar {
            margin: 0;
            padding: 0;
            height: 5vh;
            list-style-type: none;
            display: flex;
            justify-content: space-around;
            .link {
                background: $navBackground;
                cursor: pointer;
                width: 100%;
                height:  100%;
                font-weight: bold;
                display: grid;
                place-items: center;
                &:hover {
                    background: rgba(255,255,255,.2);
                }
                li {
                    color: $navTextColor;
                    p {
                        color: $navTextColor;
                        text-decoration: none;
                        margin: 0;
                        padding: 0 1rem;
                    }
                }
            }
        }
        .close {
            opacity: 0;
        }
    }
    .dropdownNav, .dropdownNav li {
        display: none;
    }
    .dropdownNav {
        transition: transform 400ms ease-in-out;
        transform-origin: top;
        display: block;
        position: absolute;
        width: 100%;
        top: 5vh;
        margin: 0;
        list-style-type: none;
        padding: 0;
        li {
            display: grid;
            place-items: center;
            cursor: pointer;
            width: 100%;
            height: 100%;
            background: $navBackground;
            &:hover {
                background: rgba(100,100,100,0.9);
            }
            p {
                transition: opacity 100ms ease-in;
                opacity: 0;
            }
        }
        transform: scaleY(0);
    }
    input[type=checkbox]:checked ~ .dropdownNav {
        transform: scaleY(1);
        li p {
            transition: opacity 500ms ease-in;
            opacity: 1;
        }
    }
    input[type=checkbox] {
        display: none;
        z-index: 100;
    }
    
    @media screen and (min-width: 955px) {
        .dropdownNav {
            visibility: hidden;
            display: none;
        }
        .hidden {
            display: none;
            visibility: hidden;
        }
    }
    @media screen and (max-width: 955px) {
        nav {
            height: calc(36vh + 5px);
        }
        nav .title {
            font-size: 200%;
            margin: auto 3rem;
            position: relative;
            bottom: 1.5rem;
        }
        nav .navBar {
            display: none;
        }
        input[type=checkbox] {
            display: block;
            height: 5vh;
            width: 5vh;
            border: none;
            opacity: 0;
            cursor: pointer;
            &:checked ~ .icons .close {
                opacity: 1;
                transition: opacity 500ms ease-in;
            }
            &:checked ~ .icons .bars {
                opacity: 0;
                transition: opacity 0ms ease-in;
            }
            & ~ .icons .close {
                transition: opacity 0ms ease-in;
            }
            & ~ .icons .bars {
                transition: opacity 500ms ease-in;
            }
        }
        i {
            z-index: 1;
            display: grid;
            place-items: center;
            visibility: visible;
            position: absolute;
            width: 5vh;
            height: 5vh;
            top: 0;
            margin: 0.2rem;
            cursor: pointer;
        }
        .cartIcon {
            right: 0;
        }
    }
    @media screen and (max-width: 690px) {
        nav {
            background-size: auto 100%;
        }
    }
    @media screen and (max-width: 400px) {
        nav .title {
            font-size: 150%;
            margin: auto 2rem;
        }
    }
</style>