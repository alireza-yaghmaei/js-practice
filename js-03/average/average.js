const num1 = +prompt("enter 1st number")
const num2 = +prompt("enter 2nd number")
const num3 = +prompt("enter 3rd number")
const num4 = +prompt("enter 4th number")
const num5 = +prompt("enter 5th number")

function findAverage(a=0, b=0, c=0, d=0, e=0){
    let result = a+b+c+d+e;
    if(!isNaN(result)){
        result=result/5;
        if(result<12){
            console.log("average is below 12!!!");
        }
        return(result);
    }
    return("Invalid inputs")
}

console.log(findAverage(num1,num2,num3,num4,num5));