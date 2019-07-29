import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    membersBar:"-270px",
    invites: {
      inviteTeacher:false,
      inviteDispline:false,
      inviteTransport:false,
    },
    creates:{
      creatingClass:false,
    },
    members:{
      view_employee_profile:false,
      view_members:false

    },
   sidebar:{
      hideSidebar:"",
      showToggle:"",
      nav_toggle:""
    }
    
  },

  mutations: {
    inviteDispline(state) {
      state.invites.inviteTeacher=false,
      state.invites.inviteDispline=true,
      state.invites.inviteTransport=false

    },
    inviteTeacher(state) {
      state.invites.inviteTeacher=true,
      state.invites.inviteDirector=false,
      state.invites.inviteTransport=false

    },
    inviteTransport(state) {
      state.invites.inviteTeacher=false,
      state.invites.inviteDispline=false,
      state.invites.inviteTransport=true
    },
    cancelInvite(state) {
      state.invites.inviteTeacher=false,
      state.invites.inviteDispline=false,
      state.invites.inviteTransport=false,
      state.creates.creatingClass=false


    },
    creatingClass(state){
      state.creates.creatingClass=true
      
    },
    
    view_members(state){
      state.members.view_members=true
    },
    cancel_members(state){
      state.members.view_members=false
    },
    cancel_employee_profile(state){
      state.members.view_employee_profile=false
    },
    hideSidebar(state){
      state.sidebar.hideSidebar="margin-left:-239px;"
      state.sidebar.nav_toggle="display:none;"
      setTimeout(()=>{
        state.sidebar.showToggle="left:0px;transition:left 1s;"
      },500)
    },
    showSidebar(state){
      state.sidebar.hideSidebar=""     
      state.sidebar.showToggle=""
      state.sidebar.nav_toggle=""

    },
    view_employee_profile(state){
      state.members.view_employee_profile=true
    }
  },
  actions: {
    inviteDispline({commit}) {
      commit("inviteDispline");
    },
    inviteTeacher({commit}){
      commit("inviteTeacher")
    },
    inviteTransport({commit}){
      commit("inviteTransport")
    },
    cancelInvite({commit}){
      commit("cancelInvite")
    },
    creatingClass({commit}){
      commit("creatingClass")
    },
    view_employee_profile({commit}){
     commit("view_employee_profile")
    },
    view_members({commit}){
      commit("view_members")
    },
    cancel_employee_profile({commit}){
      commit("cancel_employee_profile")
    },
    cancel_members({commit}){
      commit("cancel_members")
    },
    hideSidebar({commit}){
      commit("hideSidebar")
    },
    showSidebar({commit}){
      commit("showSidebar")
    }
  },
  getters: {
    invite: state => state.invites,
    creates: state => state.creates,
    members: state => state.members,
    sidebar: state => state.sidebar
  }
});
export default store;
