var company;
company = "Neosoft";
document.write(typeof company);
company =12742;
document.write(typeof company);
company = true;
document.write("<b>"+typeof company+"</b>");

const pi= 3.14;

//Name function
function add (num1 , num2){
    return num1+num2;
}

const res = add(23,40);
console.log(res);


//Rest operator
function fun1(...num)
{
    let sum = 0;
    for(let ele of num){
        sum = sum + ele;
    }
    return sum
}

console.log(fun1(25, 12, 33));

//Spread Operator
let arr = [25 , 25];
console.log(fun1(...arr))