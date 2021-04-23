<template>
    <div class="productCard">
        <img :src="flaskImg" height="500rem">
        <h1>Hydro Flask</h1>
        <div id="colors">
            <div class="color" v-for="color in colors" :key='color' :style="{'background-color': color }"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";

*{
    padding: 0;
    margin: 0;
}

div.productCard{
    background-color: $bodyElementColor;
    color: $bodyElementTextColor;
    width: 33%;
    padding: 0.3rem;
    text-align: center;
    border-radius: 0.5rem;
    div#colors{
        width: 100%;
        display: flex;
        justify-content:start;
        div.color{
            width: 2rem;
            height: 2rem;
            border: black 2px solid;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }
    }
}

</style>

<script>
export default {
    props: [
/*         'name',
        'image',
        'colors',
        'lidType' */
    ],
    data: function () {
        return {
            flaskImg: require('@/assets/flask.jpg'),
            colors: [
                '#ff0000',
                '#ff0000',
                '#ff0000'
            ],
        };
    }
}
</script>