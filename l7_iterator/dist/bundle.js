/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/*!function(){
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
        console.error(e);
    }
}();
*/

!function () {
    var a = _defineProperty({
        0: "hello",
        1: "world",
        length: 2,
        index: 0
    }, Symbol.iterator, function () {
        var self = this;
        return {
            next: function next() {
                if (self.index < 2) {
                    var value = self[self.index];
                    self.index++;
                    return {
                        value: value
                    };
                } else {
                    return {
                        done: true
                    };
                }
            },
            return: function _return() {
                console.log("This is return");
                return {
                    done: true
                };
            }
        };
    });
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            continue;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}();

/***/ })
/******/ ]);