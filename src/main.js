import Vue from 'vue';
import Demo  from './demo';
import "./icon/iconfont.scss";

// import './common/var.scss';
import Button from "./components/button/button";
import ButtonGroup from "./components/button/button-group";
import Icon from "./components/icon/icon";
import Input from "./components/input/input";
import Radio from "./components/radio/radio"

Vue.component("z-button", Button);
Vue.component("z-button-group", ButtonGroup);
Vue.component("z-icon", Icon);
Vue.component("z-input", Input);
Vue.component("z-radio", Radio);

Vue.config.productionTip = false;

new Vue({
  render: h => h(Demo)
}).$mount("#app");