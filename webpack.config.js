const {
	resolve
} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

/** Host Port and proxy */
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 9000
const PROXY = `http://${HOST}:${PORT}`

let config = {
	mode: 'none',
	watch: true,

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
		host: HOST,
		port: PORT
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
		new BrowserSyncPlugin({
			host: HOST,
			port: PORT,
			proxy: PROXY
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = config
