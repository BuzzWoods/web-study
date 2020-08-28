import { mapMutations, mapActions } from 'vuex'

const WIDTH = 992

const handleResize = {
  data () {
    return {
      screenWidth: document.body.clientWidth
    }
  },
  watch: {
    // 监听onresize方法改变的screenWdith,使data做出改变
    screenWidth (val) {
      this.screenWidth = val
      this.getScreenWidth(val)

      // 是否是移动设备，结果通过action触发，改变vuex内state相关值
      if (this.isMobile()) {
        this.toggleDevice('mobile')
      } else {
        this.toggleDevice('pc')
      }
    }
  },
  mounted () {
    // 第一次进入页面获取宽度，传入给vuex
    this.GET_SCREEN_WIDTH(this.screenWidth)

    // 是否是移动设备，结果通过action触发，改变vuex内state相关值
    if (this.isMobile()) {
      this.toggleDevice('mobile')
    } else {
      this.toggleDevice('pc')
    }

    const that = this
    // 挂载window.onresize方法
    window.onresize = () => {
      return (() => {
        that.screenWidth = document.body.clientWidth
      })()
    }
  },
  methods: {
    // 是否是移动端
    isMobile () {
      const rect = this.screenWidth
      return rect < WIDTH
    },
    ...mapMutations('layout', ['GET_SCREEN_WIDTH', 'TOGGLE_DEVICE']),
    ...mapActions('layout', ['getScreenWidth', 'toggleDevice'])
  }
}

export default handleResize
