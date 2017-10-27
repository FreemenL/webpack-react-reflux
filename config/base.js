const path = require('path');
const srcPath = path.resolve(__dirname,'../src');
const baseSet = {
	entry:{
		app:path.resolve(__dirname,'../src/index.js')
	},
	output:{
		filename:'assets/[name].[chunkhash].js',
		path:path.resolve(__dirname,'../dist')
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
module.exports = baseSet;