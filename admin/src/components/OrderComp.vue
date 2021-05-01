<template>
    <div class="OrderCard">
        <p>Email: <span class="data">{{user.email}}</span></p>
        <p>Name: <span class="data">{{user.name}} {{user.lastName}}</span></p>
        <p>Total Cost: $<span class="data">{{getCorrectPrice(totalCost)}}</span></p>
        <p>Items Purchased:</p>
        <ul>
            <li class="data" v-for="item in items" :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        totalCost: Number,
        items: Array,
        user: Object,
        orderID: Number,
    },
    methods: {
        getCorrectPrice(x) {
            return x / 100;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";
    .OrderCard {
        margin-left: 4rem;
        padding: 0.25rem 1rem;
        background: $bodyElementColor;
        color: $bodyElementTextColor;
        border-radius: 1rem;
        text-align: left;
        .data {
            font-weight: bold;
        }
    }
</style>
