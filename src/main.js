// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import invoiceList from './invoiceList'
//import Vuex from 'vuex'
import { store } from './store/store'

Vue.component('list',invoiceList)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  components: { App },
  template: '<App/>'
})

//Vue.use(Vuex)
