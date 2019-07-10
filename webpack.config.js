const path = require('path')

module.exports = {
    mode:'development',
    entry:'./lib/index.tsx',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'rui.js',
        libraryTarget:'umd'
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'awesome'
            }
        ]
    }
}