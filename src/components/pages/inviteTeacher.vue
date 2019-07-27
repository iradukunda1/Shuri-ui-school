<template>
  <div class="newClass">
    <span class="closeModal" @click="cancel"></span>
    <div class="wrapper">
      <b-container class="bv-example-row">
         
        <b-row>
          <b-col class="mainTitle" md="12" sm="12">
            <p>
              Invite people to an application as
              <b>Teacher</b>
            </p>
          </b-col>
        </b-row>
                <b-row class="teacherInfo">
          <b-col class="leftSide" sm="12" md="4">
            <label for="name">Name</label>
            <input type="search" placeholder="Teacher Name" />
          </b-col>
          <b-col class="rightSide" sm="12" md="4">
            <label for="email">Email</label>
            <input type="email" placeholder="Teacher email"/>
          </b-col>
              
          <b-col md="4" sm="12" class="addClass" ref="drpdown">
            <b-dropdown
              id="dropdown-left"
              offset="-50"
              class="profileItem"
              variant="link"
              no-caret
              size="sm"
            >
              <template slot="button-content">
                <p>Add class <i class="fa fa-caret-down"></i></p>
              </template>
              <div class="option">
                <input id="search" type="search" size="sm" :placeholder="placeholder"  v-model="search"/>
              </div>
              <b-dropdown-divider></b-dropdown-divider>
              <div class="classItems">
                <div class="classList">
     
                  <div class="items" :id="'class'+index" v-for="(classDet,index) in filteredClasses" :key="index">
                    <span :style="{background:classDet.logo}"></span>
                    <p class="class_name">{{classDet.name}}</p>
                    <p class="code">@{{classDet.code}}</p>
                  </div>
                </div>
              </div>
                <div class="option">
                  <button>Add</button>
                  <button @click="$refs.drpdown.click(),search=''">Cancel</button>
                </div>
            </b-dropdown>
          </b-col>          
        </b-row> 

        <b-row class="teacherInfo" v-for="(teacher,index) in teachers" :id="'data'+index" :key="index">
          <b-col class="leftSide" sm="12" md="4">
            <label for="name">Name</label>
            <input type="text" placeholder="Teacher Name" />
          </b-col>
          <b-col class="rightSide" sm="12" md="4">
            <label for="email">Email</label>
            <input type="email" placeholder="Teacher email" />
          </b-col>
          <b-col md="4" class="addClass" sm="12">
            <b-dropdown
              id="dropdown-left"
              offset="-50"
              class="profileItem"
              variant="link"
              no-caret
              size="sm"
            >
              <template slot="button-content">
                <p>Add class <i class="fa fa-caret-down"></i></p>
              </template>
              <div class="option">
                <input id="search" v-model="search" size="sm" :placeholder="placeholder" />
              </div>
              <b-dropdown-divider></b-dropdown-divider>
              <div class="classItems">
                <div class="classList">
                  <div class="items" :id="'class'+index" v-for="(classDet,index) in filteredClasses" :key="index">
                    <span :style="{background:classDet.logo}"></span>
                    <p class="class_name">{{classDet.name}}</p>
                    <p class="code">@{{classDet.code}}</p>
                  </div>
                </div>
              </div>
                <div class="option">
                  <button>Add</button>
                  <button @click="$refs.drpdown.click(),search=''">Cancel</button>
                </div>
            </b-dropdown>
            <i class="fa fa-window-close" @click="del(index)" ></i>
          </b-col>
          
        </b-row>
        <b-row class="addTeacher">
          <b-col md="12" sm="12">
            <p @click="teachers++">
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
                <b>Teacher</b> will not automatically join platform.
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
      search:'',
      image:'',
      classes: [
        {
          name: "S6 MEG",
          code: "MATH456",
          logo: "blue"
        },
        {
          name: "S4 CEL",
          code: "CE786",
          logo: "violet"
        }
      ],
      teachers:1,
      placeholder:"\uf002 search a class ..."
    }
  },
   computed: {
    filteredClasses() {
        return this.classes
          .filter(item => {
            return (
              item.name.toLowerCase().includes(
                this.search.toLowerCase()
              ) ||
              item.code.toLowerCase().includes(
                this.search.toLowerCase()
              )
                           
            )            
          })
      }
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
@import '../../assets/style/inviteTeacher.scss'
</style>
