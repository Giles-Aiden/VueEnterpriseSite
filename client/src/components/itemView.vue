<template>
    <div class="itemViewContainer">
        <div class="itemView">
            <i class="closeButton fa fa-close" @click="close"></i>
            <div class="imgContainer">
                <img :src="img" :alt="imgAlt">
            </div>
            <div class="contentContainer">
                <h1>{{itemName}}</h1>
                <p>{{itemBody}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'itemView',
    props: {
        itemName: String,
        itemBody: String,
        img: String,
        imgAlt: String,
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
    .itemViewContainer {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        padding: 2rem;
        background: rgba(0,0,0,.7);
        .itemView {
            background: white;
            position: relative;
            height: 100%;
            border-radius: 2rem;
            padding-block: auto;
            column-count: 2;
            column-fill: balance;
            align-items: center;
            vertical-align: middle
        }
        .closeButton {
            font-size: 2rem;
            position: absolute;
            top: 0;
            left: 0;
            margin: 1.5rem;
            cursor: pointer;
        }
    }
</style>