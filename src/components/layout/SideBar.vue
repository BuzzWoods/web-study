<template>
  <div class="sideBar" v-if="!isMobile">
    <div class="sideBar-wrap">
      <ul>
        <li v-for="(item, index) in vueList" :key="index">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  props: {

  },
  data () {
    return {
      vueList: [
        {
          name: '1.自定义组件',
          path: '/vue/component'
        }
      ]
    }
  },
  computed: {
    isMobile () {
      return this.$store.state.layout.isMobile
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.sideBar{
  box-sizing: border-box;
  position: fixed;
  width:260px;
  height: calc(100% - 60px);
  display: block;
  padding: 20px;
  background-color: white;
  border-right: 1px solid #e6e6e6;
}
</style>
