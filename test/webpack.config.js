var path = require('path');
var VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	output: {
		path: __dirname + '/test/',
		filename: 'test.js'
	},	
	devtool: "sourcemap",
	mode: "development",
	module: {
		rules: [{
		// 	test: /\.vue$/,
		// 	exclude: /node_modules\/(?!bullets-js)/,
		// 	loader: 'vue-loader'
		// }, {
			test: /\.js$/,
			exclude: /node_modules\/(?!bullets-js)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@vue/babel-preset-jsx']
				}
			}
		}]
	},
	resolve: {
		modules: [
			path.resolve(__dirname, '../../public/js/src/'),
			"node_modules"
		],
		alias: {
			vue: __dirname + '/../public/js/libs/vue/dist/vue.js'
		}
	},
	// plugins: [
	// 	new VueLoaderPlugin()
	// ]
};