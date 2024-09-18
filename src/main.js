import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import TestComponent from './components/TestComponent.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: '/test',
    component: TestComponent,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
