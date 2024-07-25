//extract nodes through id from html

const fnameN = document.getElementById('fname')
const lnameN = document.getElementById('lname')
const emailN = document.getElementById('email')
const ageN = document.getElementById('age')
const passwordN = document.getElementById('password')
const errorNode1 = document.getElementById("error1")
const errorNode2 = document.getElementById("error2")
const errorNode3 = document.getElementById("error3")
const errorNode4 = document.getElementById("error4")
const errorNode5 = document.getElementById("error5")
//extract values from nodes

// const fname = fnameN.value
// const lname = lnameN.value
// const email = emailN.value
// const age = ageN.value
// const password = passwordN.value

fnameN.addEventListener("blur",()=>validate1())
const validate1 = function()
{
    const firstname = fnameN.value
    if(firstname == ""){
        errorNode1.textContent = "first name is required"
    }
    else{
        errorNode1.textContent = ""
    }
}
lnameN.addEventListener("blur",()=>validate2())
const validate2 = function()
{
    const lastname = lnameN.value;
    if(lastname == ""){
        errorNode2.textContent = "last name is required"
    }
    else{
        errorNode2.textContent = ""
    }
   
}
emailN.addEventListener("blur",()=>validate3())
const validate3 = function()
{
    const email = emailN.value
    if(email == ""){
        errorNode3.textContent = "email name is required"
    }
    else{
        errorNode3.textContent = ""
    }
}
ageN.addEventListener("blur",()=>validate4())
const validate4 = function()
{
    const age = ageN.value
    if(age == ""){
        errorNode5.textContent = "age name is required"
    }
    else{
        errorNode5.textContent = ""
    }
}
passwordN.addEventListener("blur",()=>validate5())
const validate5 = function()
{
    const password = passwordN.value
    if(password == ""){
        errorNode4.textContent = "password name is required"
    }
    else{
        errorNode4.textContent = ""
    }
}