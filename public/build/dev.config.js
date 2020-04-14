'use-strict';

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './public/src/js/App.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};