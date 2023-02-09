// const days = ["Sunday", "Monday", "TuesDay", "WednesDay", "ThursDay", "Friday", "SaturDay"];
// let date = new Date();
// console.log("current day is" + ":" + days[date.getDay()]);
// let hours = date.getHours();
// let time = (hours >= 12) ? "PM" : "AM";
// console.log("current Time is" + ":" + date.getHours() + " " + time + ":" + date.getMinutes() + ":" + date.getSeconds())
// console.log("currentDate" + ":" + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear())


// let myObject = ['A', 'B', 'C', 'D'];
// console.log(myObject)
// let res = JSON.stringify(myObject);
// console.log(res)
//window.open('http://code-sample.com/', '_blank');




let jsonData = '{"name":"Anil Singh","Age":33, "URL" :"https://code-sample.com"}';
let objectData = JSON.parse(jsonData);
console.log(objectData);
