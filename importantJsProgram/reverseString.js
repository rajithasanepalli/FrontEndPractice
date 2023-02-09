const path = "www.facebook.com?name=raji&gender=female";
const params = new URLSearchParams(path);
// console.log(params)

const obj = Object.fromEntries(params)
console.log(obj)

