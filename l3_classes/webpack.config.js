module.exports = {
        entry: `${__dirname}/js/main.js`,
        output: {
                path: `${__dirname}/dist`,
                filename: `bundle.js`
        },
        module: {
                loaders: [
                        {
                                test: /\.js$/,
                                loader: 'babel-loader',
                                query: {
                                        presets: ['es2015']
                                }
                }
            ]
        }
}
