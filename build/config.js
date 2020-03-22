var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');
var externals = {};

Object.keys(Components).forEach(function(key) {
	externals[`zWheel/src/components/${key}`] = `zWheel/lib/${key}`;
});

externals = [
	Object.assign(
		{
			vue: 'vue'
		},
		externals
	),
	nodeExternals()
];exports.externals = externals;
