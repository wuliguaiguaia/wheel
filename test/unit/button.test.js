import { destroyVM, createTest } from "./utils"
import Button from "../../src/components/button/button";
const expect = chai.expect;


// 1\done 异步代码测试 哪的异步？
describe("Button",() => {
	let vm;
	afterEach( done => {
		destroyVM(vm);
		done()
	});

	it("create", done => {
		vm = createTest(Button, {
			type: "primary"
		})
		let el = vm.$el;
		expect(el.classList.contains("z-button--primary")).to.be.true;
		done();
	});

	it("nativeType", done => {
		vm = createTest(Button, {
			nativeType: "submit"
		})
		let el = vm.$el;
		expect(el.getAttribute("type")).to.equal("submit");
		done();
	});

	it("click", done => {
		vm = createTest(Button)
		let callback = sinon.fake();
		vm.$on("click", callback);
		let el = vm.$el;
		el.click();
		expect(callback).to.have.been.called;
		done();
	});
});
