# ES6 iterator

所有可迭代的对象首先需要满足对象上必须有Symbol.iterator的函数，这个函数被称为迭代器

```
{
    [Symbol.iterator]:function(){
        return {
            next:function(){
                return {
                    value: xxxxx,
                    done: true/false
                }
            }
        }
    }
}
```

![迭代器详解](./imgs/symboliterator.png)

迭代器返回值结构为
{
    next:function(){
        return {
            value: xxxxx,
            done: true/false
        }
    }
}



iterator主要是给for(... of )这种新的循环方式进行消费的

```
for (var _iterator = person[Symbol.iterator](), _step;
        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
            _iteratorNormalCompletion = true) {
        var item = _step.value;

        console.log(item);
}
```
