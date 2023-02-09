//1Q)
// producer create promises

// let promise1 = new Promise((resolve, reject) => {
//     reject("tomorrow i will come")

// });
// //consumer consume promises
// promise1.then((posRes) => {

//     console.log(posRes)
// }, (errRes) => {
//     console.log(errRes)
// })

//2Q)
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("tomorrow i will come1");
//     }, 5000)
// })
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("tomorrow i will come2");
//     }, 10000)
// })
// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("tomorrow i will come3");
//     }, 15000)
// })
// promise1.then((posRes) => {
//     console.log(posRes)
// }, (errRes) => {
//     console.log(errRes)
// })

// promise2.then((posRes) => {
//     console.log(posRes)
// }, (errRes) => {
//     console.log(errRes)
// })
// promise3.then((posRes) => {
//     console.log(posRes)
// }, (errRes) => {
//     console.log(errRes)
// })

//execute all promises at a time
// Promise.all([promise1, promise2, promise3]).then((posRes) => {
//     console.log(posRes)
// }, (errRes) => { })

//which promise execute first
// Promise.race([promise1, promise2, promise3]).then((posRes) => {
//     console.log(posRes)
// }, (errRes) => { })


//all function heighlet bad promises only
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("tomorrow i will come1");
    }, 5000)
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("error came");
    }, 10000)
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("tomorrow i will come3");
    }, 15000)
})

// Promise.all([promise1, promise2, promise3]).then((posRes) => {
//     console.log(posRes)
// }, (errRes) => {
//     console.log(errRes)
// })

Promise.allSettled([promise1, promise2, promise3]).then((posRes) => {
    console.log(posRes)

}, (errRes) => {

    console.log(errRes)
})
