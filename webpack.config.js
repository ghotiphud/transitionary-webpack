var webpack = require("webpack");
var path = require("path");
 
module.exports = {
    entry: {
        head: ["./libs/modernizr.js", "./libs/jquery.js"],

        index: "./app/index.js",
        page: "./app/page.js",

        mobile_index: "./app/mobile_index.js",
        mobile_page: "./app/mobile_page.js",
    },
    output: {
    filename: "[name].js",
    path: "./dist"
    },
    resolve: {
        alias: {
            jquery: path.resolve(__dirname, "libs/jquery.js"),
            modernizr: path.resolve(__dirname, "libs/modernizr.js"),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|libs\/)/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            },
            {
                include: path.resolve(__dirname, "libs/jquery.js"),
                loader: "expose-loader?jQuery!expose-loader?$",
            },
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "head",
            minChunks: Infinity,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "desktop_common",
            chunks: ["index", "page"],
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "mobile_common",
            chunks: ["mobile_index", "mobile_page"],
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            chunks: ["desktop_common", "mobile_common"],
        }),
        new webpack.ProvidePlugin({
            // $: "jquery",
            // jQuery: "jquery",
        })
    ],
    externals: {
        jquery: "jQuery",
    }
}