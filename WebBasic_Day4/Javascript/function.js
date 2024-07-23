// anonymous function
const a = function()
{
    console.log("anonymous function called")
}
a();

const print = (a) => console.log("Hello !! My Name is "+a);
print("Rahul")

const upper = (a) => console.log(a.toUpperCase());
upper("rahul");

let salaries = [50000,20000,30000];
salaries.forEach(a => console.log(a));

salaries.forEach((a , index) => console.log(a + " " + index));