const { join } = require("path");

const RELATIVE_PROJECT_DISTRIBUTION_PATH = "../../dist/base-extension";
const RELATIVE_CONTENT_PAGE_PATH = "src/contentPage.ts";
const RELATIVE_SERVICE_WORKER_PATH = "src/serviceWorker.ts";

module.exports = {
    mode: "development",
    devtool: "inline-source-map", // Add source map support
    entry: {
        contentPage: join(__dirname, RELATIVE_CONTENT_PAGE_PATH),
        serviceWorker: join(__dirname, RELATIVE_SERVICE_WORKER_PATH),
    },
    output: {
        path: join(__dirname, RELATIVE_PROJECT_DISTRIBUTION_PATH),
        filename: "[name].js",
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.ts?$/,
            loader: "ts-loader"
        }, ],
    },
    plugins: [],
    resolve: {
        extensions: [".ts", ".js"],
    },
};