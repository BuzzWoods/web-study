import vuex from 'vuex'
import common from './modules/common'
const store = new vuex.Store({
  modules: {
    common
  }
})

export default store
