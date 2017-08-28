var s1 = Symbol("age");
var a = {
    [s1]: function(){alert("hello")},
    "name": "huang"
}

a[s1]();


var s2 = Symbol("age");

a[s2] = function (){
    alert("hello2");
}

// a[s2]();

// alert(s2.toString() == s1.toString())

console.log(Symbol.keyFor(s1));

var mother = Symbol.for('mother');
console.log(Symbol.keyFor(mother));

console.log(Object.getOwnPropertySymbols(a));
// [Symbol(age), Symbol(age)]
console.log(Reflect.ownKeys(a));
// ["name", Symbol(age), Symbol(age)]
