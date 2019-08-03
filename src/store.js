import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info: []
  },
  // updating data
  mutations: {
    GET_FORM(state, info) {
      state.info = info;
    }
  },
  actions: {
    myForm({ commit }, { info }) {
      commit("GET_FORM", {
        info
      });
    }
  },
  // mapping the new information
  getters: {
    getInfo: state => {
      return state.info;
    }
  }
});
