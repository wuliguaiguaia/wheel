import Vue from 'vue';
import app  from './app';
import ZWheel from "./../src/index";
// import "./icon/iconfont.scss";
import "./../src/styles/components/index.scss";


Vue.use(ZWheel);
Vue.config.productionTip = false;

new Vue({
  render: h => h(app)
}).$mount("#app");