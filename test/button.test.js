import Vue from "vue";
import Button from "../src/components/button/button";
const expect = chai.expect;

Vue.config.productionTip = false;
Vue.config.devtools = false;

// 1\done 异步代码测试 哪的异步？
describe("Button",() => {
	it("create", done => {
		const constructor = Vue.extend(Button);
		const vm = new constructor({
			propsData: {
				type: "primary"
			}
		});
		vm.$mount();
		let el = vm.$el;
		expect(el.classList.contains("z-button--primary")).to.be.true;
		done();
		el.remove();
		vm.$destroy();
	});

	it("nativeType", done => {
		const constructor = Vue.extend(Button);
		const vm = new constructor({
			propsData: {
				nativeType: "submit"
			}
		});
		vm.$mount();
		let el = vm.$el;
		expect(el.getAttribute("type")).to.equal("submit");
		done();
		el.remove();
		vm.$destroy();
	});

	it("click", done => {
		const constructor = Vue.extend(Button);
		const vm = new constructor();
		let callback = sinon.fake();
		vm.$on("click", callback);
		vm.$mount();
		let el = vm.$el;
		el.click();
		expect(callback).to.have.been.called;
		done();
		el.remove();
		vm.$destroy();
	});
});
