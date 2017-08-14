import {
        Name,
        Age
} from './components/data';
import data from './components/data';
import {
        Name2,
        Age2
} from './components/data2';

document.body.innerHTML = `My name is ${Name}, I'm ${Age} years-old and I want to say ${data.Say()}, and this is my friend ${Name2}, he's age is ${Age2}`;


function A(a, b, c, d, e) {
        return a + b + c + d + e;
}

var a = [2, 3];
console.log(A(1, ...a, 4, 5));
