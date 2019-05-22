import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import store from './store/rootStore.js';
import animateCss from './css/animate.css';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
