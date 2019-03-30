import Vue from 'vue'
import Vuex from 'vuex'
import entries from './assets/entries'

Vue.use(Vuex)

const Entries = {
  state: {
    entries: []
  },
  mutations: {
    addEntry (state, entry){
      state.entries.push(entry);
    }
  },
  actions: {
    loadEntries(context) {
      entries.forEach(e => context.commit('addEntry', e));
    }
  }
}

export default new Vuex.Store({
  modules: {
    entries: Entries,
  }
})
