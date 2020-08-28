<template>
  <div>
    <!-- 将checkbox内的checked属性与change事件进行绑定，checked参数变化时，change函数会进行变化 -->
    <input type="text" @change="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  // 利用model选项进行其他的prop（属性）项与event（事件）绑定
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      defult: false
    }
  },
  data () {
    return {

    }
  },
  computed: {

  },
  created () {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">
</style>
