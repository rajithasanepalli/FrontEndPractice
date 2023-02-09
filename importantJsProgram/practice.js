// let employee = [


//     { "id": 111, "name": "raji", "sal": 10000 },
//     { "id": 222, "name": "lali", "sal": 20000 },
//     { "id": 333, "name": "swathi", "sal": 30000 }

// ]
// let b = employee.sort((a, b) => {
//     return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
// }).forEach((record, index) => {
//     console.log(record.name)

// })


// let arr = employee.sort((a, b) => {
//     return b.name > a.name ? 1 : b.name < a.name ? -1 : 0
// })



// let arr = employee.sort((a, b) => {
//     return a.name > b.name ? 1 : a.name < b.name ? -1 : 0


// })
// console.log(arr)

// let a = employee.filter((record, index) => {
//     return record.sal >= 20000

// }).map((record, index) => {
//     return record.name == "lali" ? { "id": "222", "name": "radha", "sal": 20000 } : record
// })
// console.log(a);

// let a = employee.sort();
// console.log(a);

// let arr = [20, 40, 10, 30];
// let res = arr.sort((a, b) => {
//     return b - a;
// });
// console.log(res);

// let a = [10, 20, 30];
// console.log(
//     a.reduce((first, second) => {
//         return first + second
//     })
// )

// let a = ["mouri", "Hello"];
// console.log(a.reduceRight((first, second) => {
//     return first + "    " + second
// }))

// let arr = [20, 40, 10, 30];
// console.log(
//     arr.slice(1, 2)
// )

// let arr1 = [10, 20, 30];
// let arr2 = ["one", "two", "three"];
// console.log(
//     arr1.flatMap((element, index) => {
//         return [element, arr2[index]]
//     })
// )


// console.log(
//     arr1.splice(arr1.findIndex((element, index) => {
//         return element == 30
//     }), 1)
// )


// let arr = [1, 2, 3, 1, 2, 4, 5, 3];
// console.log(
//     arr.filter((element, index) => {
//         return arr.indexOf(element) == index
//     })
// )

// let arr = [20, 40, 10, 30];
// // console.log(
// //     arr.sort((a, b) => {
// //         return b - a
// //     })[1]
// // )


// console.log(arr.reverse())


// let a = "hello";
// console.log(Array.from(a).reverse().join(" "))

// let arr = [20, 40, 10, 30];
// console.log(arr.find((element, index) => {
//     return element == 50
// }))

// let a = [10, 30, 40, 10];

// console.log(a.includes(30))
// console.log(a.lastIndexOf(10))

// let a = " hello ";
// console.log(a.substr(0, 3))
// console.log(a.length)
// console.log(a.trim().length)
// console.log(a.trimStart().length)
// console.log(a.trimEnd().length)
// console.log(a.padStart(10, "*").padEnd(15, "#"))

// console.log("hello".repeat(3))

// let a = "hi Welcome Raji";
// console.log(a.split(" "))

let a = ["raji", "lalli", "swathi"];
console.log(
    a.map((element, index) => {
        return element.charAt(0, index)
    })
)
