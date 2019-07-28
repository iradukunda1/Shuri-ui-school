 <template>
<div class="dashlogin">
        <div class="loginNav">
      <div class="icon">
        <img src="vue-logo.png" />
      </div>
      <p>ShuriDash</p>
    </div>
    <div class="loginContent">
      <p class="loginTitle">Log In</p>
      <div class="formcard">
        <form class="form" @submit.prevent="login()">
            <label for="email">Email Address</label>

          <div class="emailArea">
            <input type="email" name="email" placeholder="example@email.com" class="email" />
          </div>
              <label for="password">Password</label>

          <div class="passwordArea">
            <input type="Password" name="Password" placeholder="password" class="password" />
            <div class="forgotPwdArea">
            <router-link to="#" style="cursor:pointer;" class="forgotPwdLink">Forgot ?</router-link>
          </div>
          </div>       
          
          <label class="container">Stay logged in
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
            <button class="submit">Log In</button>
        </form>
      </div>
      </div>
    </div>
</template>
<script >
export default {
  data() {
    return {};
  },
  methods:{
    login(){
      this.$router.push("/home")
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/Forms/login.scss";
</style>