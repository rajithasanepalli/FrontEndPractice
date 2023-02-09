var sub = "java script";
var wish = `Welcome to ${sub}`;
console.log(wish);
var sub_1 = "Node Js";
var sub_2 = "React Js"
var sub_3 = "Mongo DB";
var mern = `${sub_1}|${sub_2}|${sub_3}`;
console.log(mern);
//Another Example
var tbl_name = "employees";
var sal = 50000;
var sql_query = `select *from ${tbl_name} where esal>${sal}`;
console.log(sql_query);

var uname = "admin";
var upwd = "admin123";
var sql_query2 = `select *from ${tbl_name} where uname=${uname} and upwd=${upwd}`;
console.log(sql_query2);

var mern = `Mern Stack means
         *****************
         frontEnd=${sub_1}
         ++++++++++++++++
         backEnd=${sub_2}
        ^^^^^^^^^^^^^^^^
        dataBase=${sub_3}`;
console.log(mern);
//Un defined and null Data type

var x1;
console.log(x1);
x1 = null;
console.log(x1);
console.log(undefined == undefined);
console.log(undefined === undefined);
console.log(null == null);
console.log(null === null);
console.log(undefined == null);
console.log(undefined === null);
//Big int data types
var bigint = 1566777888889999999888888888888n;
console.log(bigint);





