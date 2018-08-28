const {
	resolve
} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

let config = {
	mode: 'none',
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: 'assets/js/[name].bundle.js',
		path: resolve(__dirname, './dist/assets/')
	},

	/** DevTools */
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
		host: 'localhost',
		port: 9000
	},

	/** module -> rule */
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(png|svg|jpg|jpeg|gif)$/,
			use: ['file-loader']
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ['file-loader']
		}]
	},

	/** plugin Webpack */
	plugins: [
		new CleanWebpackPlugin(['./dist/assets/']),
		new HtmlWebpackPlugin({
			title: 'Webpack Base',
			myPageHeader: 'Webpack base configuration',
			filename: 'index.html',
			template: './src/templates/index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = config
