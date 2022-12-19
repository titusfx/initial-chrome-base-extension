const { join } = require("path");
const { optimize } = require("webpack");
/*
Out of the box, webpack won't require you to use a configuration file. However, it will assume the entry point of your 
project is `src/index.js` and will output the result in `dist/main.js` minified and optimized for production.

createapp.dev[https://createapp.dev/webpack] is an online tool for creating custom webpack configuration.
It allows you to select various features that will be combined and added to resulting configuration file

Usually your projects will need to extend this functionality, for this you can create a `webpack.config.js` file in the root folder
 and webpack will automatically use it.

If for some reason you want to use different configuration file depending on certain situations, you can change this 
via command line by using the --config flag.

In `package.json`
"scripts": {
  "build": "webpack --config prod.config.js"
}

In our chrome extension we use:

"watch": "npm run clean && npm-run-all --parallel watch:*",
"watch:chrome": "webpack --config chrome/webpack.config.js -w",

*/

const RELATIVE_PROJECT_DISTRIBUTION_PATH = "../../dist/base-extension";
const RELATIVE_CONTENT_PAGE_PATH = "src/contentPage.ts";
const RELATIVE_SERVICE_WORKER_PATH = "src/serviceWorker.ts";

module.exports = {
    mode: "production",
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
    plugins: [
        new optimize.AggressiveMergingPlugin(),
    ],
    resolve: {
        extensions: [".ts", ".js"],
    },
};