const webpack = require('webpack');
const path = require('path');

// Compiler scss en css
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

// Minification JS
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

// Minification css
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");

// Dashboard de webpack dans la console
const DashboardPlugin = require("webpack-dashboard/plugin");
const myPort = 9001;

//const OfflinePlugin = require('offline-plugin');
//const OfflinePlugin = require(path.resolve(process.cwd(), 'node_modules', 'offline-plugin'));

let config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    },
    module: {
        rules: [
            {
                // Convertir en ES6 en ES5
                test: /\.js$/, // identifier tous les fichiers se terminant par .js
                exclude: /node_modules/, // exclure de ces fichiers tous ceux qui se situent dans node_modules
                loader: "babel-loader" // charger le loader Babel Core babel-loader
            },
            {
                // SASS compileur
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'postcss-loader']
                }))
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin("styles.css"),
        //new DashboardPlugin()
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
        compress: false,
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true,
        port: myPort
    },
    devtool: "eval-source-map"
}

//module.exports = config;
if (process.env.NODE_ENV === 'production') {
    /*module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeCSSAssets()
    );*/
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),
        new OptimizeCSSAssets()
    );
} else {
    config.plugins.push(
        new DashboardPlugin()
    );
}

module.exports = config;

