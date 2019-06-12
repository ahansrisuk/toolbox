const path = require('path');

module.exports = {
    resolve: {
        alias: {
          vue$: 'vue/dist/vue.esm.js'
        }
    },
    entry: './resources/app.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'app.js'
    },
    mode: 'development',
    watch: true
};