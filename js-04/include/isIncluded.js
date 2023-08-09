let sentence = prompt("please enter your sentence");
let word = prompt("please enter your word");

function isIncluded(str,substr){
    if(!str || !substr){
        throw Error("Invalid inputs!");
    }
    if(str.toString().includes(substr.toString())){
        return(true);
    }
    return(false);
}

console.log(isIncluded(sentence,word));