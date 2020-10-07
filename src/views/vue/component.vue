<template>
  <div>
    <div class="content-bottom ">
      <h3>1.自定义事件$emit和on</h3>
      <div :style="{fontSize: postFontSize + 'px'}">
        <emitOn v-on:text-enlarge="changeFontSize"/>
      </div>
    </div>
    <div>
      <h3>2.自定义组件的 v-model</h3>
    </div>
    <div>
      <h3>3.将原生事件绑定到组件</h3>
    </div>
  </div>
</template>

<script>
import emitOn from '../../components/CustomEvents/emit'
export default {
  components: {
    emitOn
  },
  props: {

  },
  data () {
    return {
      postFontSize: 18
    }
  },
  computed: {

  },
  created () {

  },
  methods: {
    changeFontSize () {
      this.postFontSize += 1
    }
  }
}
</script>

<style scoped lang="less">
</style>
