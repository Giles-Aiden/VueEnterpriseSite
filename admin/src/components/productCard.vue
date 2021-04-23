<template>
    <div class="productCard">
        <img height="300rem" :src="require(`../assets/${productImage}`)" />
        <h1>{{ productName }}</h1>
        <br>
        <div id="colors">
            <h2>Colors:</h2>
            <div class="color" v-for="color in colors" :key='color'>
                <div :style="{'background-color': color }" style="width: 100%; height: 100%"></div>
                <div class="delete" :id="{color}">X</div>
            </div>
            <div class="color"><h2>+</h2></div>
        </div>
        <br>
        <div id="lidType">
            <h2>Lid Types:</h2>
            <ul id="typeList">
                <li v-for="type in types" :key="type"><h4>{{type}}</h4></li>
            </ul>
            <vs-button id="addType">Add Lid Type</vs-button>
        </div>
        <br>
        <div id="size">
            <h2>Sizes:</h2>
            <pre>      </pre>
            <ul id="sizeList">
                <li v-for="size in sizes" :key="size"><h4>{{size}}</h4></li>
            </ul>
            <vs-button id="addSize">Add Size</vs-button>
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
    width: 31%;
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    text-align: center;
    border-radius: 0.5rem;
    display: inline-block;
    div#colors{
        width: 100%;
        display: flex;
        justify-content:start;
        div.color{
            width: 2rem;
            height: 2rem;
            border: black 0.1rem solid;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            h2{
                width: 100%;
                height: 100%;
            }
            :hover{
                background-color: black;
            }
        }
    }
    div.delete{
        position: relative;
        top: -2.5rem;
        left: 1.25rem;
        background-color: red;
        border: black 0.001rem solid;
        border-radius: 50%;
        width: 1.25rem;
        height: 1.25rem;
    }
    div#lidType{
        display: flex;
        justify-content: start;
        #typeList{
            margin-left: 3rem;
        }
        #addType{
            background-color: $sidebarColor;
            width: 10rem;
            height: 2rem;
            margin-left: 6rem;
            margin-top: 2rem;
        }
    }
        div#size{
        display: flex;
        justify-content: start;
        #sizeList{
            margin-left: 3rem;
        }
        #addSize{
            background-color: $sidebarColor;
            width: 10rem;
            height: 2rem;
            margin-left: 6rem;
            margin-top: 2rem;
        }
    }
}

</style>

<script>
export default {
    props: [
        'productName',
        'productImage',
    ],
    data: function () {
        return {
            flaskImg: require('@/assets/flask.jpg'),
            colors: [
                '#ff0000',
                '#00ff00',
                '#0000ff',
                '#ff00ff',
            ],
            types: [
                'lid1',
                'lid2',
                'lid3'
            ],
            sizes: [
                '24oz',
                '40oz'
            ],
        };
    }
}
</script>