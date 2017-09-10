// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Fastclick from 'fastclick'

//引入自定义组件
import components from './components'

Vue.config.productionTip = false

window.onload = () => Fastclick.attach(document.body);

Object.keys(components).forEach(k => {
	let name = k.replace(/\w/, v => v.toUpperCase());
	Vue.component(`v${name}`, components[k]);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
