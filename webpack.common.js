const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.resolve(__dirname,'src');

module.exports = {
	entry:{
		app:'./src/index.js'
	},
	output:{
		filename:'assets/[name].[chunkhash].js',
		path:path.resolve(__dirname,'dist')
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new webpack.optimize.CommonsChunkPlugin({
			name:'common'//指定公共bundle的名称。
		}),
		new HtmlWebpackPlugin({
			title:'learn webpack!',
			template:'./public/index.html'
		})
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
	},
	resolve:{
		extensions: [".js", ".json",".jsx"],
		alias:{//配置路径常量
			components:`${srcPath}/components`,
			styles:`${srcPath}/styles`,
			images:`${srcPath}/images`,
			router:`${srcPath}/router`,
			libs:`${srcPath}/libs`
		}
	}
};