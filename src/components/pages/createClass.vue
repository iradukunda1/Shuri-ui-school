<template>
  <div class="newClass">
    <span class="closeModal" @click="cancel"></span>
    <div class="wrapper" v-click-outside="cancel">
      <b-container class="bv-example-row">
        <b-row>
          <b-col class="mainTitle">
            <p>Create Class</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="leftSide" sm="12" md="4">
            <div class="logoField">
              <span>
                <img ref="imageSource" />
              </span>
            </div>
            <p @click="$refs.fileInput.click()">
              <i class="fa fa-pencil"></i> Edit
            </p>
            <input type="file" style="display:none" @change="imageChange" ref="fileInput" />
          </b-col>
          <b-col class="rightSide" sm="12" md="7">
            <div>
              <label for="class_name">Class Name</label>
              <input type="text" id="class_name" class="className" />
            </div>
            <div>
              <label for="class_code">Class Code</label>
              <div class="classCode">
                <input type="text" id="class_code" />
                <span>@</span>
              </div>
            </div>
            <div>
              <label for="school">School</label>
              <select id="school" required>
                <option value disabled selected>select school</option>
                <option value="apapec">Apapec-Irebero</option>
                <option value="newLife">New Life</option>
              </select>
            </div>
            <div class="create">
              <button>Create</button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import vClickOutside from "v-click-outside"
const clickOutside = {
   directives: {
      clickOutside: vClickOutside.directive
    }
}; 
export default {
  name: "create_class",
   mixins:[clickOutside],
  data() {
    return {
      image: ""
    };
  },
  methods: {
    imageChange(e) {
      this.image = e.target.files[0];      
      this.$refs.imageSource.src = URL.createObjectURL(this.image);
    },
    cancel(){
      this.$store.dispatch("cancelInvite")
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../assets/style/createClass.scss'

</style>
