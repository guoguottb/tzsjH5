import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
// px转rem
import 'lib-flexible/flexible'
// 使用 canvas 实现手写电子签名
import vueEsign from 'vue-esign'
import initRichText from './utils/initHTMLEditor.js'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(vueEsign)
Vue.use(Vant);
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
