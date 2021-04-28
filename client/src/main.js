import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)

import PrimeVue from 'primevue/config';
Vue.use(PrimeVue);
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
Vue.component('Splitter', Splitter);
Vue.component('SplitterPanel', SplitterPanel);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
