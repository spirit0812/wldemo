import Vue from 'vue';
import ElementUI from 'element-ui'
import echarts from 'echarts'
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
