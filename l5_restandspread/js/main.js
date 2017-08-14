// 数组
var arr1 = [1, 2, 3];
var arr2 = [2, 4, 5];
var obj = {
        a: 1
};
var resultArr = [...arr1, ...arr2];
console.log(resultArr);
// (6) [1, 2, 3, 2, 4, 5]
var str1 = 'hello';
console.log([...arr1, ...str1]);
// [1, 2, 3, 'h', 'e', 'l', 'l', 'o'];
console.log([...arr1, str1]);
// [1, 2, 3, 'hello'];

console.log([...new Set([1, 3, 2, 3, 4, 2])])

// webpack has supported
