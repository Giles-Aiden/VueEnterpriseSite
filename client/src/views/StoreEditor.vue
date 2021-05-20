<template>
  <div class="ImageEditor">
    <div>
      <vs-button><i class="pi pi-upload" /></vs-button>
      <vs-button class="button-color" @click="cropToggle('cropToggle')">
        <i id="cropToggle" class="pi pi-sliders-v" />
      </vs-button>
      <vs-button class="button-color" @click="$refs.editor.undo()"
        ><i class="pi pi-undo"
      /></vs-button>
      <vs-button class="button-color" @click="$refs.editor.redo()"
        ><i class="pi pi-refresh"
      /></vs-button>
      <input type="color" />
    </div>
    <div>
      <vs-button @click="$refs.editor.set('selectMode')">
        <i class="pi pi-window-minimize" />
      </vs-button>
      <vs-button @click="$refs.editor.undo()"
        ><i class="pi pi-undo"
      /></vs-button>
      <vs-button @click="$refs.editor.redo()"
        ><i class="pi pi-refresh"
      /></vs-button>
      <vs-button @click="$refs.editor.clear()"
        ><i class="pi pi-trash"
      /></vs-button>
    </div>
    <div id="editContain">
      <Editor
        id="editor"
        :canvasWidth="500"
        :canvasHeight="500"
        ref="editor"
        editorId="canvasId"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// <vs-button @click=""><i class="pi pi-"/></vs-button>
export default {
  name: 'About',
  components: {},
  mounted() {
    this.$refs.editor.setBackgroundImage(require('@/assets/logo.png'));
    this.$refs.editor.set(this.$refs.editor.mode, this.$refs.editor.options);
  },
  data() {
    return {};
  },
  methods: {
    cropToggle: function (id) {
      console.log('cropple');
      let ele = document.getElementById(id);
      if (ele.classList.contains('pi-sliders-v')) this.$refs.editor.set('crop');
      else this.$refs.editor.applyCropping();
      ele.classList.toggle('pi-sliders-v');
      ele.classList.toggle('pi-check-square');
    },
  },
};
</script>

<style lang="scss" scoped>
$bg-main: #185ca3;
$bg-secondary: #6cacf0;
$shadow: #113f70;

.button-color {
  background-color: $bg-main;
  box-shadow: $shadow;
}
.ImageEditor {
  display: flex;
}
#editor {
  width: 20%;
  height: 20%;
}
</style>
