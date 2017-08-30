function * Generator () {
    yield 1;
    yield 2;
    yield 3;
    return "ending"
}

var generator = Generator();
console.log([...generator]);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


function * Generator2 () {
    yield "aa";
    yield "bb";
    yield "cc";
    return "ending"
}

var generator2 = Generator2();
console.log(generator2);
var a = {
    0:1,
    1:2,
    2:3,
    length: 3,
    [Symbol.iterator]:function(){return generator2}
}

console.log([...a]);
