<template>
    <div>
      <SideBar v-if="routePath.indexOf('vue') !== -1"/>
      <div class="content-wrap">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import SideBar from '../layout/SideBar'
export default {
  components: {
    SideBar
  },
  props: {

  },
  data () {
    return {
      routePath: ''
    }
  },
  computed: {

  },
  created () {
    console.log(this.$route.name)
  },
  methods: {

  },
  watch: {
    '$route.path': function (newVal) {
      this.routePath = newVal
      console.log(this.routePath)
    }
  }
}
</script>

<style scoped lang="scss">
.content-wrap{
  display: block;
  max-width: 700px;
  margin: 0 auto;
}
</style>
