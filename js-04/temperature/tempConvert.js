const cels = +prompt("enter 1st number")

function convertToFahrenheit(c=0){
    const f = (c*1.8) + 32;
    if(!isNaN(f)){
        return(f);
    }
    return("something went wrong");
}

console.log(convertToFahrenheit(cels));