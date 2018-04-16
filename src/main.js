// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Store from "./store/store";
import config from "@common/config";
import Router from '@common/router';


new Vue({
  el: '#app',
  store : Store,
  router : Router.getInstance().vueRouter,
  components: { App },
  template: '<App/>'
})
