<template>
    <nav>
        <ul>
            <li>yes</li>
            <li>yes</li>
            <li>yes</li>
            <li>yes</li>
        </ul>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "Navbar",
    methods: {
        
    }
})
</script>

<style lang="scss" scoped>
    $navBackground: "primary";

    nav {
        margin: 1rem 0 0 0;
        background-color: $navBackground;
        position: absolute;
        top: -1rem;
        left: 0;
        width: 100vw;
        ul {
            height: 3rem;
            list-style-type: none;
            display: flex;
            place-items: center;
            justify-content: space-around;
            margin: 0;
            padding: 0;
            li {
                display: grid;
                place-items: center;
                width: 100%;
                height: 100%;


                &::after {
                    content: '';
                    background: rgba(0,0,0,.2);
                    width: 25%;
                    height: 5px;
                    position: absolute;
                    bottom: 0;

                    transform: scaleY(0);

                    transition: transform 50ms ease-out;
                    
                    transform-origin: right;
                }
                &:hover {
                    background: rgba(0,0,0,.1);
                    &::after {
                    transition: transform 200ms ease-in;
                        transform-origin: left;
                        transform: scaleY(1);
                        transform: scaleX(1);
                    }
                }
            }
        }
    }
</style>