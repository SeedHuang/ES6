# DefineProperty 的四个属性

- enumerable
- configurable
- writable
- value


#### enumerable(可枚举)

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

#### configurable(可配置)

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

#### writable(可写)

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

### value

value就是具体的值，如果没有设置，默认是`undefined`
