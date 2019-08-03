import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info: []
  },
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
  getters: {
    getInfo: state => {
      return state.info;
    }
  }
});
