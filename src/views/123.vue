<template>
  <div>
    <p>
        <button type="button" @click="focus">focus</button>
        <button type="button" @click="fullScreen">full screen</button>
        <button type="button" @click="showModuleName=!showModuleName">toggle module name</button>
        <button type="button" @click="reset">change content</button>
        <span style="white-space: nowrap">content length : {{content.length}}</span>
    </p>
    <vue-html5-editor :content="content" :height="300" :show-module-name="showModuleName"
                      @change="updateData" ref="editor"></vue-html5-editor>
  </div>
</template>
<script>
export default {
  name: 'htmlEditor',
  data () {
    return {
      content: "<h3>vue html5 editor</h3>",
      showModuleName: false,
    }
  },
  props: {
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    updateData: function (data) {
        // sync content to component
        this.content = data
    },
    fullScreen: function () {
        this.$refs.editor.enableFullScreen()
    },
    focus: function () {
        this.$refs.editor.focus()
    },
     reset:function () {
        var newContent = prompt('please input some html code: ')
        if(newContent){
            this.content = newContent
        }
    }
  },
  destroyed () {
    
  }
}
</script>
<style  scoped>
 .color{
     color:red
 }
</style>
