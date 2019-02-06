import Vue from 'vue';
import axios from 'axios';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(mavonEditor);

const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.common.Authorization = `JWT ${token}`;
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
