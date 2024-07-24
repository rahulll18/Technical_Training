let companyName = "neoSoft";
// console.log(companyName[3]);
// console.log(companyName)
// console.log(typeof companyName)

let branch = new String("parel");
console.log(branch)
console.log(typeof branch)

let company = "neoSoft";
console.log(company === companyName);


let companybranch = new String("parel");
console.log(branch.valueOf() === companybranch.valueOf());

//losely and strongly type checking
let num1 = 12;
let num2 = "12";

//first will check value and then check type
console.log(num1 === num2);//false

//substring takes -ve value as 0 in arg of fun
let str = "hello world";
console.log(str.substring(1,4));
console.log(str.substring(-40,7));

let str1 = "this is india";
console.log(str1.slice(-10, -3));