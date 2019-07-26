<template>
  <div class="directorNavbar">
    <div class="icon">
      <img src="vue-logo.png" />
    </div>
    <p>Shuri school</p>
    <div class="navbar">
      <div class="routeTitle">
        <div class="sidebarToggler" @click="show = !show" v-show="show">
          <i class="fa fa-bars" style=" color:black;"></i>
        </div>
        <transition name="slide-fade">
          <p v-if="show" style="color:red;">bar ! bar!</p>
        </transition>
      </div>
      <div class="new">
         <b-dropdown  id="inviteBtn" ref="inviteBtn" class="inviteBtn" variant="link" offset="-380" no-caret>
              <b-dropdown-item @click="inviteDirector">Director of displine</b-dropdown-item>
              <b-dropdown-item @click="inviteTransport">Transport manager</b-dropdown-item>
              <b-dropdown-item @click="inviteTeacher">Teacher</b-dropdown-item>
          </b-dropdown> 
        <b-dropdown id="dropdown-right" variant="primary" class="newBtn" offset="-80" no-caret>
          <template slot="button-content">
            <i class="fa fa-plus"></i>
            <span>New</span>
          </template>
          <div class="btn-group dropleft">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropleft
  </button>

</div>
          <b-dropdown-item>
            <i class="fa fa-flag"></i>Class
          </b-dropdown-item>
        </b-dropdown>
       
      </div>
      <div class="notification">
      <img src="icons8-notification-40.png" />
      </div>
      <div class="profile">
        <b-dropdown
          id="dropdown-left"
          offset="-130"
          class="profileItem"
          variant="primary"
          no-caret
          size="sm"
        >
          <template slot="button-content">My</template>
            <b-row stylre="padding: 0 10px;">
              <b-col md="3"  sm="3">
            <span style="display:flex;width:30px;height:30px;background:green;border-radius:50%"></span>

              </b-col>
              <b-col md="9"  sm="9" style="padding-right:0;padding-left: 0;padding-top: 3px;">
     
            <b>Mugabo Dodos</b>

              </b-col>
            </b-row>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>My Profile Settings</b-dropdown-item>
          <b-dropdown-item>All employees</b-dropdown-item>
          <b-dropdown-item @click="$router.push('/')">Logout</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "directorNavbar",
  data() {
    return {
      show: true,
    };
  },
  methods:{
    openInvite(){
      this.$refs.inviteBtn.click()
    },
    inviteDispline(){
    this.$store.dispatch("invitingEmployees");
    },
    inviteTeacher(){
    this.$store.dispatch("invitingEmployees");
    },
    inviteTransport(){
    this.$store.dispatch("invitingEmployees");
    }
  }
};
</script>
<style >
.seeOptions #dropdown-left__BV_toggle_ {
  color: black;
  background: none;
  border: none;
}
.seeOptions #dropdown-left__BV_toggle_:focus {
  box-shadow: none;
}
.seeOptions .dropdown-item {
  padding-left: 0;
  padding-right: 0;
}
.dropdown-item {
  font-size: 15px;
  font-family: "Poppins", "sans-serif";
}
</style>
<style lang="scss">
@import "../../../assets/style/directordash/directorNavbar.scss";
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-239px);
  opacity: 0;
}
</style>


