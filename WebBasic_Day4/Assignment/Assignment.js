let employeeNames = ["Ram Sharma","Rohit Sharma","John Doe","Abby Syan","Ansh Shah"];
let nameStartWithA = employeeNames.filter((empNames)=>{return empNames.toLowerCase().slice(0,1) === 'a' });
let nameEndWithSharma = employeeNames.filter((employeeNames)=>{
    return employeeNames.split(" ")[1].toLowerCase() === "sharma";
});
employeeNames.map((empNames)=>{
    console.log("Neo - " + empNames)
})
let concatFirstName = "";
employeeNames.forEach((employeeNames)=>{
  concatFirstName += employeeNames.slice(0,1);
})

let string1 = "StringImplementation";
console.log(string1.length);
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());
console.log(string1.includes("String"));
console.log(string1.indexOf("Imple"));
console.log(string1.charAt(5));
console.log(string1.split(""));
console.log(string1.slice(-15,-8))
console.log(string1.slice(6,string1.length));
console.log(string1.concat("Completed"));
console.log(string1.lastIndexOf("i"));
console.log(string1.replaceAll(/i/ig,"e"));
console.log(string1.substring(0,6));

let arr = [1,2,3,4,5];
console.log(arr.length);
arr.push(7);
console.log(arr);
arr.unshift(0)
console.log(arr);
arr.shift();
console.log(arr);
arr.pop();
console.log(arr);
arr.splice(5,0,6,7);
console.log(arr);
console.log(arr.slice(3,7));
console.log(arr.slice(-7,-3));
console.log(arr.includes(5));
console.log(arr.indexOf(6));
console.log(arr.find(val=>val>5));
console.log(arr.findIndex(val=>val === 4));
console.log(arr.some(val=>val>3));
console.log(arr.every(val=>val>2));