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


// 单元测试
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

{
    const constructor = Vue.extend(Button);
    const vm = new constructor({
        propsData: {
            type: 'primary'
        }
    });
    vm.$mount();
    let el = vm.$el;
    expect(el.classList.contains('z-button--primary')).to.be.true;
    el.remove();
    vm.$destroy();
}
{
    const constructor = Vue.extend(Button);
    const vm = new constructor({
        propsData: {
            nativeType: 'submit'
        }
    });
    vm.$mount();
    let el = vm.$el;
    expect(el.getAttribute('type')).to.equal('submit');
    el.remove();
    vm.$destroy(); 
}

{
    // 测试click - 1
    const constructor = Vue.extend(Button);
    const vm = new constructor();
    vm.$on('click', _=>{
        expect(1).to.equal(1)
    })
    vm.$mount();
    vm.$el.click();
    vm.$el.remove();
    vm.$destroy();
}

{
    // 测试click - 2 fail
    let result;
    const vm = new Vue({
        template: `<z-button @click=handleClick></z-button>`,
        methods:{
            handleClick (evt) {
                console.log(evt);
                result = evt;
            }
        }
    }).$mount();
    vm.$el.click();
    setTimeout(_=>{
        console.log(result);
        expect(result).to.exist;
        vm.$el.remove();
        vm.$destroy();
    }, 20)
}

{
    // 测试click - 1
    const constructor = Vue.extend(Button);
    const vm = new constructor();
    vm.$mount();
    let el = vm.$el;
    let spy = chai.spy(function(){});
    vm.$on('click', spy);
    el.click();
    // 确保被执行
    expect(spy).to.have.been.called()
    el.remove();
    vm.$destroy();
}
