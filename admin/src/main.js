import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import Vuesax from 'vuesax';

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css';
Vue.use(PrimeVue); //icons
import Chart from 'primevue/chart';
Vue.component('Chart', Chart);
import ToastService from 'primevue/toastservice';
Vue.use(ToastService);

import 'vuesax/dist/vuesax.css'; //Vuesax styles
Vue.use(Vuesax, {
  /*
  colors: {
    primary:'#113F70',
    secondary: '#185CA3',
    success:'rgb(23, 201, 100)',
    danger:'rgb(242, 19, 93)',
    warning:'rgb(255, 130, 0)',
    dark:'rgb(36, 33, 69)',
  }
  */
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
