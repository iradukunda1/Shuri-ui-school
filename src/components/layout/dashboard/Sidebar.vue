<template>
  <div class="sidebar" :style="hideToggle.hideSidebar">
    <div class="sidebarHeader">
      <img :src="logo" alt="Logo" />&nbsp;
      <p>Shuri School</p>
    </div>

    <router-link to="/home" class="sidebarLink">
      <div class="routeLink">
        <span class="home_ico"></span>&nbsp;&nbsp;
        <p>Home</p>
      </div>
    </router-link>
    <router-link to="#" class="sidebarLink">
      <div class="routeLink">
        <span class="class_ico"></span>&nbsp;&nbsp;
        <p>All classes</p>
      </div>
    </router-link>

    <div class="companyItems">
      <div class="ListTitle" v-b-toggle.collapse-3 @click="showCompanies=!showCompanies">
        <p class="mainTitle">
          Bus Company
          <span></span>
        </p>
      </div>
      <b-collapse visible id="collapse-3">
        <div class="companyList">
          <div class="items" v-for="(company,index) in companies" :key="index">
            <span>{{company.badge}}</span>
            <p>{{company.name}}</p>
          </div>
        </div>
        <b-collapse id="collapse-6">
          <div>
            <p class="all">All Items</p>
            <p class="more" v-b-toggle.collapse-6 @click="showAllCompanies=false">Show Less</p>
          </div>
        </b-collapse>
        <p
          v-show="!showAllCompanies"
          v-b-toggle.collapse-6
          class="more"
          @click="showAllCompanies=true"
        >Show More</p>
      </b-collapse>
    </div>
  </div>
</template>
<script >
export default {
  name: "sidebar",
  data() {
    return {
      logo: "vue-logo.png",
      showAllSchools: false,
      showSchools: true,
      showCompanies: true,
      showAllCompanies: false,
      toggleSidebarState: "",
      isToggled: false,

      companies: [
        {
          name: "School bus safety",
          badge: "5"
        },
        {
          name: "Hope school bus",
          badge: "3"
        },
        {
          name: "Volcanoes",
          badge: "6"
        }
      ]
    };
  },
  computed: {
    hideToggle() {
      return this.$store.getters.sidebar;
    }
  },
  methods: {
    toggleSidebar() {
      if (window.innerWidth <= 800) {
        this.screenMobile();
      } else {
        this.screenNormal();
      }
    },
    go() {
      if (window.innerWidth <= 800) {
        this.screenMobile();
      }
    },
    screenMobile() {
      if (
        this.screenMonitor.sidebarState === "hide" ||
        this.screenMonitor.sidebarState === ""
      ) {
        this.$store.dispatch("finalToggler");
      } else {
        this.$store.dispatch("initialToggler");
      }
    },
    screenNormal() {
      if (
        this.screenMonitor.sidebarState === "show" ||
        this.screenMonitor.sidebarState === ""
      ) {
        this.$store.dispatch("initialToggler");
      } else {
        this.$store.dispatch("finalToggler");
      }
    }
  }
};
</script>
<style scoped>
.hideSidebar {
  margin-left: -239px;
}
</style>
<style lang="scss" scoped>
@import "../../../assets/style/directordash/Sidebar.scss";
</style>