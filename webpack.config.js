const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {

    mode: 'development',
    watch: false,
    context: path.resolve(__dirname, 'src'),

    entry: {
        main: './main.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '../src/assets/',
        filename: '[name].bundle.js',
        library: '[name]',
        environment: { arrowFunction: false}
    },

    optimization: {
        emitOnErrors: false
    },

    plugins: [
        new MiniCssExtractPlugin({filename:'[name].bundle.css'})
    ],

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    { loader: 'css-loader'}
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            }
        ]
    }
};

module.exports = config;