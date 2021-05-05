<template>
  <div class="About">
    <Editor :canvasWidth="canvasWidth" :canvasHeight="canvasHeight" ref="editor" editorId="canvasId"/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
  components: {
  },
  mounted() {
    this.refs.editor.set(this.editor.mode,this.editor.options);
  },
};
</script>
