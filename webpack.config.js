const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath:'/'
	},
	devServer:{
		disableHostCheck: true,
		historyApiFallback: true
	},
	module: {
		rules: [
			{test: /\.(js|jsx)$/, use: 'babel-loader'},
			{
				test: /\.css$/,
				use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
			},
			{
				test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
			}
		]
	},
	mode: 'development',
	plugins: [
		new CleanWebpackPlugin({
			verbose: true
		}),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
};
