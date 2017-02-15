module.exports = function(config) {

    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [{
            pattern: 'src/test/main.spec.js'
        }],
        exclude: [

        ],
        preprocessors: {
            'src/test/main.spec.js': ['webpack']
        },
        webpack: require('./webpack.config'),
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity
    });
};