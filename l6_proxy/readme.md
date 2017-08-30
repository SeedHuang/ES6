# Proxy

> Proxy是对一个对象的代理，它相当于一个保护层

## get & set

### 用于对象

```
var obj = {};

var proxyObj = new Proxy(obj, {
    get (target, property) {
        if(property == "time") {
            return "We haven't time!";
        }
        return target[property];
    },
    set (target, property, value) {
        if(property == "name") {
            target[property] = "I'm Seed Huang"
        }
    }
});

/*alert(proxyObj.time);*/
console.log(proxyObj);
/*proxyObj.name = "What's your name";
alert(proxyObj.name);*/
```

## construct(用于构造函数)

```
var ProxyFunc = new Proxy(
    (firstName, lastName) => {
        this.name = firstName + lastName
    }, {
        construct(){
            console.log(arguments)
            return {
                "message": "This is a show test"
            }
        }
    }
);

var instance = new ProxyFunc("Seed", "Huang");
// console.log(arguments) return: [ƒ, Array(2), ƒ, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// new construct return {message: "This is a show test"}
```

***参数***

index   |type       |description
--------|-----------|-------------------------------
0       |func       |原始构造函数
1       |array      |参数
2       |func       |新construct

***返回值***

type           |description
---------------|----------------------
object         |construct的return值是作为new Proxy()真正返回值





## deleteProperty

> deleteProperty拦截器应该是最可以体现`Proxy`对于对象保护措施的作用。

***参数***

name        |type           |description
------------|---------------|----------------------
target      |obj            |原对象
property    |string         |属性名称

***返回值***

type           |description
---------------|----------------------
boolean        |true删除成功 ／ false表示删除不成功，但是和实际有没有删除没有关系，使用`.`操作依然可以拿到实际的值

> deleteProperty主要是拦截 delete操作符的，和delete默认行为一样，返回一个`boolean`值，说明属性是否已经删除，但是其实无论返回`true`还是`false`,这个和实际的target是没有任何关系的。

```
var proxyObj = {
    firstName: "Seed",
    lastName: "Huang"
};

var obj = new Proxy(proxyObj, {
    deleteProperty(target, property){
        return true;
    }
});
console.log(delete obj.firstName);
// true
console.log(obj.firstName);
// "Seed"
```

可以看出在执行了`delete obj.firstName`并返回了`true`后，访问firstName属性依旧返回"Seed"。


## has

> has操作主要针对的是`in`操作符但对`for ... in`无效

***参数***

name        |type           |description
------------|---------------|----------------------
target      |obj            |原对象
property    |string         |属性名称

***返回值***

type           |description
---------------|----------------------
boolean        |true存在 ／ false表示不存在，但是和实际存不存在没有关系，使用`.`操作依然可以拿到实际的值


```
var obj = {
    "firstName": "Seed",
    "lastName": "Huang"
};

var proxyObj = new Proxy(obj, {
    has:function(target, property){
        console.log("run in has");
        if(property == "firstName") {
            return false;
        }
        else {
            return true;
        }
    }
});

console.log('firstName' in proxyObj);
// false
console.log(proxyObj.firstName)
// Seed
```

## ownKeys

> 重写的是
- getOwnPropertyNames
- getOwnPropertySymbols
- Object.keys
对 for(... in)依然无效

***参数***

name        |type           |description
------------|---------------|----------------------
target      |obj            |原对象
property    |string         |属性名称

***返回值***

type           |description
---------------|----------------------
[]             |这个数组并不是想返回什么就返回什么的，如果key值本身不存在于对象上面，则不会显示在最终返回的数组中。

```
var obj = {
    "firstName": "Seed",
    "lastName": "Huang"
};

var proxyObj = new Proxy(obj, {
    ownKeys:function(target, property){
        return ['firstName'];
    }
});

/*var proxyObj = new Proxy(obj, {
    ownKeys:function(target, property){
        return ['Anther'];
    }
});
console.log(Object.keys(proxyObj));
// return []
*/

console.log(Object.keys(proxyObj));
// ['firstName']

for(var field in proxyObj) {
    console.log(field);
}
// ['firstName', 'lastName']
```


## Proxy.revocable()

> 该方法返回一个可以取消的Proxy的Proxy对象，听上去很拗口，其实作用就是一旦这个Proxy对象被revoke，那么对这个proxy对象的所有操作将会报错，通常这个使用场景在于，只能给第三方使用一次proxy对象，使用完马上销毁掉(T_T，基本感觉没用)

```
var proxyObj = {
    firstName: "Seed",
    lastName: "Huang"
};

let {proxy, revoke} = Proxy.revocable(proxyObj, {
    deleteProperty(target, property){
        return true;
    }
});


console.log(delete proxy.firstName);
console.log(proxy.firstName);
revoke();
console.log(proxy);
// console.log(delete proxy.firstName);
// Uncaught TypeError: Cannot perform 'deleteProperty' on a proxy that has been revoked
console.log(proxy.firstName);
// main.js:76 Uncaught TypeError: Cannot perform 'get' on a proxy that has been revoked
```

## 参考
[更多参考](http://es6.ruanyifeng.com/#docs/proxy);
