const ProductionDir = 'Production';

const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanUp = require('webpack-cleanup-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const AppCSS = new ExtractTextPlugin('app.[hash].css');
const ComponentCss = new ExtractTextPlugin('components.[hash].css');
module.exports = {
	entry: './src/assets/js/app.js',
	output: {
		path: Path.resolve(__dirname , ProductionDir),
		filename: 'app.[hash].js'
	},
	module: {
		rules: [
			{
			    test: /\.html$/,
			    use: ['html-loader']
			},
			{
				test: /\.scss$/,
				use: AppCSS.extract({
					use: ['css-loader' , {
						loader: 'sass-loader',
						options: {
							outputStyle: 'expanded'
						}
					}]
				})
			},
			{
				test: /\.sass$/,
				use: AppCSS.extract({
					use: ['css-loader' , {
						loader: 'sass-loader',
						options: {
							outputStyle: 'expanded'
						}
					}]
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(jpg|png|jpeg|gif)/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/'
						}
					}
				]
			},
			{
			  test: /\.vue$/,
			  loader: 'vue-loader',
			  options: {
			  	extractCSS: true,
			    loaders: {
			      'scss': ComponentCss.extract({
			          use: [
			            'css-loader',
			            'sass-loader'
			          ]
			      }),
			      'sass': ComponentCss.extract({
			          use: [
			            'css-loader',
			            'sass-loader'
			          ]
			      })
			    }
			    // other vue-loader options go here
			  }
			},
		]
	},
	plugins: [
		AppCSS,ComponentCss,
		new CleanUp('ProductionVersion'),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}