import Vue from 'vue'
import Vuex from 'vuex'
import entries from './assets/entries'

Vue.use(Vuex)

const Entries = {
  state: {
    unplaced: [],
    placed: []
  },

  mutations: {
    addNewEntry (state, entry){
      state.unplaced.push(entry);
    },

    setEntries(state, payload) {
      state[payload.q] =  payload.entries;
    },

    reset(state) {
      state.unplaced = [];
      state.placed = [];
    }
  },

  actions: {
    loadEntries(context) {
      context.commit('reset');
      entries.forEach(e => context.commit('addNewEntry', e));
    },

    reset(context) {
      context.dispatch('loadEntries')
    }
  }
}

export default new Vuex.Store({
  modules: {
    Entries: Entries,
  }
})
