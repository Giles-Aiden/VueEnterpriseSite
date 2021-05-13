<template>    
    <div id="types">
        <h2>{{ productAttr.charAt(0).toUpperCase() + productAttr.slice(1) }}:</h2>
        <ul id="typeList">
            <li v-for="(type, index) in types" :key="type"><h4 class="deletion" @click="deleteType({index});">{{type}}</h4></li>
        </ul>
        <vs-button id="addType" v-if="adding" @click="addType()">Add {{ productAttr.charAt(0).toUpperCase() + productAttr.slice(1) }}</vs-button>
        <div class="inputDiv" v-else>
            <vs-input class="typeInput" v-model="attrInput"></vs-input>
            <vs-button @click="addType(attrInput)" class="typeInputButton">+</vs-button>
        </div>
        <br>
    </div>
</template>

<style lang="scss" scoped>
@import "src/assets/styles/_variables.scss";

*{
    padding: 0;
    margin: 0;
}
div#types{
    display: flex;
    justify-content: space-between;
    border: 0.1rem black groove;
    margin: 0.5rem;
    padding: 0.25rem;
    #typeList{
        margin-left: 3rem;
        li{
            :hover{
                text-decoration: red solid line-through;
            }
        }
    }
    .inputDiv{
        display: flex;
        justify-content: flex-start;
        .typeInputButton{
            background-color: $sidebarColor;
            height: 2rem;
            position: relative;
        }
    }
    #addType{
        background-color: $sidebarColor;
        width: 10rem;
        height: 2rem;
        margin-top: 2rem;
    }
    .typeInput{
        width: 10rem;
        height: 2rem;
        margin-left: 6rem;
        margin-top: 2rem;
    }
}

</style>

<script>
export default {
    props: [
        'productAttr',
        'productAttrItems'
    ],
    data: function () {
        return {
            types: this.productAttrItems,
            adding: true,
            attrInput: '',
        };
    },
    methods:{
        deleteType: function(i){
            this.types.splice(i.index,1);
        },
        addType: function(input){
            if(this.adding){
                this.adding = false;
            }else{
                this.adding = true;
                this.types.push(input);
                this.attrInput = '';
            }
        }
    },
}
</script>