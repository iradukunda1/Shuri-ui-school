<template>
  <div class="initialEntry" v-show="gotoDashboard">
    <div class="wrapper">
        
        <div class="mainTitle">
            <p>Lorem ipsum dolor sit amet, omnes libris liberavisse vel ea, has at accusam 
voluptua apeirian. Sit putent noster ei, ne pri debet zril. Euismod veritus ne vel, 
ne sit ridens lobortis, at vim augue 
</p>
        </div>
        <div class="betaData">
            <label for="Description">Description</label>
            <textarea id="Description" class="description"></textarea>
           
            <label for="Vision">Vision</label>
            <textarea id="Vision" class="vision"></textarea>
        </div>
        <div class="footer">
            <div class="stageLeader">
               <i class="fa fa-circle-o"></i>
                <i class="fa fa-circle"></i>
            </div>
            <div class="next">
                <button @click="gotoDashboard =!gotoDashboard"><span>Next</span></button>
            </div>
            <div class="skip">
                <button @click="gotoDashboard =!gotoDashboard"><span>Skip</span></button>
            </div>
            
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            gotoDashboard:true
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../assets/style/nextslide_initialEntery.scss";
</style>
