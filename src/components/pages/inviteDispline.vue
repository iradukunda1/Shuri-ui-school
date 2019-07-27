<template>
  <div class="newDiscipline">
    <span class="closeModal" @click="cancel"></span>
    <div class="wrapper">
      <b-container class="bv-example-row">
         
        <b-row>
          <b-col class="mainTitle" md="12" sm="12">
            <p>
              Invite people to  an application as<br>
              <b>Director of discipline</b>
            </p>
          </b-col>
        </b-row>
                <b-row class="displineInfo">
          <b-col class="leftSide" sm="12" md="5">
            <label for="name">Name</label>
            <input type="text" placeholder="Discipline Name" />
          </b-col>
          <b-col class="rightSide" sm="12" md="5">
            <label for="email">Email</label>
            <input type="email" placeholder="Discipline email"/>
          </b-col>              
            
        </b-row> 

        <b-row class="displineInfo" v-for="(displine,index) in displines" :id="'data'+index" :key="index">
          <b-col class="leftSide" sm="12" md="5">
            <label for="name">Name</label>
            <input type="text" placeholder="displine Name" />
          </b-col>
          <b-col class="rightSide" sm="12" md="5">
            <label for="email">Email</label>
            <input type="email" placeholder="displine email" />
          </b-col>
          <b-col md="2" class="addDiscipline" sm="12">  
            <i class="fa fa-window-close" @click="del(index)" ></i>
          </b-col>          
        </b-row>
        <b-row class="adddispline">
          <b-col md="2" sm="12">
            <p @click="displines++">
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
                <b>DOD</b> will automatically join platform
                and start their responsability
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
      displines:1,
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
<style lang="scss" scoped>
@import '../../assets/style/inviteDispline.scss'
</style>
