const state = {
  screenWidth: 0,
  isMobile: false
}

const getters = {

}

const mutations = {
  GET_SCREEN_WIDTH (state, payload) {
    state.screenWidth = payload
  },
  TOGGLE_DEVICE (state, device) {
    state.isMobile = (device === 'mobile')
  }
}

const actions = {
  getScreenWidth ({ commit }, payload) {
    commit('GET_SCREEN_WIDTH', payload)
  },
  toggleDevice ({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
