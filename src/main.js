import Vue from 'vue';
import Demo  from './demo';
import "./icon/iconfont.scss";

// import './common/var.scss';
import Button from "./components/button/button";
import ButtonGroup from "./components/button/button-group";

Vue.component("z-button", Button);
Vue.component("z-button-group", ButtonGroup);

Vue.config.productionTip = false;

new Vue({
  render: h => h(Demo)
}).$mount("#app");