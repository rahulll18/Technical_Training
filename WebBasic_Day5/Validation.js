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
    errorNode1.textContent = "";
    const firstname = fnameN.value
    if(firstname == ""){
        errorNode1.textContent = "first name is required"
        return false;
    }
    else if(!firstname.match("^[A-Za-z ]*$")){
        errorNode1.textContent="Please enter only characters";
        return false;
    }
    return true;
        
}
lnameN.addEventListener("blur",()=>validate2())
const validate2 = function()
{
    const lastname = lnameN.value;
    if(lastname == ""){
        errorNode2.textContent = "last name is required"
        return false;
    }
    else if(!lastname.match("^[A-Za-z ]*$")){
        errorNode2.textContent="Please enter only characters";
        return false;
    }
    return true;
}
emailN.addEventListener("blur",()=>validate3())
const validate3 = function()
{
    errorNode3.textContent=""
    const email = emailN.value
    if(email == ""){
        errorNode3.textContent = "email name is required"
        return false;
    }
    else if(!email.includes("@") || email.startsWith("@") || email.endsWith("@") || email.endsWith(".") || email.startsWith(".")){
        errorNode3.textContent="Please enter valid email id";
        return false;
    }
    return true; 
}
ageN.addEventListener("blur",()=>validate4())
const validate4 = function()
{
    const age = ageN.value
    if(age == ""){
        errorNode5.textContent = "age name is required"
        return false;
    }
    else{
        errorNode5.textContent = ""
        return false
    }

    return true
}
passwordN.addEventListener("blur",()=>validate5())
const validate5 = function()
{
    const passPattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,12}$";
    const regExpress = new RegExp(passPattern);
    errorNode4.textContent = "";
    const password = passwordN.value;
    if(password == ""){
        errorNode4.textContent = "password is required"
        return false;
    }else if(!regExpress.test(password)){
        errorNode4.textContent = "Please Enter valid password"
        return false;
    }
    return true;
}

function validateAll()
{
    return validate1()&& validate2() && validate3() && validate4() && validate5();
}