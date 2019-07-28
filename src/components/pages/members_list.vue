<template>
  <div class="team_members_container">
    <div class="member_container" :style="{right:$store.state.membersBar}">
          <div class="main_title">
        <i class="fa fa-close" @click="closeSidebar()"></i>
      <p>Team Members</p>
      <b-dropdown id="dropdown-left" class="moreOpt" no-caret  offset="-100">
          <template slot="button-content">
            <i class="fa fa-caret-down caret"></i>
          </template>
        <b-dropdown-item @click="$store.dispatch('cancel_members'),$router.push('/all_members')"><i class="fa fa-eye"></i> View all</b-dropdown-item>
          
        </b-dropdown>
    </div>
    <div class="search">
      <input type="search" :placeholder="placeholder">
    </div>
  <div class="team_members">
    <div class="list" v-for="(member,index) in members" :key="index">
      <div class="team_membersList" @click="$store.dispatch('view_employee_profile')">
        <span :style="{background:member.logo}" class="memberLogo"></span>
        <p class="memberName">{{member.name}}</p>
        <span class="role">{{member.role}}</span>        
      </div>
    </div>
  </div>
    </div>
   
</div>
</template>
<script>
export default {
  name: "member",
  data() {
    return {
      placeholder:"⌕ search team member ...",
      members: [
        {
          name: "Muhoza patrick",
          logo: "blue",
          role: "Teacher"
        },
        {
          name: "Mucyo emmy",
          logo: "orange",
          role: "Director of Discipline"
        },
        {
          name: "Habimana claude",
          logo: "yellow",
          role: "Teacher"
        },
        {
          name: "Mugabo enock",
          logo: "darkblue",
          role: "Teacher"
        }
      ]
    };
  },
  methods:{
    closeSidebar(){
      this.$store.state.membersBar='-270px'
      setTimeout(()=>{
        this.$store.dispatch('cancel_members')
      },1000)
    }
  }
};
</script>
<style>
   #dropdown-left__BV_toggle_ {
    background: none;
    border: none;
  }
   #dropdown-left__BV_toggle_:focus {
    box-shadow: none;
  }
</style>

<style lang="scss" scoped>
@import "../../assets/style/members_list.scss";
</style>