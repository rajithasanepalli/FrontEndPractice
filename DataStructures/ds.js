// let map = new Map();
// map.set("key1", "hello").set("key2", "welcome")
// console.log(map)
let arr = [10, 20, 40, 30, 50, 60]
let res = arr.sort((arg1, arg2) => {
    return arg2 - arg1;
})[1]
console.log(res)