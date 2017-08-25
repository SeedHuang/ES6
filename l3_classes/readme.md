# ES6 class

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

***_createClass***
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

从返回值来看，最终返回的还是一个构造函数，这个函数指定对应的静态方法／属性、实例方法／属性，
仔细看一下defineProperties方法如下：
其中有一些Object.defineProperty的知识需要[普及](./defineProperty.md)一下，主要看一下在指定一个class的的属性和对象默认的都是不可枚举的，这样也是可以最大限度保证安全性和隐秘性。每个属性和方法都是可以被重写的。





***_classCallCheck***
> 用于验证是否直接把类别当成方法来使用

```
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
```

方法可以看出，假设一个class别直接被当成一个方法来使用，报错<span sytle="color:red">"Cannot call a class as a function"</span>
