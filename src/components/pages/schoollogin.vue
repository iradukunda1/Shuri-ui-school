 <template>
 <div class="schoolLogin">
      <p class="loginTitle">Log In</p>
      <div class="formcard">
        <form class="form" @submit.prevent>
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
          <router-link to="#">
            <button class="submit">Log In</button>
          </router-link>
        </form>
    </div>
    </div>
</template>
<script >
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/schoollogin.scss";
</style>