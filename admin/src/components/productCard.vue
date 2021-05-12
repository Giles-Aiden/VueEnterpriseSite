<template>
    <div class="productCard">
        <img height="300rem" :src="require(`../assets/${productImage}`)" />
        <h1>{{ productName }}</h1>
        <br>
        <div id="colors">
            <h2>Colors:</h2>
            <div class="color" v-for="(color, index) in colors" :key='color'>
                <div :style="{'background-color': color }" style="width: 100%; height: 100%"></div>
                <div class="delete" @click="deleteColor({index})">X</div>
            </div>
            <div class="color">
                <form v-if="this.showing" @click="colorMenu();">   
                    <h2>+</h2>
                </form>      
                <form v-else>
                    <input type="color" :id="productName">
                    <br>
                    <vs-button type="button" @click="addColor({productName}); colorMenu();" id="add">Add</vs-button>
                </form>
            </div>
        </div>
        <br>
        <div id="lidType">
            <h2>Lid Types:</h2>
            <ul id="typeList">
                <li v-for="(type, index) in types" :key="type"><h4 class="deletion" @click="deleteType({index});">{{type}}</h4></li>
            </ul>
            <vs-button id="addType">Add Lid Type</vs-button>
        </div>
        <br>
        <div id="size">
            <h2>Sizes:</h2>
            <pre>      </pre>
            <ul id="sizeList">
                <li v-for="(size, index) in sizes" :key="size"><h4 @click="deleteSize({index})">{{size}}</h4></li>
            </ul>
            <vs-button id="addSize">Add Size</vs-button>
        </div>
        <br>
        <div id="menu">
            <vs-button class="menuButton">Delete</vs-button>
            <vs-button class="menuButton">Save</vs-button>
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
        /* overflow-x: auto; */
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
            form{
                width: 100%;
                input[type="color"] {
                    -webkit-appearance: none;
                    border: none;
                    width: 2rem;
                    height: 2rem;
                }
                input[type="color"]::-webkit-color-swatch-wrapper {
                    padding: 0;
                }
                input[type="color"]::-webkit-color-swatch {
                    border: none;
                }
                #add{
                    position: relative;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 1rem;
                    background-color: $sidebarColor;
                    color: white;
                }
            }
        }
        input.color{
            position: relative;
            top: -2rem;
            left: -2rem;
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
            li{
                :hover{
                    text-decoration: red solid line-through;
                }
            }
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
            li{
                :hover{
                    text-decoration: red solid line-through;
                }
            }
        }
        #addSize{
            background-color: $sidebarColor;
            width: 10rem;
            height: 2rem;
            margin-left: 6rem;
            margin-top: 2rem;
        }
    }
    div#menu{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        .menuButton{
            background-color: $sidebarColor;
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
            showing: true,
        };
    },
    methods:{
        deleteColor: function(i){
            console.log(this.colors);
            this.colors.splice(i.index,1);
        },
        addColor: function(picker){
            if(this.colors.indexOf(document.getElementById(picker.productName).value) == -1){
                this.colors.push(document.getElementById(picker.productName).value);
            }
        },
        colorMenu: function(){
            if(this.showing){
                this.showing = false;
            }else{
                this.showing = true;
            }
        },
        deleteType: function(i){
            console.log(this.types);
            this.types.splice(i.index,1);
        },
        deleteSize: function(i){
            console.log(this.sizes);
            this.sizes.splice(i.index,1);
        }
    },
}
</script>