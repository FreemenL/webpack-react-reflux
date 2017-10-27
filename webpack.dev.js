//开发环境配置
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const common = require('./config/default.js');

common.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = merge(common,{
	output:{
		filename:'assets/[name].bundle.js',
		path:path.resolve(__dirname,'../dist')
	},
	devtool:"inline-source-map",
	devServer:{
		contentBase:'./dist',
		port:8000,
		hot:true
	}
});




