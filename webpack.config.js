const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry:'./lib/index.tsx',
    output:{
        path:path.resolve(__dirname,'/dist'),
        filename:'rui.js',
        libraryTarget:'umd'
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'awesome-typescript-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.js', '.jsx']
      },
    plugins:[
        new HtmlWebpackPlugin({
            title:'首页显示',
            template:'index.html'
        })

    ]
    

}