<template>
  <div class="sideBar">
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
export default {
  props: {

  },
  data () {
    return {
      vueList: [
        {
          name: '1.自定义组建的v-model',
          path: '/vue/customInstruction'
        },
        {
          name: '2.将原生事件绑定到组件',
          path: '/vue/componentBindNativeEvent'
        }
      ]
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
