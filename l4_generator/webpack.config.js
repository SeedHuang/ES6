module.exports = {
        entry: ['babel-polyfill', `${__dirname}/js/main.js`],
        output: {
                path: `${__dirname}/dist`,
                filename: `bundle.js`
        },
        module: {
                loaders: [
                        {
                                test: /\.js$/,
                                loader: 'babel-loader',
                                exclude: /(node_modules|bower_components)/,
                                query: {
                                        presets: ['es2015']
                                }
                }
            ]
        }
}
