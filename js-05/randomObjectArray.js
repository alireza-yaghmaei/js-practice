const arr = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}  

const generateObject = () => {
    const randNum = Math.floor (Math.random()*1000);

    const letters = ['a','b','c','d','e'
                    ,'f','g','h','i','j'
                    ,'k','l','m','n','o'
                    ,'p','q','r','s','t'
                    ,'u','v','w','x','y'
                    ,'z'];
    let randWord = "";
    const wordlen = getRandomInt(1,8);      // random word has at least 1 letter and at most 7 letters
    for (let i = 0; i < wordlen; i++) {
        randWord = randWord + letters[getRandomInt(0,26)];
    }

    const randDate = "16" + getRandomInt(1000,100000000000);
    return {
        randNum,
        randDate : new Date(+randDate),
        randWord   
    }
};

const addElement = () => {
    arr.push(generateObject());    
};

addElement();
addElement();
console.log(arr);