import Vue from 'vue';
import VueSSE from 'vue-sse';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueSSE);

new Vue({
  render: h => h(App),
}).$mount('#app');
