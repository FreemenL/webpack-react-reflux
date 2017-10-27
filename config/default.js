const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseSet = require('./base.js')


module.exports = {
	entry:baseSet.entry,
	output:baseSet.output,
	resolve:baseSet.resolve,
	plugins:[
		new CleanWebpackPlugin(['dist']),//清理dist目录
		new webpack.optimize.CommonsChunkPlugin({
			name:'common'//指定公共bundle的名称。
		}),
		new HtmlWebpackPlugin({
			title:'learn webpack!',
			template:'./public/index.html'
		})//自动生成html
	],
	module:{
		rules:[{
        test: /\.less/,
        use: ['style-loader',
        	'css-loader',
        	'less-loader'
        ]
      },{
				test:/\.bundle\.js$/,
				use:'bundle-loader'
			},{
				test:/\.(js|jsx)$/,
				use:'babel-loader'
			},{
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader'
       ]
     },{
     	test:/\.(png|svg|jpg|gif)/,
     	use:[
     		'file-loader',{
     			loader:'image-webpack-loader',
     			options:{
     				bypassOnDebug:true,
     			}
     		}
     	]
     },{
       test: /\.(woff|woff2|eot|ttf|otf)$/,
       use: [
         'file-loader'
       ]
     }
		]
	}
}
