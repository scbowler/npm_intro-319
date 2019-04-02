"use strict";

const path = require('path');

module.exports = {
    mode: 'none',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname),
        publicPath: '/dist'
    }
};
