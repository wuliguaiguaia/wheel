if (!process.argv[2]) {
	console.error('[组件名]必填 - Please enter new component name');
	process.exit(1);
}

const path = require('path');
const fs = require('fs');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
const componentname = process.argv[2];
const chineseName = process.argv[3] || componentname;
const ComponentName = uppercamelcase(componentname);
const ComponentPath = path.resolve(__dirname, '../../src/components', componentname);

const Files = [
	// 组件入口
	{
		filename: 'index.js',
		content: `import Z${ComponentName} from './src/main';

Z${ComponentName}.install = function(Vue) {
  Vue.component(Z${ComponentName}.name, Z${ComponentName});
};

export default Z${ComponentName};`
	},
	// 组件源码
	{
		filename: 'src/main.vue',
		content: `<template>
  <div class="z-${componentname}"></div>
</template>

<script>
export default {
  name: 'Z${ComponentName}'
};
</script>`
	},
	// 组件md文档
	{
		filename: path.join('../../../sites/docs', `${componentname}.md`),
		content: `## ${ComponentName} ${chineseName}`
	},
	// 单元测试
	{
		filename: path.join('../../../tests/unit', `${componentname}.spec.js`),
		content: `import { destroyVM, createTest } from './utils';
import ${ComponentName} from '@/components/${componentname}';
import { expect } from 'chai';

describe('${ComponentName}', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it("create", () => {
    vm = createTest(${ComponentName});
    expect(vm.$el).to.exist;
  });
});
`
	},
	// 样式文件
	{
		filename: path.join(
			'../../../src/styles/components',
			`${componentname}.scss`
		),
		content: `@import "../mixins/mixins";
@import "../common/var";
@import "../common/reset.scss";

@include b(${componentname}) {
}`
	}
];

// 添加到components.json
const componentsFile = require('../../components.json');
if (componentsFile[componentname]) {
	// console.error(`${componentname} 已存在.`);
	// process.exit(1);
}
componentsFile[componentname] = `./src/components/${componentname}/index.js`;
fileSave(path.join(__dirname, '../../components.json'))
	.write(JSON.stringify(componentsFile, null, '  '), 'utf8')
	.end('\n');

// 添加到index.scss
const sassPath = path.join(__dirname, '../../src/styles/components/index.scss');
const sassImportText = `${fs.readFileSync(sassPath)}@import "./${componentname}.scss";`;
fileSave(sassPath)
	.write(sassImportText, 'utf8')
	.end('\n');

// 创建 package
Files.forEach(file => {
	console.log(path.resolve(ComponentPath, file.filename));
	
	fileSave(path.join(ComponentPath, file.filename))
		.write(file.content, 'utf8')
		.end('\n');
});


console.log(`#######添加 [${componentname}] done!######`);