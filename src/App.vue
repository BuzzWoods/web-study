<template>
  <div id="app">
    <layout></layout>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/function">功能</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
import layout from './components/layout/index.vue'
import handleResize from './mixins/handleResize.js'

export default {
  components: {
    layout
  },
  // 混入响应屏幕宽度
  mixins: [handleResize]
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  ul, li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
}

</style>
