const withPlugins = require("next-compose-plugins");
const withSass = require("@module-federation/next-sass");
const withTranspileModules = require("@module-federation/next-transpile-modules");

module.exports = withPlugins([
    [
        withSass,
        {
            cssModules: false,
            cssLoaderOptions: {
                importLoaders: 1,
            }
        }
    ],
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
