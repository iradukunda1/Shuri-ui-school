 <template>
  <div class="schoolreg">
      <div class="cardform">
        <div class="Tittle">
          <p class="text">Please provide this information to get started</p>
        </div>
        <div class="form">
          <form class="content">
            <label for="name">Name</label>
            <input type="text" placeholder="Name" class="namefield"/>
            <label for="sex">Sex</label>
            <select class="gender" name="sex" required>
              <option value disabled selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="female">Female</option>
            </select>
            <label for="bd">BirthDay?</label>
            <div class="dateSelectors">
              <select name="select" id="day" required>
                <option value selected disabled>Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">etc...</option>
              </select>
              <select name="select" id="month" required>
                <option value selected disabled>Month</option>
                <option value="january">january</option>
                <option value="february">february</option>
                <option value="march">etc...</option>
              </select>
              <select name="select" id="year" required>
                <option value selected disabled>Year</option>
                <option value="1960">1960</option>
                <option value="1961">1961</option>
                <option value="1962">etc...</option>
              </select>
            </div>
            <div class="country">
              <label for="country">Country</label>
              <select name="country" class="Country">
                <option value disabled selected>select country</option>
                <option value="rwanda">Rwanda</option>
                <option value="canada">Canada</option>
              </select>
            </div>
            <label for="Password">Password</label>
            <input type="password" />
            <p class="legal">
              By signing up, you agree to our 
              <router-link to="#" class="term">Terms of Service</router-link> and 
              <router-link to="#" class="term">Privacy Policy</router-link>
            </p>
            <button>
              <p class="continue">Get Started</p>
            </button>
          </form>
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
@import "../../assets/style/employerProfile.scss";
</style>