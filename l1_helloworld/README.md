# Start hello world

##  这里我们写一个最简单的例子，如何使用export和import，使用的是webpack 2.5.1版本

#### webpack.config.js
> 这是一个最简单的webpack使用的例子



```
module.exports = {
    // 入口js，就是编译之前的js入口
    entry: `${__dirname}/js/main.js`,
    // 产出路径配置
    output: {
        // 产出的路径
        path: `${__dirname}/dist`,
        // 产出的文件名称
        filename: `bundle.js`
    }
}
```
