import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    invites: {
      inviteTeacher:false,
      inviteDirector:false,
      inviteStudent:false,
    }
  },

  mutations: {
    invitingEmployees(state) {
      state.inviteinviteTeacher=true,
      state.inviteinviteDirector=true,
      state.invite.inviteStudent=true    
    },
  },
  actions: {
    invitingEmployees({ commit }) {
      commit("invitingEmployees");
    }
  
  },
  getters: {
    inviteEmploy: state => state.invites
  }
});
export default store;
