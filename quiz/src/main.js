import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import helpers from './helpers'

// Install BootstrapVue
Vue.use(BootstrapVue);
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)
Vue.config.productionTip = false;


/*
 * create a customer plugin and use as helper
 * example Vue.helpers.<method> or this.$helpers.<method>
 * */
const plugin = {
  install () {
    Vue.helpers = helpers
    Vue.prototype.$helpers = helpers
  }
}

Vue.use(plugin)

/*
 * this is like a helper function
 * can be used with this.<method>
 * */
// Vue.mixin({
//   methods: {
//     shuffle: array => array.sort(() => Math.random() - 0.5),
//   }
// });

new Vue({
  render: h => h(App),
}).$mount('#app');
