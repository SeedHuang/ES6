// function * Generator () {
//     yield 1;
//     yield 2;
//     yield 3;
//     return "ending"
// }
//
// var generator = Generator();
// console.log([...generator]);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
//
//
// function * Generator2 () {
//     yield "aa";
//     yield "bb";
//     yield "cc";
//     return "ending"
// }
//
// var generator2 = Generator2();
// console.log(generator2);
// var a = {
//     0:1,
//     1:2,
//     2:3,
//     length: 3,
//     [Symbol.iterator]:function(){return generator2}
// }
//
// console.log([...a]);


// let a = [1, 2, 3, 4, 5, 6, 7];
//
// function* Generator() {
//     for(let i=0; i < a.length; i++ ) {
//         yield a[i];
//     }
//     return "ending";
// }
//
//
// let generator = Generator();
//
//
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


function foo(a, b){
    debugger;
    console.log(a, b);
}

function* testyield(){
    let a = yield 1;
    console.log(a);
    let b = yield 2
    console.log(b);
    let result = a + b;
    console.log(result);
}

var testgenerat = testyield();
var lastValue = testgenerat.next().value;

console.log(lastValue);

lastValue = testgenerat.next(lastValue).value;

console.log(lastValue);

lastValue = testgenerat.next(lastValue).value;
