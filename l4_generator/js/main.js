import "babel-polyfill";

function* Generator(firstName, lastName) {
        let _firstName, _lastName;
        yield _firstName = firstName;
        yield _lastName = lastName;
        return `${_lastName} ${_lastName}`;
}

var iterator = Generator('Huang', 'Chunhua');
console.log(iterator.next());
console.log(iterator.next())
console.log(iterator.next())
document.body.innerHTML = "";
