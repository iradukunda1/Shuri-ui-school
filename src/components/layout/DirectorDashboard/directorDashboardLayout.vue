<template>
  <div class="directordash">
    <navbar />
    <sidebar />
    <dashboardContent />
    <initialEntery/>
    
  </div>
</template>
<script>
import "../../../assets/style/directordash/directorDashboardLayout.scss";
import navbar from "./directorNavbar.vue";
import sidebar from "./directorSidebar.vue";
import dashboardContent from "./directorContent.vue";
import initialEntery from "../../pages/initialEntery.vue";
import inviteTeachear from "../../pages/inviteTeacher.vue";
import inviteDispline from "../../pages/inviteDispline.vue";
import inviteTransport from "../../pages/inviteTransportMananger.vue";

const newLocal="directordash";
export default {
  name: newLocal,
  components: {
    navbar,
    sidebar,
    dashboardContent,
    initialEntery,
    inviteTeachear,
    inviteDispline,
    inviteTransport /* harabura gukorera store hanyuma tugakoresh za v-if tukazihamara*/

  }
};
</script>
