import Vue from 'vue';
import App from './App.vue';

import CountryFlag from 'vue-country-flag';
Vue.component('country-flag', CountryFlag);
// import icon FontAwesomeIcon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
library.add(faMagnifyingGlass);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
