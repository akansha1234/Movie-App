import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueAxios from './plugins/axios'

Vue.use(VueAxios)
Vue.config.productionTip = false
Vue.config.devtools = true;
new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
