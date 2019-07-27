 <template>
  <div class="agreement_container">
    <div class="agreement_nav">
      <div class="icon">
        <img src="vue-logo.png" />
      </div>
      <p>ShuriDash</p>
    </div>
    <div class="agreement_Content">
      <div class="cardform">
          
        <b-container class="content">
          <div class="Title">
            <b-row>
              <div class="icon_container">
                <span class="agree_icon"></span>
              </div>
            </b-row>
            <b-row>
                <b-col md="12" sm="12" class="mainTitle">
                 <p >User agreement</p>
                </b-col>
            </b-row>
          </div>
          <b-row >
            <p>
              By signing up, you agree to
              <b>Shuri school’s</b>
              <router-link to="#"> Terms of service</router-link> and
              <router-link to="#"> Privacy Policy</router-link>
            </p>

            <p>
              You also agree to remind collection Information from you in
              order to provide our service. This information includes your
              name, your email, your phone number. <router-link to="#">Learn more</router-link> </p>
           
          </b-row>
          <b-row>
            <b-col md="6" sm="6">
              <button class="decline">Decline</button>
            </b-col>
            <b-col md="6" sm="6">
              <button class="accept">Accept</button>
            </b-col>
          </b-row>
        </b-container>
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
@import "../../assets/style/Forms/agreement.scss";
</style>