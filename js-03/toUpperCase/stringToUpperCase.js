const sentence = prompt("enter a lower-case sentence that you want to convert")

function checkAndConvert(s=""){
    if (s.toLowerCase() == s){
        return(s.toUpperCase());
    }
    return("Error : Input sentence is not lowercase");
}

console.log(checkAndConvert(sentence));

