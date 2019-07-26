<template>
<div class="schoollogin">
   <navbar />
    <contentLayout/>
    </div>
</template>

<script>
import "../../../assets/style/schoolformlayout.scss";
import navbar from "./navbar.vue";
import contentLayout from "./content.vue";

export default {
  name: "schooldash",
  components: {
    navbar,
    contentLayout
  }
};
</script>
<style lang="scss" scoped>
</style>



