<template>
    
    <div class="navbar">
      
        <div class="sidebarToggler">
          <i class="fa fa-bars" :style="showSidebar.nav_toggle" @click="hideSidebar" style=" color:black;"></i>
        </div>
      <div class="routeTitle"> 
      </div>
       <div class="new">
        
        <div class="dropdown" v-click-outside="closeDrpdwn"> 
        <button class="newBtn" @click="dropDownList='display:block'" >
         <i class="fa fa-plus"></i> <span>New</span>
       </button>       
        <ul class="dropdown-menu" :style="dropDownList">
          <li @click="dropDownList=''"><a class="dropdown-item" @click="createClass">
            <span class="class_ico"></span> Class</a>
          </li>
          <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle">
            <span class="employee_ico"></span> 
           invite employee</a>
            <ul class="dropdown-menu">
              <li @click="dropDownList=''"><a class="dropdown-item" @click="inviteDispline">Director of displine</a></li>
              <li @click="dropDownList=''"><a class="dropdown-item" @click="inviteTransport">Transport manager</a></li>        
              <li @click="dropDownList=''"><a class="dropdown-item" @click="inviteTeacher">Teacher</a></li>        
            </ul>
          </li>
        </ul>
      </div>
       
      </div>
      <div class="notification">
      <img src="icons8-notification-40.png" />
      </div>
          
      <div class="profile" @click="dropDownList=''">
        <b-dropdown
          id="dropdown-left"
          offset="-130"
          class="profileItem"
          variant="primary"
          no-caret
        >
          <template slot="button-content">My</template>
          <b-container>

            <b-row class="mybuttonRow">
              <b-col md="3"  sm="3" class="myLogo">
            <span class="myProfile"></span>

              </b-col>
              <b-col md="9"  sm="9" class="myName" >
     
            <b>Mugabo Dodos</b>

              </b-col>
            </b-row>

        </b-container>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>My Profile Settings</b-dropdown-item>
          <b-dropdown-item @click="openSidebar()">All employees</b-dropdown-item>
          <b-dropdown-item @click="$router.push('/')">Logout</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
</template>
<script>
import vClickOutside from "v-click-outside"
const clickOutside = {
   directives: {
      clickOutside: vClickOutside.directive
    }
}; 
export default {
  name: "directorNavbar",
   mixins:[clickOutside],
  data() {
    return {
      show: true,
      dropDownList:"",
    };
  },
  methods:{
    closeDrpdwn(){
      this.dropDownList=""
    },  
    openInvite(){
      this.$refs.inviteBtn.click()
    },
    inviteDispline(){
    this.$store.dispatch("inviteDispline");
    },
    inviteTeacher(){
    this.$store.dispatch("inviteTeacher");
    },
    inviteTransport(){
    this.$store.dispatch("inviteTransport");
    },
    createClass(){
    this.$store.dispatch("creatingClass")
    },
    openSidebar(){
      this.$store.dispatch('view_members')
      setTimeout(()=>{
        this.$store.state.membersBar='0'
      },1)
      },
    hideSidebar(){
    this.$store.dispatch("hideSidebar")

    }
  },
  computed:{
    showSidebar(){
    return this.$store.getters.sidebar
     
    }
  }
};
</script>
<style>
  .profileItem #dropdown-left__BV_toggle_ {
color: white;
background: none;
border: none;
padding-left:7px;
}
</style>
<style lang="scss">
@import "../../../assets/style/directordash/Navbar.scss";
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


