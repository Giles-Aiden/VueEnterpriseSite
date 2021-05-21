import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css'; //Vuesax styles
Vue.use(Vuesax);

import AOS from "aos";
import "aos/dist/aos.css";
App.AOS = new AOS.init();

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
Vue.use(PrimeVue);
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import ProgressBar from 'primevue/progressbar';
Vue.component('Splitter', Splitter);
Vue.component('SplitterPanel', SplitterPanel);
Vue.component('ProgressBar', ProgressBar);

import Editor from 'vue-image-markup';
Vue.component('Editor', Editor);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
