const path = require("path")

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, "src/scripts/index.js"),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    experiments: {
        topLevelAwait: true,
    },
    devtool: 'source-map',
}