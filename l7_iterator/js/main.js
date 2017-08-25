/*!function(){
    var result = [1, 2, 3];
    var index = 0;
    function Person(){
        this[Symbol.iterator] = function() {
            return this;
        };
        this.next = function() {
            if(index < result.length) {
                var returnVal = {
                        value: result[index],
                        done: false
                    };
                index ++;
                return returnVal;
            }
            else{
                return {
                    done: true
                }
            }
        };
    }

    var person = new Person();
    for(var item of person)
    console.log(item);
}();*/


// second
/*!function(){
    function Person(age){
        var current = this;
        current.age = age;
        current[Symbol.iterator] = function () {
            return this;
        };
        current.next = function(){
            if(!!current) {
                var age = current.age;
                current = current.nextPerson;
                return {
                    value: age,
                    done:false
                }
            }
            else {
                return {
                    done:true
                }
            }
        }
    }
    var person1 = new Person(10);
    var person2 = new Person(11);
    var person3 = new Person(12);
    person1.nextPerson = person2;
    person2.nextPerson = person3;
    for(var person of person1) {
        console.log(person);
    }
}();*/

!function(){
    let a = {
        0: "hello",
        1: "world",
        length: 2,
        index: 0,
        [Symbol.iterator]: function(){
            var self = this;
            return {
                next: function () {
                    if(self.index < 2) {
                        var value =self[self.index];
                        self.index++;
                        return {
                            value
                        }
                    }
                    else {
                        return {
                            done: true
                        }
                    }
                },
                return: function(){
                    console.log("This is return");
                    return {
                        done: true
                    }
                }
            }
        }
    }
    try {
        for(let value of a ){
            console.log(value);
            if(value == "hello") {
                throw new Error();
            }
        }
    }
    catch(e) {
        console.log(e);
    }

}();
