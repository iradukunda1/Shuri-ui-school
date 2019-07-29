<template>
  <div class="team_members_container">
    <div class="member_container">
          <div class="main_title">
      <p>Team Members</p>
      <b-dropdown id="dropdown-left" class="moreOpt" no-caret  offset="-50">
          <template slot="button-content">
            <i class="fa fa-caret-down caret"></i>
          </template>
          <b-dropdown-item @click="openSidebar()"><i class="fa fa-check-circle"></i> All members</b-dropdown-item>
          <b-dropdown-item>
            <i class="fa fa-user-circle"></i> Teacher
          </b-dropdown-item>
          <b-dropdown-item>
            <i class="fa fa-ellipsis-h"></i> Others
          </b-dropdown-item>
        </b-dropdown>
    </div>
  <div class="team_members">
    <div class="list" v-for="(member,index) in members" :key="index">
      <div class="team_membersList" @click="$store.dispatch('view_employee_profile')">
        <span :style="{background:member.logo}" class="memberLogo"></span>
        <p class="memberName">{{member.name}}</p>
        <span class="role">{{member.role}}</span>
        <b-dropdown id="dropdown-left" class="seeMore" no-caret  offset="-50">
          <template slot="button-content">
            <i class="fa fa-ellipsis-h dot"></i>
          </template>
          <b-dropdown-item><i class="fa fa-pencil"></i> member Details</b-dropdown-item>
          <b-dropdown-item>
            <span style="color:red"><i class="fa fa-trash"></i> Move To Trash</span>
          </b-dropdown-item>
        </b-dropdown>
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
    openSidebar(){
      $store.dispatch('view_members'),
      setTimeout(()=>{
        this.$store.state.membersBar='0'
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
@import "../../assets/style/members.scss";
</style>