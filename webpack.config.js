var path = require('path');
var webpack = require('webpack');

module.exports = (function() {

    var jsLoader = {
        test: /\.js$/,
        loader:'babel',
        exclude:/node_modules/,
        query: {presets: ['es2015', 'stage-0']}
    };

    var base = {
        output: {filename: 'spec.js'},
        module: {
            devtool: 'inline-source-map',
            loaders: [jsLoader],
        },
        resolve: {
            extensions: ['', '.js'],
            alias: {
                src: path.resolve(__dirname, 'src'),
                test: path.resolve(__dirname, '.test'),
            },
        },
    };

    function testConfig() {
        base.module.noParse = [/sinon/];
        base.plugins = [
            new webpack.NormalModuleReplacementPlugin(/sinon/,
                path.resolve(__dirname, '.test/vendors/sinon/sinon1.17.5.min.js')),
        ]
        return base;
    }

    return {
        test: testConfig(),
    }

}());
