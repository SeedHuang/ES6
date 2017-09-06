module.exports = {
        entry: {
            "bundle1":['babel-polyfill', `${__dirname}/js/main.js`],
            "bundle2":['babel-polyfill', `${__dirname}/js/main2.js`]
        },
        output: {
                path: `${__dirname}/dist`,
                filename: `[name].js`
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
