# Learning ES6

## How to translate ES6
ES6截止chrome61仍然有一些功能无法实现，比如class和import class，对于这些缺失以及对于之前的兼容性，`babel`仍然是我们最好的选择。

Install `babel-core`, `babel-loader`, `babel-preset-es2015`
```
 npm install --save-dev babel-core babel-loader babel-preset-es2015

```

### webpack.config.js
```
module.exports = {
    "entry": `${__dirname}./js/main.js`,
    "output": {
        filename: 'bundle.js',
        path: `${__dirname}/dist/`
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    "presets": ["2015"]
                }
            }
        ]
    }
}
```

## 参数

name        |type                   |description
------------|-----------------------|-----------------------
modules     |function               |模块声明



## properties
### __webpack_require__.m = modules

> 缓存所有的模块声明，通过属性m暴露出来

### __webpack_require__.c = installedModules

> 所有已经安装过的module

所谓`installedModules`他与参数`modules`不是同一个概念

#### 数据结构
##### modules：
它是一个数组，里面存储的是都是函数声明，这些函数的内容就是开发者在单个js文件所写的内容，而函数是有webpack编译过程添加的模式模式化代码，这就是为什么在开发者编写模块的时候并没有 module, exports, __webkit_require__, 但是在运行的时候依然可以调用呢这些对象和函数的原因。

#### installedModules
它是一个Object对象（keyValuePair），每一个key都是一个对象，里面存储着模块相关的信息

name        |type               |description
------------|-------------------|----------------------------
moduleId    |object             |moduleInfo


moduleInfo:

name        |type               |description
------------|-------------------|----------------------------
moduleId    |string             |模块的名称，该名称是modules数组中，模块声明对应数组中的索引
l           |boolean            |模块声明是否已经被加载（运行）过，在运行之后，该属性会被赋值为true
exports     |object             |模块声明运行的产出物，他没有特定的类型，string/object/array等都可以，产出物被cache在在exports属性中，从狭义上来说，exports存储的是真正的模块实例。



### __webpack_require__.p = "";

## ES5 Module vs ES6 Module

![es5modulevses6module](./imgs/es5modulevseses6module.png)
从图中可以看到，es5模块，比es6模块中，附加的function要少的多。
es5模块中没有
- _interopRequireDefault
-

## Webpack中的重要函数

### _interopRequireDefault

```
function _interopRequireDefault(obj) {
    if(obj && obj.__esModule) {
        return obj;
    }
    else {
        return { default: obj };
    }
}
```

> es6模块默认有一个default作为输出当前实例，所以如果是__esModule，就直接返回对象，如果不是__esModule就对返回值进行一层包装，添加一个default属性并把当前object作为default的value；

参数

name    |type       |description
--------|-----------|--------------------------
obj     |object     |模块实例


## ES6 class

示例：

```
function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var Body = function() {
        function Body(message) {
            _classCallCheck(this, Body);
            this.message = message;
        }
        _createClass(Body, [{
            key: "toString",
            value: function toString() {
                return "<div class=\"body\">" + this.message + "</div>";
            }
        }]);
        return Body;
    }();
    exports.default = Body;
}
```


ES6的class转化成ES5之后会在原本的模块内产生两个新的私有方法

_createClass
> javascript的类别都是由构造函数实现的，createClass就是创建一个构造函数，并将静态属性和方法，以及实例的属性和方法通过Object.defineProperty的方式与构造函数或者实例进行关联。

以下是createClass的具体方法

```
var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
```

其中有一些Object.defineProperty的知识需要普及一下：

***enumerable(可枚举)***

我通过解释以下2个问题来说明一下？
- 如何说明一个属性或者方法是可以枚举的呢？
    有两种方法：`Object.keys(...)`以及`for ... in`循环    
- 在何种情况下才需要用到可枚举的属性？
    当用户并不知道在一个对象下究竟有什么属性和方法的时候，任何可枚举的属性都可以在`Object.keys(...)`以及`for ... in`循环中显现出来，不可枚举的就无法显示。

所以可枚举的作用在尽可能的保护对象属性不被非作者方所使用。 但同样如果你知道有可能有一个属性或者方法也选择可以直接打印对应的属性和方法

***示例***

```
var a = {};
Object.defineProperty(a, 'hello', {
    enumerable: false,
    value: function(){
        alert("hello")
    }
});
for(var key in a) console.log(key)
Object.keys(a) // []
console.log(a.hello) //ƒ (){alert("hello")}
```

***configurable(可配置)***

可配置是指是否可以添加或者删除一个属性或者方法

```
var a = {};
Object.defineProperty(a, 'hello', {
	configurable:false
});
a.hello = 1;
console.log(a.hello); // undefine
Object.defineProperty(a, 'hello', {
	configurable:true
});

```

<span style="color:red">
VM129:2 Uncaught TypeError: Cannot redefine property: hello <br/>
    at Function.defineProperty (&lt;anonymous&gt;)<br/>
    at &lt;anonymous&gt;:2:8</span>


`configurable`一旦设置为false，就没有办法再设置为`true`,但是反过来如果一开始设置为true，之后在设置为false，这样是可以的

```
var a = {};
Object.defineProperty(a, 'hello', {
	configurable:true
});
console.log(a.hello); // undefine
Object.defineProperty(a, 'hello', {
	configurable:false
});
a.hello = 1;
console.log(a.hello);
// undefine
```

***writable(可写)***

可写和只读是对应的，在`writable:false`，但是`configurable`没有设置的情况下，如设置了`writeable:true`的，则`configurable`将被默认设置为`false`，除非显示声明设置`configurable:true`，



```
var a = {};
function alertMethod () {
    alert("hello");
}
Object.defineProperty(a, 'hello', {
    writable: false,
    value: alertMethod
});
a.hello = 1;
console.assert(a.hello == alertMethod , 'a.hello is readonly');
delete a.hello;
console.assert(a.hello === undefined, 'a.hello is configurable and readonly');
```
结果：
<span style="color:red">VM269:12 Assertion failed: a.hello is configurable and readonly</span>

```
var a = {};
function alertMethod () {
    alert("hello");
}
Object.defineProperty(a, 'hello', {
    configurable: true,
    writable: false,
    value: alertMethod
});
a.hello = 1;
console.assert(a.hello == alertMethod , 'a.hello is readonly');
delete a.hello;
console.assert(a.hello === undefined, 'a.hello is configurable and readonly');
```
结果：
<span style="color:green">passed</span>

_classCallCheck
> 用于验证是否直接把类别当成方法来使用
