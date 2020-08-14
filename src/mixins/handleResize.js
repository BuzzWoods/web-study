import { mapMutations, mapActions } from 'vuex'

const WIDTH = 992

const handleResize = {
  data () {
    return {
      screenWidth: document.body.clientWidth
    }
  },
  watch: {
    screenWidth (val) {
      this.screenWidth = val
      this.getScreenWidth(val)
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
    // 是否是移动设备
    if (this.isMobile()) {
      this.toggleDevice('mobile')
    } else {
      this.toggleDevice('pc')
    }
    const that = this
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
