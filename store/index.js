
import Vuex from 'vuex'


export const state = () => ({
  muted: false,
  hidenRomaji: false,
  darkmode:false,
})

export const mutations = {
  muteSound(state){
    state.muted = !state.muted;
  },
  storeHideRomaji(state){
    state.hidenRomaji = !state.hidenRomaji;
  },
  storeDarkmode(state){
    state.darkmode = !state.darkmode;
    localStorage.dark = state.darkmode;
  },
  localStorageVer(state){
    if(localStorage.dark == 'true') state.darkmode = true;
    
    
  },
}

