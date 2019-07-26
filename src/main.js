import Vue from 'vue'
import App from './App.vue'
import Router from './routes/router.js'
import Store from "./store/store.js";
import bootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(bootstrapVue)
Vue.config.productionTip = false;

new Vue({
  router:Router,
 store:Store,
  render: h => h(App),
}).$mount('#app');