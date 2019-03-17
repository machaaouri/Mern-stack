const webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./src/App.jsx']
    },
    output: {
        path: __dirname + '/static',
        filename: './app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/react', '@babel/preset-env']
                }
            },
        ]
    },
    plugins:[],
    devtool: 'source-map',
    devServer: {
        port: 8000,
        contentBase: 'static',
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000'
            }
        }
    }
};