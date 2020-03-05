const withPlugins = require("next-compose-plugins");
const withCss = require("@module-federation/next-css");
const withTranspileModules = require("next-transpile-modules");

module.exports = withPlugins([
    [
        withCss,
        {
            cssModules: false,
            cssLoaderOptions: {
                importLoaders: 1,
                localIdentName: "[local]___[hash:base64:5]"
            }
        }
    ],
    // withTranspileModules,
    // {
    //     transpileModules: [
    //         "../something.js",
    //     ]
    // }
], {
    // works with serverless too
    // target: 'serverless',
    onDemandEntries: false,
    typescript: {
        ignoreDevErrors: true,
    },
    experimental: {
        modern: false
    },
});
