// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'font-awesome/css/font-awesome.css';
import 'vue-directive-tooltip/css/index.css';


import Vue from 'vue';
import vueSmoothScroll from 'vue-smooth-scroll';
import Tooltip from 'vue-directive-tooltip';
import App from './App';

Vue.use(Tooltip);
Vue.use(vueSmoothScroll);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  filters: {
    two_digits: (value) => {
      if (value.toString().length <= 1) {
        return `0${value.toString()}`;
      }
      return value.toString();
    },
  },
});

