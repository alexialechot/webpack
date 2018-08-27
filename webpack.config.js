const {
    resolve
} = require('path')

let config = {
    mode: 'none',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, './dist')
    }

}
