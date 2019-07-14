const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({},base,{
    mode:'development',
    plugins:[
        new HtmlWebpackPlugin({
            title:'首页显示',
            template:'index.html'
        })

    ]
})