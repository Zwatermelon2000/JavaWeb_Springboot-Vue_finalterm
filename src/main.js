// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Login from './views/Login'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import Vuex from 'vuex'

Vue.use(ElementUI);

Vue.config.productionTip = false

var axios = require('axios')
// Vue.use(VueAxios, axios);
// Vue.use(Vuex);

axios.defaults.baseURL = 'http://localhost:8002';
Vue.prototype.HOST='/manager'
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, Login},
  template: '<App/>'
})
