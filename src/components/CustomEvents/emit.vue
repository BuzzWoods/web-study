<template>
    <div>
      <span>text</span>
      <button @click="handleFontSize">
        enlarg text
      </button>
    </div>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {
    }
  },
  methods: {
    handleFontSize () {
      this.$emit('text-enlarge', 1)
    }
  }
}
</script>

<style scoped lang="less">

</style>
