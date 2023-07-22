const num1 = +prompt("enter first number")
const op = prompt("enter an operation from '+ - * /'")
const num2 = +prompt("enter second number")
let res
let do_operation = true

if(isNaN(num1) || isNaN(num2)){
    do_operation = false
    console.log("first or third input is not a number!")
}

if((op === "+") && do_operation){
    res=num1+num2
    console.log(num1,op,num2,"=",res)
    alert(res)
}
if((op === "-") && do_operation){
    res=num1-num2
    console.log(num1,op,num2,"=",res)
    alert(res)
}
if((op === "*") && do_operation){
    res=num1*num2
    console.log(num1,op,num2,"=",res)
    alert(res)
}
if((op === "/") && do_operation){
    res=num1/num2
    console.log(num1,op,num2,"=",res)
    alert(res)
}
if(op !== "/" && op !== "*" && op !== "-" && op !== "+"){
    console.log("operation is not defined")
}

