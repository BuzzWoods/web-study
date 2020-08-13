<template>
    <div>
      <div class="add-btn">
         <div @click="addOne">click</div>
      </div>
      <div class="click-area">
          <div v-for="(item, index) in setData" :key="index" @click="check(index)" :class="{isActive:item.isCheck}">{{item.name}}</div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'Click',
  props: {

  },
  data () {
    return {
      num: 1,
      setData: [
        {
          name: 1,
          isCheck: false
        }
      ]
    }
  },
  computed: {

  },
  created () {

  },
  methods: {
    addOne () {
      this.num++
      this.setData.push({ name: this.num, isCheck: false })
    },
    check (index) {
      console.log(index)
      this.setData[index].isCheck = !this.setData[index].isCheck
    }
  }
}
</script>

<style scoped lang="less">
.add-btn {
  div{
    margin: 20px auto;
    width: 90px;
    height: 40px;
    background-color: rgb(248, 169, 169);

  }
}
.click-area{
  margin: 0 auto;
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  div{
    cursor: pointer;
    height: 200px;
    width: 200px;
    border: 1px solid rgb(117, 117, 117);
    border-radius: 4px;
    margin: 10px;
  }
}
.isActive{
  background-color: rgb(86, 103, 255);
}
</style>
