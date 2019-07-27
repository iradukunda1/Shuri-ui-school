<template>
  <div class="newTransporter">
    <span class="closeModal" @click="cancel"></span>
    <div class="wrapper">
      <b-container class="bv-example-row">
         
        <b-row>
          <b-col class="mainTitle" md="12" sm="12">
            <p>
              Invite people to an application <br>as
              <b>Transport manager</b>
            </p>
          </b-col>
        </b-row>
                <b-row class="TransportInfo">
          <b-col class="leftSide" sm="12" md="5">
            <label for="name">Name</label>
            <input type="text" placeholder="Transport Name" />
          </b-col>
          <b-col class="rightSide" sm="12" md="5">
            <label for="email">Email</label>
            <input type="email" placeholder="Transport email"/>
          </b-col>          
        </b-row> 

        <b-row class="TransportInfo" v-for="(Transport,index) in Transports" :id="'data'+index" :key="index">
          <b-col class="leftSide" sm="12" md="5">
            <label for="name">Name</label>
            <input type="text" placeholder="Transport Name" />
          </b-col>
          <b-col class="rightSide" sm="12" md="5">
            <label for="email">Email</label>
            <input type="email" placeholder="Transport email" />
          </b-col>
          <b-col md="2" class="addTransporter" sm="12">
            
            <i class="fa fa-window-close" @click="del(index)" ></i>
          </b-col>
          
        </b-row>
        <b-row class="addTransport">
          <b-col md="12" sm="12">
            <p @click="Transports++">
              <i class="fa fa-plus-circle"></i>
              <span>Add another</span>
            </p>
          </b-col>
        </b-row>
        <b-row class="footer">
          <b-col md="7" sm="12">
            <div class="info">
              <p>
                <b>Default</b>
              </p>
              <p>
                New
                <b>Transport manager</b> 
                will automatically join platform
                and start their responsability.
              </p>
            </div>
          </b-col>
          <b-col md="5" sm="12">
            <div class="create">
              <button>Send Invitations</button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {     
      image:'',     
      Transports:1,
      placeholder:"\uf002 search a class ..."
    }
  },
   computed: {
    
   },
  methods: {
    imageChange(e) {
      this.image = e.target.files[0];
      this.$refs.imageSource.src = URL.createObjectURL(this.image);
    },
    del(a){
        var data = "data"+a
        document.getElementById(data).style="display:none !important"
    },
    cancel(){
      this.$store.dispatch("cancelInvite")
    }
  }
   }
</script>
<style>
.closeModal{
        background:url("../../assets/img/plus.png") no-repeat;
        background-size:cover;        
        height:20px;
        width:20px;
        position: absolute;
        right: 30%;
        top: 5%;
        transform: rotate(45deg);
        cursor: pointer;
}
</style>

<style lang="scss" scoped>
@import '../../assets/style/inviteTransportMananger.scss'
</style>
