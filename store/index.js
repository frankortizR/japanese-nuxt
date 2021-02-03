//import { createStore } from 'vuex'
import Vuex from 'vuex'
/* 
new Vuex.Store({
  state: {
    muted: false,
    hidenRomaji: false,
  },
  mutations: {
    muteSound(state){
      state.muted = !state.muted;
    },
    storeHideRomaji(state){
      state.hidenRomaji = !state.hidenRomaji;
    }
  },
  actions: {
  },
  modules: {
  }
}) */

export const state = () => ({
  muted: false,
  hidenRomaji: false,
})

export const mutations = {
  muteSound(state){
    state.muted = !state.muted;
  },
  storeHideRomaji(state){
    state.hidenRomaji = !state.hidenRomaji;
  }
}

