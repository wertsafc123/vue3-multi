const findEntries = require('./findEntries')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const argv = require('yargs').argv

let entry = {}
if (argv.page) {
	entry[argv.page] = `./src/pages/${argv.page.replace('-', '/')}/app.js`
} else {
	entry = findEntries('./src/pages', 'app.js')
}
module.exports = {
	mode: 'development',
	entry,
	output: {
		path: __dirname + '/public/js',
		publicPath: '/js/',
		filename: '[name].bundle.js',
		pathinfo: false
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: [
					'vue-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					"less-loader",
				]
			},
			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 1024
					}
				}
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: '../css/[name].css',
			chunkFilename: '../css/[name].css'
		})
	]
}