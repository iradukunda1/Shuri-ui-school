<template>
     <div class="dashboardContent">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
    
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
  .fade-leave-to  
 {
  opacity: 0;
}
</style>


