import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes.js';

require('file-loader?name=[name].[ext]!../index.html');

Vue.use(VueRouter);

const router = new VueRouter( {
  routes
});

new Vue({
  el: '#blog',
  router,
  render: h => h(App)
})
