<template>
  <div id="types">
    <h2 @click="deleteAttr()" id="attrName">{{ name }}:</h2>
    <ul id="typeList">
      <li
        v-for="(type, index) in attrs"
        :key="index"
        style="liststyletype: none"
      >
        <h4
          class="deletion"
          @click="deleteType({ index })"
          v-if="attrs[index].priceUp != 0"
        >
          {{ attrs[index].name }} (+${{ attrs[index].upcharge }})
        </h4>
        <h4 class="deletion" @click="deleteType({ index })" v-else>
          {{ attrs[index].name }}
        </h4>
      </li>
    </ul>
    <vs-button id="addType" v-if="adding" @click="addType()"> Add </vs-button>
    <div class="inputDiv" v-else>
      <input class="typeInput" v-model="attrInput" placeholder="Name" />
      <input
        class="priceInput"
        type="number"
        v-model="priceInput"
        placeholder="Markup"
      />
      <vs-button
        @click="addType(attrInput, priceInput)"
        class="typeInputButton"
      >
        +
      </vs-button>
    </div>
    <br />
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/_variables.scss';

* {
  padding: 0;
  margin: 0;
}
#attrName:hover {
  text-decoration: red solid line-through;
}
div#types {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.1rem black groove;
  margin: 0.5rem;
  padding: 0.25rem;
  h2 {
    font-size: calc(1vw + 1vh);
  }
  #typeList {
    flex-grow: 1;
    margin-left: 3rem;
    list-style-type: none;
    li {
      font-size: calc(0.7vw + 0.7vh);
      &:hover {
        text-decoration: red solid line-through;
      }
    }
  }
  .inputDiv {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    .typeInputButton {
      background-color: $shadow;
      height: 2rem;
      position: relative;
      top: 2rem;
      &:hover {
        box-shadow: 0 0.25rem 0.5rem $shadow;
      }
    }
  }
  #addType {
    background-color: $shadow;
    width: 30%;
    height: 2rem;
    font-size: calc(0.7vw + 0.7vh);
    &:hover {
      box-shadow: 0 0.25rem 0.5rem $shadow;
    }
  }
}
.inputDiv {
  display: flex;
  justify-content: space-evenly;
  width: 30%;
  .typeInputButton {
    background-color: $sidebarColor;
    width: 2rem;
    height: 2rem;
    /*       position: relative;
      top: 2rem;
      left: -2rem; */
    position: absolute;
  }
}
#addType {
  background-color: $sidebarColor;
  width: 10rem;
  height: 2rem;
  margin-top: 2rem;
}
.typeInput,
.priceInput {
  width: 50%;
  height: 2rem;
  margin-right: 0.1rem;
  border-radius: 12px;
  border: none;
  margin-top: 2rem;
}
</style>

<script>
export default {
  props: ['attrs', 'name'],
  data: function () {
    return {
      adding: true,
      attrInput: '',
      priceInput: '',
    };
  },
  methods: {
    deleteType: function (i) {
      this.attrs.splice(i.index, 1);
    },
    deleteAttr: function () {
      this.$emit('delete', this.name);
    },
    addType: function (attr, price) {
      if (this.adding) {
        this.adding = false;
      } else if (attr !== '' && this.attrs.indexOf(attr)) {
        this.adding = true;
        this.attrs.push({
          name: attr,
          upcharge: price,
        });
        this.attrInput = '';
        this.$emit('update', [attr, this.name, price]);
      }
    },
  },
};
</script>
