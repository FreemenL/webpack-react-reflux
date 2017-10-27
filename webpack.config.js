const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')//自动生成html文件
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');//清理dist目录
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const srcPath = path.resolve(__dirname,'src');
const defaultSet = require('./config/default.js')
const config = {
	entry:defaultSet.entry,
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist'),
		publicPath:'/'
	},
	devtool: 'inline-source-map',//定位错位位置
	devServer:{//浏览器自动刷新,需下载webpack-dev-server
		contentBase:path.join(__dirname, "dist"),
		port:8000,
		hot:true,//开启热更新
	},
	module:defaultSet.module,
	plugins:[
		//new webpack.optimize.UglifyJsPlugin(),//压缩打包后文件
		new ConsoleLogWebpackStart(),//自定义插件
		new webpack.HotModuleReplacementPlugin()
	].concat(defaultSet.plugins),
	resolve:defaultSet.resolve
}
function ConsoleLogWebpackStart(){

}
ConsoleLogWebpackStart.prototype.apply = function(compiler){
		compiler.plugin('run',function(compiler,callback){
			console.log('package start!');
			callback();
		})
}
module.exports = config;
