<template>
  <div class="StoreEditor">
    <div>
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
      <vs-button @click="$refs.editor.set('rect')">
        <i class="pi pi-tablet" />
      </vs-button>
      <vs-button @click="$refs.editor.set('circle')">
        <i class="pi pi-circle-off" />
      </vs-button>
      <vs-button @click="$refs.editor.set('arrow')">
        <i class="pi pi-arrow-circle-up" />
      </vs-button>
      <vs-button @click="$refs.editor.set('freeDrawing')">
        <i class="pi pi-pencil" />
      </vs-button>
      <vs-button @click="$refs.editor.set('eraser')">
        <i class="pi pi-times" />
      </vs-button>
      <vs-button @click="$refs.editor.undo()">
        <i class="pi pi-undo" />
      </vs-button>
      <vs-button @click="$refs.editor.redo()">
        <i class="pi pi-refresh" />
      </vs-button>
      <vs-button @click="$refs.editor.clear()">
        <i class="pi pi-trash" />
      </vs-button>
    </div>
    <div id="editContain">
      <Editor
        id="editor"
        :canvasWidth="500"
        :canvasHeight="500"
        ref="editor"
        editorId="canvasId"
      />
      <input type="file" accept="image/*" @change="uploadImage($event)" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// <vs-button @click=""><i class="pi pi-"/></vs-button>
export default {
  name: 'StoreEditor',
  components: {},
  mounted() {
    this.$refs.editor.clear();
    this.$refs.editor.setBackgroundImage(require('@/assets/logo.png'), '');
    this.$refs.editor.filter('grayscale(100%)');
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
    uploadImage: function (e) {
      let canvas = this.$refs.editor;
      let context = canvas.getContext('2d');
      let currentX = canvas.width / 2;
      let currentY = canvas.height / 2;
      e.onload = () => {
        //mouse events
        let isDraggable;
        canvas.onmousedown = (x) => {
          let mouseX = x.pageX - this.offsetLeft;
          let mouseY = x.pageY - this.offsetTop;
          if (
            mouseX >= currentX - e.width / 2 &&
            mouseX <= currentX + e.width / 2 &&
            mouseY >= currentY - e.height / 2 &&
            mouseY <= currentY + e.height / 2
          ) {
            isDraggable = true;
          }
        };
        canvas.onmouseup = () => {
          isDraggable = false;
        };
        canvas.onmouseout = () => {
          isDraggable = false;
        };
        canvas.onmousemove = function (x) {
          if (isDraggable) {
            currentX = x.pageX - this.offsetLeft;
            currentY = x.pageY - this.offsetTop;
          }
        };

        setInterval(() => {
          //Reset Canvas
          context.fillStyle = '';
          context.fillRect(0, 0, canvas.width, canvas.height);
          //Draw Image
          context.drawImage(e, currentX - e.width / 2, currentY - e.height / 2);
        }, 1000 / 30);
      };
      this.$refs.editor.uploadImage(e);
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
.StoreEditor {
  display: flex;
  align-content: space-around;
}
#editor {
  border: 1em inset black;
  background-image: url('../assets/bottles/flask_white.png');
  background-size: 100%;
}
</style>
