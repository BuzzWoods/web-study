<template>
  <header class="header">
    <!-- <div>Personal Study</div> -->
    <div class="header-wrap">
      <div class="header-title">
        <i class="el-icon-collection"></i>
        <span class="header-title-text">Personal Study</span>
      </div>
      <el-menu menu-trigger="click" class="el-menu-demo" mode="horizontal">
        <el-submenu index="1">
          <template slot="title">学习</template>
          <el-menu-item index="1-1">javaScript</el-menu-item>
          <el-menu-item index="1-2">VUE</el-menu-item>
          <el-menu-item index="1-3">React</el-menu-item>
          <el-menu-item index="1-4">Web API</el-menu-item>
          <el-menu-item index="1-5">Network</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">资料网站</template>
          <el-menu-item index="2-1">
            <a href="https://developer.mozilla.org/zh-CN/" target="_blank">MDN</a>
          </el-menu-item>
          <el-menu-item index="2-2">
            <a href="https://zh.javascript.info/" target="_blank">现代JavaScript教程</a>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="3">关于</el-menu-item>
      </el-menu>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {

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

<style lang="scss">
.header{
  height: auto;
  border-bottom: solid 1px #e6e6e6;
  padding: 0 20px;
  box-sizing: border-box;
  .header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-title {
      display: flex;
      align-items: center;
      .header-title-text {
        font-weight: bold;
        color: #335374;
        font-size: 22px;
        padding-left: 10px;
      }
      i {
        color: #335374;
        font-weight: bold;
        font-size: 24px;
      }
    }
  }
  .el-menu.el-menu--horizontal {
    border: none;
  }
  .el-menu--horizontal > .el-submenu.is-active .el-submenu__title,
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid #335374;
  }
}
</style>
