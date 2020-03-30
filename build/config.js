var path = require('path');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');
var externals = {};

Object.keys(Components).forEach(function(key) {
	externals[`z-wheel/src/components/${key}`] = `z-wheel/lib/${key}`;
});

externals = [
	Object.assign(
		{
			vue: 'vue'
		},
		externals
	),
	nodeExternals()
];

exports.alias = {
	'z-wheel': path.resolve(__dirname, '../')
};

exports.externals = externals;
