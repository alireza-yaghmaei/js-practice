const num1 = +prompt("enter first number")
const op = prompt("enter an operation from '+ - * /'")
const num2 = +prompt("enter second number")

function calculate(a=0 , b=0 , op){
    if (!(isNaN(num1) || isNaN(num2))){
        switch (op) {
            case '+':
                return (a+b);
            case '-':
                return (a-b);
            case '*':
                return (a*b);
            case '/':
                return (a/b);
            default:
                return("Invalid OP");
        }
    }
    return("Invalid Inputs");
}

console.log(calculate(num1,num2,op));

