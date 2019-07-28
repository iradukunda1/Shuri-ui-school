 <template>
  <div class="dashlogin">
    <div class="loginNav">
      <div class="icon">
        <img src="vue-logo.png" />
      </div>
      <p>ShuriDash</p>
    </div>
    <div class="loginContent">
      <div class="cardform">
        <div class="title">
          <p class="mainTitle">
            Please verify your
            email?
          </p>
          <p class="betaTitle">
            Once you verify your email address,
            you and your team can get started
          </p>
        </div>
        <div class="emailaccount">
          <div class="gmail">
            <img src="https://img.icons8.com/color/48/000000/gmail.png" />
            <p>Open Gmail</p>
          </div>
          <div class="outlook">
            <img src="https://img.icons8.com/color/48/000000/ms-outlook.png" />
            <p>Open Outlook</p>
          </div>
          <div class="yahoo">
            <img src="https://img.icons8.com/color/48/000000/yahoo.png" />
            <p>open Yahoo</p>
          </div>
        </div>
        <div class="click">
          <p class="redirectLink">
            Didn’t receive an email?
            <router-link to="#" class="link">Click here</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/Forms/verifyEmail.scss";
</style>