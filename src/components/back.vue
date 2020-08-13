<template>
    <div>
      <span @click="goBack">←返回</span>
    </div>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">

</style>
