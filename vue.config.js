const path = require('path');

function resolve(dir){
	return path.resolve(__dirname, dir);
}


module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/public/' : '/',
	devServer: {},
	pages: {
		index: {
			entry: 'sites/main.js',
			template: 'sites/index.html',
			// 在 dist/index.html 的输出
			filename: 'index.html',
			// 当使用 title 选项时，
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title: 'zWheel',
			// 在这个页面中包含的块，默认情况下会包含
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		}
	},
	css: {
		// 启用 CSS modules
		// requireModuleExtension: false,
		// 是否使用css分离插件
		extract: true,
		// 开启 CSS source maps，一般不建议开启
		sourceMap: false
	},
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('./src'))
			.set('sites', resolve('./sites'))
			.set('tests', resolve('./tests'))
			.set('zWheel', resolve('./'));
	}
};
