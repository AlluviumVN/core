const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const utils = require('./utils.js');

module.exports = {
    entry: [
        'react-hot-loader/patch', 
        './src/index.tsx',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server'
    ],
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.css$/i,
                loader: 'css-loader',
                options: {
                    url: true,
                },
            },{
                test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
                loader: 'file-loader',
                options: {
                  digest: 'hex',
                  hash: 'sha512',
                  //**** show images ****/
                  name: 'images/[hash].[ext]',
                  publicPath: '/',
                  outputPath: '../'  
                }
              },
              {
                test:/\.less$/,
                use: ["css-loader", "less-loader"]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '*.*'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            src: utils.root('src/')
          },
        modules: ['node_modules'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../public/js'),
        publicPath: 'public/',
    },
    devServer: {
        contentBase: path.join(__dirname, "../public/"),
        headers: { 'Access-Control-Allow-Origin': '*' },
        port: 3000,
        noInfo: false,
        quiet: false,
        hot: true,
        publicPath: '../public/',
        writeToDisk: true
      },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new CleanWebpackPlugin(),
    ]
};