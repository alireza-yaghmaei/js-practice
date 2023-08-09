const arr = [];

const generateObject = (id,name,age,field) => {
    if (!id || !name || !age || !field){
        console.log("at least one parameter is not valid!");
        return;
    }

    if (!((typeof id === 'number') && (typeof age === 'number'))){
        console.log("id or age is not integere type!");
        return;
    }

    if (!((typeof name === 'string') && (typeof field === 'string'))){
        console.log("name or field is not string type!");
        return;
    }

    return {
        id,
        name,
        age,
        field
    }
};

const addObject = (id,name,age,field) => {
    const ob = generateObject(id,name,age,field);
    if(!ob){
        return(arr);
    }
    arr.push(ob);
    return(arr);
};

const deleteObject = (id) => {
    if (!(typeof id === 'number')){
        console.log("id is not integere type!");
        return(arr);
    }
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]["id"]===id) {
            arr.splice(index,1);
        }
    }
    return(arr);
};

const editObject = (id,newName,newAge,newField) => {
    
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]["id"]===id) {
            const ob = generateObject(id,newName,newAge,newField);
            if(!ob){
                return(arr);
            }
            arr[index]=ob;
            return(arr);
        }
    }
    return(arr);
};

addObject(100,"ali",20,"computer");
addObject(101,"reza",30,"math");
addObject(102,"sara",24,"computer");
addObject(103,"akbar",25,"physics");
addObject(104,"maryam",22,"math");

deleteObject(103);

editObject(101,"mohammad",19,"math");