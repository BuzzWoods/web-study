<template>
  <div>
    <input :type="$attrs.type" :class="inputStyle">
    <!-- {{msg}} -->
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'BootstraoDateInput',
  props: {
    // msg: {
    //   type: String,
    //   defult: ''
    // }
  },
  data () {
    return {
      inputStyle: {
        base: true
      }
    }
  },
  created () {
    console.log(this.$attrs)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.base{
  width: 240px;
  height: 43px;
  border: none;
  border: 1px solid rgb(107, 107, 107);
  box-sizing: border-box;
  padding: 8px;
  outline: none;
  background:none;
  border-radius: 4px;
}
</style>
