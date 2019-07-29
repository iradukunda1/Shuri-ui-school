<template>
  <div class="initialEntry" v-if="firstSlide">
    <div class="wrapper">
        <div class="animation">
            <div class="circle-1"></div>
            <div class="circle-2"></div>
            <div class="circle-3"></div>
            <div class="circle-4"></div>
            <div class="triangle-1"></div>
            <div class="triangle-2"></div>
            <div class="triangle-3"></div>
            <div class="triangle-4"></div>
            <div class="triangle-5"></div>
        </div>
        <div class="mainTitle">
            <p>Hi Mugabo Dodos,</p>
        </div>
        <div class="betaData">
            <p>Welcome to shuri School. Your new account comes with access to this platform.</p>
            <p>You come up as <b>Apapec-Irebero Administrator</b> on shuri platform</p>
        </div>
        <div class="footer">
            <div class="stageLeader">
                <i class="fa fa-circle"></i>
            <i class="fa fa-circle-o"></i>
            </div>
            <div class="next">
                <button @click="firstSlide=!firstSlide">Next</button>
            </div>
            
        </div>
    </div >
  </div>
  <nextslide v-else ></nextslide>
</template>
<script>
import nextslide from "./nextslide_initialEntry.vue";
export default {
    data(){
        return{
            firstSlide:true
        }
    },
    components:{
        nextslide
    }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/initialEntry.scss";
</style>
