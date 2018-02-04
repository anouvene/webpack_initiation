const webpack = require('webpack');
const path = require('path');
// Compiler scss en css
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
// Minification JS
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
// Minification css
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");
// Dashboard de webpack dans la console
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require("webpack-dashboard/plugin");
const dashboard = new Dashboard();
const myPort = 9001;

let config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    },
    module: { // convertir en ES6 en ES5
        rules: [
            {
                test: /\.js$/, // identifier tous les fichiers se terminant par .js
                exclude: /node_modules/, // exclure de ces fichiers tous ceux qui se situent dans node_modules
                loader: "babel-loader" // charger le loader Babel Core babel-loader
            },
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'postcss-loader'],
                }))
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin("styles.css"),
        new DashboardPlugin({
            port: myPort,
            handler: dashboard.setData
        })
    ],
    devServer: {
        /**
         * contentBase : indique le dossier depuis lequel le contenu sera servi
         * historyApiFallback : activation d’un fallback vers index.html pour les Single Page Applications
         * inline : active la diffusion de messages dans la console DevTools
         * open : ouvre votre navigateur par défaut lorsque le serveur est lancé
         * hot : active le Hot Module Reload, soit le rechargement automatique de vos modules à chaque
         * modification/sauvegarde de vos fichiers
         */
        contentBase: path.resolve(__dirname, "./public"),
        compress: true,
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true,
        port: myPort,
        host: '127.0.0.1',
        quiet: true,   // important
    },
    devtool: "eval-source-map"
}

module.exports = config;

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeCSSAssets()
    );
}