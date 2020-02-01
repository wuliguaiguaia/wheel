import Vue from "vue";
import "./icon/iconfont.scss";

import Button from './components/button/button';
import ButtonGroup from "./components/button/button-group"

Vue.component('z-button', Button);
Vue.component('z-button-group', ButtonGroup);

new Vue({
    el: '#app',
    methods:{
        stop(){
            console.log('stop');
            
        }
    }
})