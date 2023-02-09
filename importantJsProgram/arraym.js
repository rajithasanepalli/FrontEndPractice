// let arr = [40, 100, 1, 5, 25, 10];
// let result = arr.sort((a, b) => {
//     return b - a;
// });
// console.log(result);
// const cars = [
//     { type: "Volvo", year: 2016 },
//     { type: "Saab", year: 2001 },
//     { type: "BMW", year: 2010 }
// ];
// let result = cars.sort((a, b) => {
//     return a.year > b.year ? 1 : a.year < b.year ? -1 : 0;
// }).forEach((element, index) => {
//     console.log(element.year)
// })

// let result = cars.sort((a, b) => {
//     return a.year > b.year ? 1 : a.year < b.year ? -1 : 0;
// }).forEach((element, index) => {
//     console.log(element.year)
// })

// let a = [10, 20, 30, 40];
// let b = a.map((element, index) => {
//     return element * 10
// }).filter((element, index) => {
//     return element >= 300
// }).reduceRight((first, second, index) => {
//     return first + second;
// })
// console.log(b)

// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.some((element, index) => {
//     return element > 30
// })
// console.log(allOver18);
// let result = numbers.indexOf(9);
// console.log(result)

// let veg = ["tomato", "carrot", "guard", "mirchi"];
// let res = veg.indexOf("carrot");
// console.log(res)
// const d = new Date();
// let d1 = d.getUTCMonth();
// console.log(d1)

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const d = new Date();
// let day = days[d.getDay()];
// console.log(day)

// let text = "";
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2022, 10, 14);

// if (someday > today) {
//     text = "Today is before January 14, 2100.";
// } else {
//     text = "Today is after January 14, 2100.";
// }
// console.log(text)