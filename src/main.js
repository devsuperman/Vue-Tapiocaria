import Vue from 'vue'
import App from './App.vue'
import router from "../router";
import VueResource from "vue-resource";
import './plugins/vuetify'

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.options.root = 'https://tapiocaria.azurewebsites.net/api/';

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
