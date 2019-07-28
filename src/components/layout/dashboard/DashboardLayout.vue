<template>
  <div class="directordash">
    <navbar />
    <sidebar />
    <dashboardContent />
    <!-- <initialEntry/> -->
    <inviteTeacher v-if="invites.inviteTeacher"></inviteTeacher>
    <inviteDispline  v-if="invites.inviteDispline"></inviteDispline>
    <inviteTransport  v-if="invites.inviteTransport"></inviteTransport>
    <employee_profile v-if="view.view_employee_profile"></employee_profile>
    <createclass v-if="creates.creatingClass"></createclass>
    <members_list  v-if="view.view_members"></members_list>
  </div>
</template>

<script>
import "../../../assets/style/directordash/directorDashboardLayout.scss";
import navbar from "./Navbar.vue";
import sidebar from "./Sidebar.vue";
import dashboardContent from "./Content.vue";
import initialEntry from "../../pages/initialEntry.vue";
import inviteTeacher from "../../pages/inviteTeacher.vue";
import inviteDispline from "../../pages/inviteDispline.vue";
import inviteTransport from "../../pages/inviteTransportMananger.vue";
import createclass from "../../pages/createClass.vue";
import employee_profile from "../../pages/employee_profile.vue";
import members_list from "../../pages/members_list.vue";


export default {
  name: "directordash",
  components: {
    navbar,
    sidebar,
    dashboardContent,
    initialEntry,
    inviteTeacher,
    inviteDispline,
    inviteTransport,
    createclass,
    employee_profile, 
    members_list
  },
  computed:{
    invites(){
    return this.$store.getters.invite
    },
    creates(){
      return this.$store.getters.creates
    },
    view(){
      return this.$store.getters.members
    }
  }
 
};
</script>
