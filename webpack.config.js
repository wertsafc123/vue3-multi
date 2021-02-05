const path = require('path')
const findEntries = require('./findEntries')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

const entry = findEntries('./src/pages', 'app.js')

module.exports = {
	mode: 'development',
	entry,
	output: {
		path: __dirname + '/public/js',
		publicPath: '/js/',
		filename: '[name].bundle.js',
		pathinfo: false
	},
	devtool: 'inline-source-map',
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
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    chrome: 55,
                    edge: 15,
                    safari: '10.1',
                    firefox: 53
                  }
                }
              ]
            ]
          }
        }
      },
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
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
  devServer: {
    host: '0.0.0.0',
    contentBase: [
      path.join(__dirname, 'page'),
      path.join(__dirname, 'public')
    ],
    publicPath: '/js/',
    port: 9527,
    proxy: {},
    hot: true,
    watchContentBase: true
  },
	plugins: [
    new VueLoaderPlugin()
  ]
}