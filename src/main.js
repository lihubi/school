import Vue from "vue/dist/vue.esm.js";
import App from './App.vue'
import router from "./router";
//mui引入
import './lib/mui/dist/css/mui.min.css';
//mint-ui引入
// import { Tabbar, TabItem } from 'mint-ui';
// import 'mint-ui/lib/style.css';
// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');