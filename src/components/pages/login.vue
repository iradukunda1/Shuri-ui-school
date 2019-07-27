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
          <div class="emailArea">
            <label for="email">Email Address</label>
            <input type="email" name="email" placeholder="example@email.com" class="email" />
          </div>
          <div class="passwordArea">
            <label for="password">Password</label>
            <input type="Password" name="Password" placeholder="password" class="password" />
          </div>
          <div class="forgotPwdArea">
            <router-link to="#" style="cursor:pointer;" class="forgotPwdLink">Forgot ?</router-link>
          </div>
          <div class="staylogged">
            <input type="checkbox" class="box" />
            <p class="stayText">Stay logged in</p>
          </div>
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