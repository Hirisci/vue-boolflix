import Vue from 'vue';
import App from './App.vue';

// import icon FontAwesomeIcon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
Vue.component('font-awesome-icon', FontAwesomeIcon);
//add in library
library.add(faMagnifyingGlass);
library.add(faSpinner);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
