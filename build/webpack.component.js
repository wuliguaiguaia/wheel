const path = require('path');
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Components = require('../components.json');
const config = require('./config');

const webpackConfig = {
	mode: 'production',
	target: 'node',
	entry: Components,
	output: {
		path: path.resolve(process.cwd(), './lib'),
		publicPath: '/dist/',
		filename: '[name].js',
		chunkFilename: '[id].js',
		libraryTarget: 'commonjs2'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: config.alias,
		modules: ['node_modules']
	},
	externals: config.externals,
	performance: {
		hints: false
	},
	stats: 'none',
	optimization: {
		minimize: false
	},
	module: {
		rules: [
			{
				test: /\.(jsx?|babel|es6)$/,
				include: process.cwd(),
				exclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
				loader: 'babel-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					compilerOptions: {
						preserveWhitespace: false
					}
				}
			},
			{
				test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: path.posix.join('static', '[name].[hash:7].[ext]')
				}
			}
		]
	},
	plugins: [new VueLoaderPlugin()]
};

module.exports = webpackConfig;
