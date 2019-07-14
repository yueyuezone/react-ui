const path = require('path')

module.exports = {

    entry:'./lib/index.tsx',
    output:{
        path:path.resolve(__dirname,'/dist'),
        filename:'rui.js',
        libraryTarget:'umd'
    },
    module:{
        rules:[
            {
                test:/.jsx?$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                },
                exclude:/node_modules/
            },
            {
                test:/\.tsx?$/,
                loader:'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            },
            {
                test:/\.s[ac]ss$/,
                loader: ['style-loader','css-loader','sass-loader']
            },
            {
                test:/.tsx?$/,
                enforce:'pre',
                use:[{loader:'tslint-loader'}]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.js', '.jsx']
      }

    

}