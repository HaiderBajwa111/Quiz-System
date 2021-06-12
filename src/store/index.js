import Vue from "vue";
import Vuex from "vuex";
import User from "@/Data/User.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    User,
    Data: [],
    score: 0,
    questionNo: 1
  },
  mutations: {
    addUser(state, payload) {
      state.User.push(payload);
    },
    addData(state, payload){
      state.Data.push(...payload)
    },
    addScore(state){
      state.score++
    },
    questionNo(state){
      state.questionNo++
    },
    clearData(state){
      state.score = 0
      state.questionNo = 1
    }
  },
  actions: {
    addUser({ commit }, payload) {
      commit("addUser", payload);
    },
    addData({ commit }){
      fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple", { method: "get" }) .then((response) => {
  return response.json();
   }).then((payload) => {
    commit('addData', payload.results)
  })
},
    addScore({commit }){
      commit('addScore')
    },
    questionNo({commit }){
      commit('questionNo')
    },
    clearData({commit}){
      commit('clearData')
    }
  },

});
