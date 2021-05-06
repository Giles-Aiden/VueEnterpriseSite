<template>
<<<<<<< HEAD
  <div class="ImageEditor">
    <div>
      <vs-button><i class="pi pi-upload" /></vs-button>
      <vs-button @click="cropToggle('cropToggle')">
        <i id="cropToggle" class="pi pi-sliders-v" />
      </vs-button>
      <vs-button @click="$refs.editor.set('selectMode')">
        <i class="pi pi-window-minimize" />
      </vs-button>
      <vs-button @click="$refs.editor.undo()"><i class="pi pi-undo" /></vs-button>
      <vs-button @click="$refs.editor.redo()"><i class="pi pi-refresh" /></vs-button>
      <vs-button @click="$refs.editor.clear()"><i class="pi pi-trash" /></vs-button>
    </div>
    <div id="editContain">
      <Editor
        :canvasWidth="500"
        :canvasHeight="500"
        ref="editor"
        editorId="canvasId"
      />
=======
  <div class="About">
    <div id="editContain">
      <Editor :canvasWidth="500" :canvasHeight="500" ref="editor" editorId="canvasId"/>
    </div>
    <div>
      <button><i class="pi pi-upload"/></button>
      <button @click="$refs.editor.set('crop')"><i class="pi pi-sliders-v"/></button>
      <button @click="$refs.editor.applyCropping()"><i class="pi pi-"/></button>
      <button @click="$refs.editor.set('selectMode')"><i class="pi pi-angle-double-up"/></button>
      <button @click="$refs.editor.clear()"><i class="pi pi-trash"/></button>
      <button @click="$refs.editor.undo()"><i class="pi pi-undo"/></button>
      <button @click="$refs.editor.redo()"><i class="pi pi-refresh"/></button>
>>>>>>> giles
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
<<<<<<< HEAD
//<vs-button @click=""><i class="pi pi-"/></vs-button>
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
  .ImageEditor {
    display: flex;
  }
</style>
=======
//<button @click=""><i class="pi pi-"/></button>
export default {
  name: 'About',
  components: {
  },
  mounted() {
    this.$refs.editor.setBackgroundImage(require("@/assets/logo.png"));
    this.$refs.editor.set(this.$refs.editor.mode,this.$refs.editor.options);
  },
  data() {
    return {
    }
  }
};
</script>
>>>>>>> giles
