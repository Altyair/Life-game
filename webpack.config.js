'use strict';

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: 'none',
    entry: {main: './src/js/index.js'},
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            'mathematical-calculator': path.resolve(__dirname, './node_modules/mathematical-calculator'),
        }
    },

    watch: false,

    watchOptions: {
        aggregateTimeout: 100
    },

    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader']
                    })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'css/bundle.css',
        }),
    ],

    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: __dirname + '/public'
    }

};

