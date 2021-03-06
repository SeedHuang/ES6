# Spread

> 百度翻译：Spread —— 展开; 伸开; （使） 传播; （使） 散布;

## Spread主要功能
- [代替apply的传入可变长参数功能](https://github.com/SeedHuang/ES6/tree/master/l5_restandspread#spread主要功能)
- [高效链接数组](https://github.com/SeedHuang/ES6/tree/master/l5_restandspread#高效链接数组)
- [高效复制数组](https://github.com/SeedHuang/ES6/tree/master/l5_restandspread#高效复制数组)
- [高效合并对象](https://github.com/SeedHuang/ES6/tree/master/l5_restandspread#高效合并对象)
- [Set和Spread组合进行数组去重](https://github.com/SeedHuang/ES6/tree/master/l5_restandspread#set和spread组合进行数组去重)

### 代替apply的传入可变长参数功能

```
function SayMyName(firstName, middleName, lastName) {
    return `${firstName}·${middleName}·${lastName}`
}

let FullName = 'Seed|Sr|Huang';
let nameParts = FullName.split('|');
console.log(SayMyName(...nameParts));
// Seed·Sr·Huang
```

### 高效链接数组

```
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];
let d = [...a, ...b, ...c];
console.log('this is array d', d);
console.log('this is array a', a);
console.log('this is array b', b);
console.log('this is array c', c);
// this is array d (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// this is array a (3) [1, 2, 3]
// this is array b (3) [4, 5, 6]
// this is array c (3) [7, 8, 9]
```
spread 方式其实是创建一个新的数组和对象，而别不是改变原有的任何一个对象，这一点上和`Object.assign`还是有区别的

### 高效复制数组

```
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr1);
// (3) [1, 2, 3];
console.log(arr2);
// (3) [1, 2, 3];
console.log(arr1 == arr2);
// false
```

### 高效合并对象

```
// 数组
var arr1 = [1, 2, 3];
var arr2 = [2, 4, 5];
var obj = {a: 1};
var resultArr = [...arr1, ...arr2];
console.log(resultArr);
// (6) [1, 2, 3, 2, 4, 5]
var resultArr = [...arr1, ...obj];
//VM1444:7 Uncaught TypeError: obj is not iterable
    at <anonymous>:7:30
var str1 = 'hello';
console.log([...arr1, ...str1]);
// [1, 2, 3, 'h', 'e', 'l', 'l', 'o'];
console.log([...arr1, str1]);
// [1, 2, 3, 'hello'];

// 对象
var obj1 = {a: 1};
var obj2 = {b: 2};
var resultObj1 = {...obj1, ...obj2};
console.log(resultObj1);
// {a: 1, b: 2}
var resultObj2 = {...obj1, ...arr2};
console.log(resultObj2);
// {0: 2, 1: 4, 2: 5, a: 1}
var str1 = 'Hello';
var resultObj3 = {...obj1, ...str1};
console.log(resultObj3);
// {0: "H", 1: "e", 2: "l", 3: "l", 4: "o", a: 1}
var funcObj = {bb:function(){alert('a')}};
var cc = {a:"1", "b":"2"}
cnsole.log({...cc, ...funcObj});
// {a: "1", b: "2", bb: ƒ}
console.log({...cc, funcObj});
// {a: "1", b:"2", funcObj:{bb:function(){alert('a')}}}
var funcObj2 = function(){alert('a')}
console.log({...cc, funcObj2});
// {a: "1", b: "2", funcObj2:function(alert('a'))}
console.log({...cc, ...funcObj2});
// {a: "1", b: "2"}
```
> function, number, boolean不能够iterable的基础数据类型都会被`spread`忽略

***webpack + babel-preset-2015***

****es6****

```
var arr1 = [1, 2, 3];
var arr2 = [2, 4, 5];
var obj = {a: 1};

/*组合数组*/
var resultArr = [...arr1, ...arr2];
console.log(resultArr);
// (6) [1, 2, 3, 2, 4, 5]


/*将文字转化为数组与数组结合*/
var str1 = 'hello';
console.log([...arr1, ...str1]);
// [1, 2, 3, 'h', 'e', 'l', 'l', 'o'];

/*将文字与数组结合*/
console.log([...arr1, str1]);
// [1, 2, 3, 'hello'];

/*利用Set方法对原本数组中的重复项进行去重*/
console.log([...new Set([1, 3, 2, 3, 4, 2])]);
// [1, 3, 2, 4];

```

****es5****

```
function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                        arr2[i] = arr[i];
                }
                return arr2;
        } else {
                return Array.from(arr);
        }
}

// 数组
var arr1 = [1, 2, 3];
var arr2 = [2, 4, 5];
var obj = {
        a: 1
};

/*组合数组*/
var resultArr = [].concat(arr1, arr2);
console.log(resultArr);
// (6) [1, 2, 3, 2, 4, 5]

/*将文字转化为数组与数组结合*/
var str1 = 'hello';
console.log([].concat(arr1, _toConsumableArray(str1)));
// [1, 2, 3, 'h', 'e', 'l', 'l', 'o'];

/*将文字与数组结合*/
console.log([].concat(arr1, [str1]));
// [1, 2, 3, 'hello'];

/*利用Set方法对原本数组中的重复项进行去重*/
console.log([].concat(_toConsumableArray(new Set([1, 3, 2, 3, 4, 2]))));
```

#### _toConsumableArray

```
function _toConsumableArray (arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
        } else {
            return Array.from(arr);
        }
}
```

> 这个名字没有理解，但是功能理解了，如果传入参数的是一个Array类型的，然后返回这个数组的浅拷贝，如果不是arr，就使用Array.from创建一个Array对象，如果这个参数满足(iterable)[http://es6.ruanyifeng.com/#docs/set-map]的条件就可以将其内容转为数组，如果不是，就返回一个空数组。


# Rest

rest与spread看似相同，但是使用场景不一样，rest作为函数的可变长参数在使用，并且，rest参数必须是最后一个参数，请看一下例子

```
var methodA = function(name, ...rest){
    console.log(rest);
}
methodA("HuangChunhua", "32", "from Shanghai");
// ["32", "from Shanghai"]
```
