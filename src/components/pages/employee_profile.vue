<template>
  <div class="employeeProfile">
    <span class="closeModal" @click="closeModal()"></span>
    <div class="wrapper" v-click-outside="closeModal">
      <b-dropdown id="dropdown-left" class="option_field" no-caret  offset="-180">
          <template slot="button-content">
            <i class="fa fa-ellipsis-h more"></i>
          </template>
          <b-dropdown-item>
            <span style="color:red"><i class="fa fa-trash"></i> Remove from shuri school</span>
          </b-dropdown-item>
        </b-dropdown>
      <b-container>
         <b-row>
        <b-col class="profile" md="4">
          <div class="profile_img">
            <span ></span>
          </div>
          <div class="details">
            
          </div>
          <p class="mainDets">Member since</p>
          <p class="active_date">12 January 2019</p>
          <p class="mainDets">Visited</p>          
          <p class="active_date">12 hours Ago</p>
        </b-col>
        <b-col class="address" md="4">
        <div class="name">
          <p class="main">Name</p>
          <p>Muhoza patrick</p>
        </div>
        <div class="sex">
          <p class="main">Sex</p>
          <p>Male</p>
        </div>
        <div class="brithday">
          <p class="main">Brithday</p>
          <p>12 july 2018</p>
        </div>
        <div class="nationality">
          <p class="main">Nationality</p>
          <p>Rwandan</p>
        </div>
        <div class="phone_number">
          <p class="main">Phone number</p>
          <p>+25078878780</p>
        </div>
       </b-col>         
      </b-row>
      </b-container>
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
  name: "employee_profile",
   mixins:[clickOutside],
  data() {
    return {     
      
    }
  },
  methods:{
    closeModal(){
      this.$store.dispatch('cancel_employee_profile')
    }
  }
 };
</script>
<style>
  .option_field #dropdown-left__BV_toggle_ {
    background: none;
    border: none;
    color:grey;
  }
  .option_field #dropdown-left__BV_toggle_:focus {
    box-shadow: none;
  }
</style>
<style lang="scss" scoped>
@import '../../assets/style/employee_profile.scss'
</style>
