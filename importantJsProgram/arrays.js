//1Q)
// let arr1 = [10, 20, 30, 40];
// let arr2 = [60, 70, 80, 90];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);
// arr1.push(60);//add element at last
// console.log(arr1);
// arr2.pop(); //remove element at last
// console.log(arr2);
// arr1.unshift(50); //add element at first
// console.log(arr1);
// arr2.shift();  //remove lement at first
// console.log(arr2);

//2Q)
// let arr1 = [10, 20, 30, 40];
// arr1.splice(2, 2);
// console.log(arr1);
// arr1.splice(2, 0, 30, 40);
// console.log(arr1);


//3Q)
// let arr1 = [10, 20, 30, 40];
// console.log(arr1.map((element, index) => {
//     return element * 100;

// }))


// let arr1 = [10, 20, 30, 40];
// console.log(arr1.map((element, index) => {
//     return [element, index];

// }))


// let arr1 = [10, 20, 30, 40];
// console.log(arr1.map((element, index) => {
//     return { [index]: element };

// }))


// let arr1 = [10, 20, 30, 40, 50];
// console.log(arr1.filter((element, index) => {
//     return element >= 30;

// }).map((element, index) => {
//     return { [index]: element }

// }));


// let employee = [
//     {
//         "id": 111,
//         "name": "rajitha",
//         "salary": 10000
//     },
//     {

//         "id": 222,
//         "name": "lajitha",
//         "salary": 20000,
//     },
//     {

//         "id": 333,
//         "name": "swapna",
//         "salary": 30000
//     }
// ]

// console.log(employee.filter((element, index) => {
//     return element.salary > 10000;

// }).map((element, index) => {
//     return element.name == "lajitha" ? { "id": 222, "name": "prabha", "salary": 20000 } : element;

// })
// )




//reducewrite (summation from right to left)

// let arr = ["mouritech", "to", "welcome"];
// console.log(
//     arr.reduceRight((first, second) => {
//         return first + "      " + second;
//     })
// )


//slice
// let arr = [10, 20, 30, 40];
// console.log(arr.slice(1, 3));
// console.log(arr.slice(-1));
// console.log(arr.slice(-3, -1));


//flat(convert mutli dimension to single array)
// let arr = [[1], [2], [3], [4]];
// console.log(arr.flat(1));
// let arr1 = [[[[[[[[[[1]]]]]]]]], [[[[[[[[[2]]]]]]]]]];
// console.log(arr1.flat(Infinity));


//map and flat

// let arr1 = [10, 20, 30];
// let arr2 = ["one", "two", "three"];
// console.log(arr1.map((element, index) => {
//     return [element, arr2[index]];
// }).flat(Infinity)
// )


//combination of flat and map=flatmap
// let arr1 = [10, 20, 30];
// let arr2 = ["one", "two", "three"];
// console.log(arr1.flatMap((element, index) => {
//     return [element, arr2[index]];
// })
// )


//splice and findIndex
// let arr1 = [10, 20, 30, 40, 50, 60, 70];
// arr1.splice(arr1.findIndex((element, index) => {
//     return element == 30;
// }), 1);
// console.log(arr1);



// let arr1 = [10, 20, 30, 40, 50, 60, 70];
// let arr2 = [
//     {
//         "id": 111,
//         "name": "rajitha",
//         "salary": 10000
//     },
//     {

//         "id": 222,
//         "name": "lajitha",
//         "salary": 20000,
//     },
//     {

//         "id": 333,
//         "name": "swapna",
//         "salary": 30000
//     }
// ]

// arr2.splice(arr2.findIndex((element, index) => {
//     return element.id == 222;

// }), 1)
// console.log(arr2);


//some(return true if one element satisfy condition)
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.some((element, index) => {
//     return element <= 1;
// }))


//every(return true if all elements satisfy condition)
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.every((element, index) => {
//     return element <= 5;
// }))

// //fill function

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.fill(100));
// console.log(arr.fill(200, 1));
// console.log(arr.fill(300, 2, 4));

//indexof function (wont create indexes for repeated elements)
// let arr = [1, 2, 1, 4, 5, 2];
// arr.forEach((element, index) => {
//     console.log(arr.indexOf(element), index);
//     console.log("..........")
// })


// let arr = [1, 2, 3, 1, 2, 4, 5, 3];
// let a = arr.filter((element, index) => {
//     return arr.indexOf(element) == index;
// })
// console.log(a);

//copywithin

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr.copyWithin(6);
// console.log(arr);
let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
arr1.copyWithin(3, 6);
console.log(arr1);

// let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr2.copyWithin(2, 4, 7);
// console.log(arr1);


//sort array
// let arr = [10, 50, 60, 30, 20, 40, 50];
// let a = arr.sort((arg1, arg2) => {
//     return arg1 - arg2;  //ascending order
// })
// console.log(a);


// let arr = [10, 50, 60, 30, 20, 40, 50];
// let a = arr.sort((arg1, arg2) => {
//     return arg2 - arg1;  //descending
// })
// console.log(a);

//forEach

// let arr = [10, 50, 60, 30, 20, 40, 50];

// arr.forEach((element, index) => {
//     console.log(element, index)


// })
//forOf

// let arr = [10, 50, 60, 30, 20, 40, 50];

// for (let x of arr) {
//     console.log(x);

// }

//for in

// let obj = {
//     "id": 1,
//     "name": "raji",
//     "sal": 1000,

// }

// for (let x in obj) {
//     console.log(obj[x]);

// }

//second least element
// let arr = [10, 50, 60, 30, 20, 40, 50];
// let a = arr.sort((arg1, arg2) => {
//     return arg1 - arg2;  //descending
// })[1]
// console.log(a);

//second max
// let arr = [10, 50, 60, 30, 20, 40, 50];
// let a = arr.sort((arg1, arg2) => {
//     return arg2 - arg1;  //descending
// })[1]
// console.log(a);

//reverse function
// let arr = [10, 50, 60, 30, 20, 40, 50];
// let a = arr.reverse();
// console.log(a);



//reverse string
// let a = "Hello";
// let b = Array.from(a).reverse().toString().replace(/,/g, '');//convert string to equivalent array
// console.log(b);

//reverse string
// let a = "Hello";
// let b = Array.from(a).reverse().join("");//convert string to equivalent string
// console.log(b);


//find(number function)
// let arr = [10, 50, 60, 30, 20, 40, 50];
// let b = arr.find((element, index) => {
//     return element == 50;

// })
// console.log(b);

//includes(boolean function)
// let arr = [10, 50, 60, 30, 20, 40, 50];
// let b = arr.includes(60);
// console.log(b);

//substr
// let a = " hello welcome to mouriitech ";
// let b = a.substr(0, 5);
// console.log(b);
// console.log(a.length);
// //trim (removing first and ending space)
// console.log(a.trim().length);
// console.log(a.trimStart().length);
// console.log(a.trimEnd().length);



//padstart and end
// let a = "Hello";
// let b = a.padStart(10, "*").padEnd(15, "*");
// console.log(b);

//lastIndexOf
// console.log(
//     [1, 2, 3, 4, 1].lastIndexOf(1)
// )

//repeat
console.log(
    "hello".repeat(3)
)


//split
// let a = " hello welcome to mouriitech ";
// let b = a.split(" ");
// console.log(b);


//subString
// let a = "Hello";
// let b = a.substring(0, 2);
// console.log(b);



// let a = ['rama', 'ajay', 'jaya', 'durga', 'bunny', 'chinnu'];
// let b = a.map((element, index) => {
//     return element.charAt(0, index)

// })
// console.log(b);


// let a = ['ate', 'tea', 'eat', 'ant', 'tan', 'bat'];
// let b = a.filter((element, index) => {



// })

// console.log(b)





// const array = ['ate', 'tea', 'eat', 'ant', 'tan', 'bat'];
// const array = ['day', 'night', 'afternoon', 'night', 'noon', 'night',
//     'noon', 'day', 'afternoon', 'day', 'night'];
// const groupSimilar = arr => {
//     return arr.reduce((acc, val) => {
//         const { data, map } = acc;
//         const ind = map.get(val);
//         if (map.has(val)) {
//             data[ind][1]++;
//         } else {
//             map.set(val, data.push([val, 1]) - 1);
//         }
//         return { data, map };
//     }, {
//         data: [],
//         map: new Map()
//     }).data;
// };
// console.log(groupSimilar(array));

//Output:[['ate','eat','tea'],['ant','tan'],['bat']]
//reduce
// let arr = [10, 20, 30, 40];
// console.log(arr.map((element, index) => {
//     return element * 100;

// }).filter((element, index) => {
//     return element > 1000;

// }).reduce((first, second) => {
//     return first + second

// })
// )