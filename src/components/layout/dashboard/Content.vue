<template>
  <div class="dashboardContent">
    <transition name="fade" mode="out-in">
      <div class="showSidebar" :style="show.showToggle" @click="showSidebar()">
        <i class="fa fa-bars"></i>
      </div>

      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  computed: {
    show() {
      return this.$store.getters.sidebar;
    }
  },
  methods: {
    showSidebar() {
      this.$store.dispatch("showSidebar");
      
    }
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
<style lang="scss" scoped>
.showSidebar {
  position: absolute;
  top: 92px;
  left: -50px;
  background: white;
  width: 50px;
  height: 35px;
  cursor: pointer;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;

  .fa-navicon:before,
  .fa-reorder:before,
  .fa-bars:before {
    font-size: 22px;
    position: relative;
    top: 6px;
    left: 9px;
  }
}
</style>


